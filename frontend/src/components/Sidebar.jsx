import quesPurpleLogo from '../assets/ques-purple-logo.png';
import avatarProfile from '../assets/avatar-profile.jpg';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// Sidebar.jsx
export function Sidebar() {
    const { auth } = useContext(AuthContext);
    const user  = auth.user;

    return (
        <div className="w-1/5 bg-gray-100 h-screen p-8 grid">
            <div>
                <Link to={'/dashboard'}>
                <img src={quesPurpleLogo} alt="" className='w-1/2' />
                </Link>
                <ul className="my-6 border-b border-gray-800  pb-9">
                    <li className="py-2 px-4 hover:bg-purple-200 cursor-pointer flex gap-2 items-center"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.3335 0.333374V16.3334M0.333496 8.33337H16.3335" stroke="#7E22CE" stroke-width="2.25641" />
                    </svg>
                        Add your Podcast(s)</li>
                    <li className="py-2 px-4 hover:bg-purple-200 cursor-pointer flex gap-2 items-center"><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.3335 13.4286L0.532108 12.6272L0.200163 12.9591V13.4286H1.3335ZM12.7621 2L13.5635 1.19861C13.1209 0.756018 12.4033 0.756018 11.9607 1.19861L12.7621 2ZM17.3335 6.57143L18.1349 7.37282C18.5775 6.93022 18.5775 6.21264 18.1349 5.77004L17.3335 6.57143ZM5.90492 18V19.1333H6.37437L6.70631 18.8014L5.90492 18ZM1.3335 18H0.200163C0.200163 18.6259 0.707573 19.1333 1.3335 19.1333L1.3335 18ZM2.13488 14.23L13.5635 2.80139L11.9607 1.19861L0.532108 12.6272L2.13488 14.23ZM11.9607 2.80139L16.5321 7.37282L18.1349 5.77004L13.5635 1.19861L11.9607 2.80139ZM16.5321 5.77004L5.10354 17.1986L6.70631 18.8014L18.1349 7.37282L16.5321 5.77004ZM5.90492 16.8667H1.3335V19.1333H5.90492V16.8667ZM2.46683 18V13.4286H0.200163V18H2.46683Z" fill="#646464" />
                    </svg>
                        Create & Repurpose</li>
                    <li className="py-2 px-4 hover:bg-purple-200 cursor-pointer flex gap-2 items-center"><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7621 13.4286V16.8571C12.7621 17.4883 12.2504 18 11.6192 18H2.47635C1.84517 18 1.3335 17.4883 1.3335 16.8571V7.71429C1.3335 7.0831 1.84517 6.57143 2.47635 6.57143H5.90492M5.90492 3.14286V12.2857C5.90492 12.9169 6.4166 13.4286 7.04778 13.4286H16.1906C16.8218 13.4286 17.3335 12.9169 17.3335 12.2857V3.14286C17.3335 2.51167 16.8218 2 16.1906 2H7.04778C6.4166 2 5.90492 2.51167 5.90492 3.14286Z" stroke="#646464" stroke-width="2.26667" />
                    </svg>
                        Podcast Widget</li>
                    <li className="py-2 px-4 hover:bg-purple-200 cursor-pointer flex gap-2 items-center"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.33337 16.4665L8.43877 17.1623C8.65348 17.4384 8.98363 17.5999 9.33337 17.5999C9.6831 17.5999 10.0132 17.4384 10.228 17.1623L9.33337 16.4665ZM1.8667 6.86654L0.894874 6.28344C0.654066 6.68479 0.684747 7.19288 0.9721 7.56234L1.8667 6.86654ZM5.0667 1.5332V0.39987H4.42502L4.09487 0.950108L5.0667 1.5332ZM13.6 1.5332L14.5719 0.950108L14.2417 0.39987H13.6V1.5332ZM16.8 6.86654L17.6946 7.56234C17.982 7.19288 18.0127 6.68479 17.7719 6.28344L16.8 6.86654ZM10.228 15.7707L2.7613 6.17074L0.9721 7.56234L8.43877 17.1623L10.228 15.7707ZM2.83852 7.44963L6.03852 2.1163L4.09487 0.950108L0.894874 6.28344L2.83852 7.44963ZM5.0667 2.66654H13.6V0.39987H5.0667V2.66654ZM12.6282 2.1163L15.8282 7.44963L17.7719 6.28344L14.5719 0.950108L12.6282 2.1163ZM15.9054 6.17074L8.43877 15.7707L10.228 17.1623L17.6946 7.56234L15.9054 6.17074Z" fill="#999999" />
                    </svg>
                        Upgrade</li>
                </ul>
            </div>


            <div className="mt-6 flex-end self-end">
                <div className="py-2 px-4cursor-pointer flex gap-2 items-center border-b border-gray-800 pb-9">
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.55327 1.99023L7.45486 2.48996L7.0784 4.31849C6.4765 4.54835 5.93066 4.87429 5.43747 5.2608L3.59744 4.64557L3.10312 4.49233L2.8468 4.93373L1.58005 7.05156L1.32373 7.49303L1.69906 7.82122L3.12257 9.03221C3.07108 9.34898 3.00471 9.66229 3.00471 9.99506C3.00471 10.3278 3.07108 10.6412 3.12257 10.958L1.69906 12.169L1.32373 12.4972L1.58005 12.9386L2.8468 15.0565L3.10312 15.499L3.59744 15.3446L5.43747 14.7294C5.93066 15.1159 6.4765 15.4418 7.0784 15.6716L7.45486 17.5002L7.55327 18H11.1132L11.2127 17.5002L11.5881 15.6716C12.19 15.4418 12.7358 15.1159 13.229 14.7294L15.069 15.3446L15.5633 15.499L15.8208 15.0565L17.0864 12.9386L17.3439 12.4972L16.9674 12.169L15.5439 10.958C15.5965 10.6412 15.6617 10.3278 15.6617 9.99506C15.6617 9.66229 15.5965 9.34898 15.5439 9.03221L16.9674 7.82122L17.3439 7.49303L17.0864 7.05156L15.8208 4.93373L15.5633 4.49233L15.069 4.64557L13.229 5.2608C12.7358 4.87429 12.19 4.54835 11.5881 4.31849L11.2127 2.48996L11.1132 1.99023H7.55327Z" stroke="#646464" stroke-width="2.14555" stroke-linecap="square" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.622 9.99506C11.622 11.2575 10.5967 12.2822 9.33337 12.2822C8.07007 12.2822 7.04478 11.2575 7.04478 9.99506C7.04478 8.73258 8.07007 7.70801 9.33337 7.70801C10.5967 7.70801 11.622 8.73258 11.622 9.99506Z" stroke="#646464" stroke-width="2.14555" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                    Help
                </div>
                <div className='flex gap-2 pt-9'>
                    <div>
                        <img src={avatarProfile} alt="" />
                    </div>
                    <div>
                        <h4 className='font-semibold text-md'>{user?.username || 'username'}</h4>
                        <p className='text-sm'>{user?.email || 'username@gmail.com'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}