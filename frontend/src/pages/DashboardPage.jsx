import React, { useState, useContext, useEffect } from 'react';
import projectIllustration from '../assets/project-illustration.png';
import quesAipurpleLogo from '../assets/ques-purple-logo.png';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import AuthContext from '../context/AuthContext';
import api from '../services/api';
import { toast } from 'react-toastify';

const DashboardPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projects, setProjects] = useState([]);
    const [projectName, setProjectName] = useState("");
    const { auth } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
          try {
            const data = await api.getProjects(auth.token);
            setProjects(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchProjects();
      }, [auth.token]);

    const handleCreateProject = async () => {
        if (!projectName.trim()) {
            setError("Project Name Can't be empty");
            return;
        }
        
        try {
            const newProject = await api.createProject({ name: projectName }, auth.token);
            setProjects([...projects, newProject]);
            setProjectName("");
            setError("");
            setIsModalOpen(false)
          } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'An error occurred');
          }
        
        ;
    };

    return (
        <div className="flex flex-col h-screen bg-white p-5">
            {/* Header */}
            <div className="flex justify-between w-full p-5">
                <img src={quesAipurpleLogo} alt="logo"  className='w-[268px] h-[57px]'/>
                <div className="flex space-x-4">
                    <button className="text-gray-600 "><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.4483 47.3175C34.2233 48.8475 32.8283 50.0625 31.1633 50.0625H22.8383C21.1733 50.0625 19.7783 48.8475 19.5758 47.205L18.9683 42.9525C18.3608 42.6375 17.7758 42.3 17.1908 41.9175L13.1408 43.5375C11.5658 44.1225 9.83327 43.47 9.06827 42.075L4.95077 34.9425C4.16327 33.4575 4.50077 31.7025 5.76077 30.7125L9.20327 28.035C9.18077 27.6975 9.15827 27.36 9.15827 27C9.15827 26.6625 9.18077 26.3025 9.20327 25.965L5.78327 23.2875C4.45577 22.275 4.11827 20.4525 4.95077 19.0575L9.11327 11.88C9.87827 10.485 11.6108 9.85496 13.1408 10.4625L17.2133 12.105C17.7983 11.7225 18.3833 11.385 18.9683 11.07L19.5758 6.77246C19.7783 5.19746 21.1733 3.95996 22.8158 3.95996H31.1408C32.8058 3.95996 34.2008 5.17496 34.4033 6.81746L35.0108 11.07C35.6183 11.385 36.2033 11.7225 36.7883 12.105L40.8383 10.485C42.4358 9.89996 44.1683 10.5525 44.9333 11.9475L49.0733 19.1025C49.8833 20.5875 49.5233 22.3425 48.2633 23.3325L44.8433 26.01C44.8658 26.3475 44.8883 26.685 44.8883 27.045C44.8883 27.405 44.8658 27.7425 44.8433 28.08L48.2633 30.7575C49.5233 31.77 49.8833 33.525 49.0958 34.9425L44.9108 42.1875C44.1458 43.5825 42.4133 44.2125 40.8608 43.605L36.8108 41.985C36.2258 42.3675 35.6408 42.705 35.0558 43.02L34.4483 47.3175ZM23.8958 45.5625H30.1058L30.9383 39.825L32.1308 39.33C33.1208 38.925 34.1108 38.34 35.1458 37.575L36.1583 36.81L41.5133 38.97L44.6183 33.57L40.0508 30.015L40.2083 28.755L40.2153 28.6944C40.2804 28.1311 40.3433 27.5865 40.3433 27C40.3433 26.3925 40.2758 25.8075 40.2083 25.245L40.0508 23.985L44.6183 20.43L41.4908 15.03L36.1133 17.19L35.1008 16.4025C34.1558 15.6825 33.1433 15.0975 32.1083 14.67L30.9383 14.175L30.1058 8.43746H23.8958L23.0633 14.175L21.8708 14.6475C20.8808 15.075 19.8908 15.6375 18.8558 16.425L17.8433 17.1675L12.4883 15.03L9.36077 20.4075L13.9283 23.9625L13.7708 25.2225C13.7033 25.8075 13.6358 26.415 13.6358 27C13.6358 27.585 13.6808 28.1925 13.7708 28.755L13.9283 30.015L9.36077 33.57L12.4658 38.97L17.8433 36.81L18.8558 37.5975C19.8233 38.34 20.7908 38.9025 21.8483 39.33L23.0408 39.825L23.8958 45.5625ZM34.8758 27C34.8758 31.3492 31.35 34.875 27.0008 34.875C22.6515 34.875 19.1258 31.3492 19.1258 27C19.1258 22.6507 22.6515 19.125 27.0008 19.125C31.35 19.125 34.8758 22.6507 34.8758 27Z" fill="#3C3C3C" />
                    </svg>
                    </button>
                    <button className="text-gray-600 "><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.9998 58C34.9332 58 37.3332 55.6 37.3332 52.6667H26.6665C26.6665 55.6 29.0665 58 31.9998 58ZM47.9998 42V28.6667C47.9998 20.48 43.6532 13.6267 35.9998 11.8133V10C35.9998 7.78667 34.2132 6 31.9998 6C29.7865 6 27.9998 7.78667 27.9998 10V11.8133C20.3732 13.6267 15.9998 20.4533 15.9998 28.6667V42L10.6665 47.3333V50H53.3332V47.3333L47.9998 42ZM42.6665 44.6667H21.3332V28.6667C21.3332 22.0533 25.3598 16.6667 31.9998 16.6667C38.6398 16.6667 42.6665 22.0533 42.6665 28.6667V44.6667Z" fill="#3C3C3C" />
                    </svg>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            {projects.length === 0 ? (
                <div className='m-auto text-center flex flex-col items-center'>
                    <h1 className="text-3xl font-semibold text-purple-700 mb-6">Create a New Project</h1>
                    <img src={projectIllustration} width={442} height={296} alt="Illustration" />
                    <p className="text-center text-gray-600 max-w-lg mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button
                            className="bg-black text-white py-2 px-6 rounded-md items-center flex gap-2"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <svg width="25" height="25" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5932 28.4982H20.2806V21.1242H27.6554V17.4372H20.2806V10.0631H16.5932V17.4372H9.21846V21.1242H16.5932V28.4982ZM18.4369 37.7157C15.8865 37.7157 13.4897 37.2315 11.2465 36.2631C9.00336 35.2946 7.05212 33.9814 5.3928 32.3235C3.73348 30.6643 2.42015 28.7133 1.45283 26.4703C0.485506 24.2274 0.00122913 21.8308 0 19.2807C0 16.7305 0.484277 14.3339 1.45283 12.091C2.42138 9.84805 3.73471 7.897 5.3928 6.23784C7.05212 4.57869 9.00336 3.26549 11.2465 2.29827C13.4897 1.33104 15.8865 0.84681 18.4369 0.845581C20.9874 0.845581 23.3842 1.32981 25.6273 2.29827C27.8705 3.26672 29.8217 4.57991 31.481 6.23784C33.1404 7.897 34.4543 9.84805 35.4229 12.091C36.3914 14.3339 36.8751 16.7305 36.8738 19.2807C36.8738 21.8308 36.3896 24.2274 35.421 26.4703C34.4525 28.7133 33.1391 30.6643 31.481 32.3235C29.8217 33.9826 27.8705 35.2964 25.6273 36.2649C23.3842 37.2334 20.9874 37.717 18.4369 37.7157Z" fill="#F8F8F8" />
                            </svg>
                            Create New Project
                    </button>
                </div>
            ) :

                <div className='p-10'>
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-semibold text-purple-700 mb-6">Create a New Project</h1>
                        <button
                            className="bg-black text-white py-2 px-6 rounded-md items-center flex gap-2"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <svg width="25" height="25" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5932 28.4982H20.2806V21.1242H27.6554V17.4372H20.2806V10.0631H16.5932V17.4372H9.21846V21.1242H16.5932V28.4982ZM18.4369 37.7157C15.8865 37.7157 13.4897 37.2315 11.2465 36.2631C9.00336 35.2946 7.05212 33.9814 5.3928 32.3235C3.73348 30.6643 2.42015 28.7133 1.45283 26.4703C0.485506 24.2274 0.00122913 21.8308 0 19.2807C0 16.7305 0.484277 14.3339 1.45283 12.091C2.42138 9.84805 3.73471 7.897 5.3928 6.23784C7.05212 4.57869 9.00336 3.26549 11.2465 2.29827C13.4897 1.33104 15.8865 0.84681 18.4369 0.845581C20.9874 0.845581 23.3842 1.32981 25.6273 2.29827C27.8705 3.26672 29.8217 4.57991 31.481 6.23784C33.1404 7.897 34.4543 9.84805 35.4229 12.091C36.3914 14.3339 36.8751 16.7305 36.8738 19.2807C36.8738 21.8308 36.3896 24.2274 35.421 26.4703C34.4525 28.7133 33.1391 30.6643 31.481 32.3235C29.8217 33.9826 27.8705 35.2964 25.6273 36.2649C23.3842 37.2334 20.9874 37.717 18.4369 37.7157Z" fill="#F8F8F8" />
                            </svg>
                            Create New Project
                        </button>
                    </div>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {projects.map((project, index) => (
                            <div key={index} className="border rounded-lg p-4 shadow-md flex items-center cursor-pointer hover:bg-gray-50" onClick={() => navigate(`/dashboard/${project['_id']}`)}>
                                <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center font-bold text-lg rounded">SP</div>
                                <div className="ml-4">
                                    <h2 className="font-semibold">{project.name}</h2>
                                    <p className="text-sm text-gray-500">{project.files} files</p>
                                    <p className="text-xs text-gray-400">Last edited {formatDistanceToNow(new Date(project.updatedAt))}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            }



            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Create Project</h2>
                        <label className="block text-sm font-medium text-gray-700">Enter Project Name:</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded mt-2"
                            placeholder="Type here"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                        <div className="flex justify-end mt-4">
                            <button className="text-red-500 mr-4" onClick={() => setIsModalOpen(false)}>Cancel</button>
                            <button className="bg-purple-700 text-white py-2 px-4 rounded" onClick={handleCreateProject}>Create</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;