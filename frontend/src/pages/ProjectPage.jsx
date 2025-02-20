import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { format } from 'date-fns';
import rssImage from '../assets/rss.jpg';
import youtubeImage from '../assets/youtube.jpg';
import YouTubeUploadModal from '../components/YouTubeUploadModal';
import EditTranscript from '../components/EditTranscript';
import AuthContext from '../context/AuthContext';
import api from '../services/api';
import BreadCrumb from '../components/BreadCrumb';

const ProjectPage = () => {
    const { projectId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [files, setFiles] = useState([]);
    const { auth } = useContext(AuthContext);
    const [projectName, setProjectName] = useState('');
    const [transcript, setTranscript] = useState(false);
    const [fileId, setFileId] = useState('');
   

    const handleTranscript = (fileid, transcript) => {
        setFileId(fileid);
        setTranscript(transcript);
    }

    const saveTranscript = async (fileid, content) => {
        try {
            await api.updateFile(fileid, { content }, auth.token);
            setTranscript('');
            
        } catch (error) {
            console.error('Error updating transcript:', error);
        }
    }

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const project = await api.getProject(projectId, auth.token);
                setProjectName(project.name);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProject();
    }, [projectId, auth.token]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const data = await api.getFiles(projectId, auth.token);
                setFiles(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFiles();
    }, [projectId, auth.token,transcript]);

    const createHandleFile = async (filename, transcript, date) => {
        const newFile = {
            name: filename,
            projectId: projectId,
            content: transcript,
        };

        try {
            const createdFile = await api.createFile(newFile, auth.token);
            setFiles([...files, createdFile]);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteHandleFile = async (fileId) => {
        console.log(fileId)
        try {
            await api.deleteFile(fileId, auth.token);
            setFiles(files.filter(file => file._id !== fileId));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-9 bg-[#F9F9F9]">
                {/* Breadcrumb Navigation */}
                <BreadCrumb projectName={projectName ? projectName : 'Loading...'} />

                {
                    !transcript && <div>
                    {/* Page Heading */}
                    <h1 className="text-2xl font-bold mb-6">Add Podcast</h1>


                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="border p-4 rounded-lg shadow-md text-center cursor-pointer flex justify-between gap-1">
                            <div>
                                <p className="font-bold text-start">RSS Feed</p>
                                <p className="text-sm text-gray-500">Lorem ipsum dolor sit.</p>
                            </div>
                            <img src={rssImage} alt="" className='size-10' />
                        </div>
                        <div className="border p-4 rounded-lg shadow-md text-center cursor-pointer flex justify-between gap-1" onClick={() => setIsModalOpen(true)}>
                            <div>
                                <p className="font-bold text-start">Youtube Video</p>
                                <p className="text-sm text-gray-500">Lorem ipsum dolor sit.</p>
                            </div>
                            <img src={youtubeImage} alt="" className='size-10' />
                        </div>
                        <div className="border p-4 rounded-lg shadow-md text-center cursor-pointer flex justify-between gap-1">
                            <div>
                                <p className="font-bold text-start">Upload Files</p>
                                <p className="text-sm text-gray-500">Lorem ipsum dolor sit.</p>
                            </div>
                            <div className="size-10 bg-purple-200 rounded-lg flex items-center justify-center">
                                <svg className='size-8' viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.1109 39.7775H34.8887C36.2331 39.7775 37.3331 38.6775 37.3331 37.3331V25.1108H41.2198C43.3953 25.1108 44.4953 22.4708 42.9553 20.9308L31.7353 9.71083C31.5092 9.48423 31.2406 9.30444 30.9449 9.18178C30.6492 9.05911 30.3321 8.99597 30.012 8.99597C29.6919 8.99597 29.3749 9.05911 29.0791 9.18178C28.7834 9.30444 28.5148 9.48423 28.2887 9.71083L17.0687 20.9308C15.5287 22.4708 16.6042 25.1108 18.7798 25.1108H22.6664V37.3331C22.6664 38.6775 23.7664 39.7775 25.1109 39.7775ZM15.3331 44.6664H44.6664C46.0109 44.6664 47.1109 45.7664 47.1109 47.1108C47.1109 48.4553 46.0109 49.5553 44.6664 49.5553H15.3331C13.9887 49.5553 12.8887 48.4553 12.8887 47.1108C12.8887 45.7664 13.9887 44.6664 15.3331 44.6664Z" fill="#7E22CE" />
                                </svg>
                            </div>
                        </div>

                    </div>

                    {/* File Upload Section */}
                    {files.length == 0 ?
                        <div className="border-2 border-dashed p-10 rounded-lg text-center">
                            <div className='size-24 flex items-center justify-center mx-auto mb-6'>
                                <svg className='' viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6_3875)">
                                        <path d="M103.7 53.5467C100.073 35.1467 83.9133 21.3334 64.5 21.3334C49.0867 21.3334 35.7 30.08 29.0333 42.88C12.98 44.5867 0.5 58.1867 0.5 74.6667C0.5 92.32 14.8467 106.667 32.5 106.667H101.833C116.553 106.667 128.5 94.72 128.5 80C128.5 65.92 117.567 54.5067 103.7 53.5467ZM101.833 96H32.5C20.7133 96 11.1667 86.4534 11.1667 74.6667C11.1667 63.7334 19.3267 54.6134 30.1533 53.4934L35.86 52.9067L38.5267 47.84C43.5933 38.08 53.5133 32 64.5 32C78.4733 32 90.5267 41.92 93.2467 55.6267L94.8467 63.6267L103.007 64.2134C111.327 64.7467 117.833 71.7334 117.833 80C117.833 88.8 110.633 96 101.833 96ZM43.1667 69.3334H56.7667V85.3334H72.2333V69.3334H85.8333L64.5 48L43.1667 69.3334Z" fill="#7E22CE" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6_3875">
                                            <rect width="128" height="128" fill="white" transform="translate(0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <p className="text-lg text-gray-600">Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
                            <p className="text-sm text-gray-400">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
                            <button className="mt-4 px-4 py-2 text-purple-700 border border-purple-700 rounded-full" onClick={() => setIsModalOpen(true)}>Select File</button>
                        </div> :
                        <div className="bg-white shadow-md rounded-lg mt-8">
                            <div className="p-4 border-b bg-gray-100 font-semibold">Your Files</div>
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b">
                                        <th className="p-4">No.</th>
                                        <th className="p-4">Name</th>
                                        <th className="p-4">Upload Date & Time</th>
                                        <th className="p-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {files.map((file, index) => (
                                        <tr key={file['_id']} className="border-b">
                                            <td className="p-4">{index + 1}</td>
                                            <td className="p-4">{file.name}</td>
                                            <td className="p-4">{format(new Date(file.createdAt), 'dd MMM yy | HH:mm')}</td>
                                            <td className="p-4">
                                                <button className="bg-gray-200 px-3 py-1 rounded mr-2" onClick={() => handleTranscript(file._id, file.content)}>View</button>
                                                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => deleteHandleFile(file._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
                }

                {transcript && <EditTranscript fileTranscript={transcript} saveTranscript={saveTranscript} fileId={fileId} setTranscriptModal={setTranscript}/>}

            </div>

            <YouTubeUploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} createHandleFile={createHandleFile} />
        </div>
    );
};

export default ProjectPage;