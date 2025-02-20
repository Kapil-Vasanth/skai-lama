import React, { useState } from "react";

export default function YouTubeUploadModal({ isOpen, onClose, createHandleFile }) {
    const [name, setName] = useState("");
    const [transcript,setTranscript] = useState("");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold flex items-center">
                        <span className="text-red-500 text-2xl mr-2"><svg width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.9095 73.4306C58.3708 73.4306 74.9579 57.0986 74.9579 36.9521C74.9579 16.8056 58.3708 0.473682 37.9095 0.473682C17.4482 0.473682 0.861084 16.8056 0.861084 36.9521C0.861084 57.0986 17.4482 73.4306 37.9095 73.4306Z" fill="#DA0000" />
                            <path d="M61.5712 25.2466C61.2913 24.2088 60.7378 23.2623 59.9667 22.5031C59.1956 21.7438 58.2343 21.1988 57.1803 20.9232C53.3547 19.9288 37.9096 19.9288 37.9096 19.9288C37.9096 19.9288 22.4591 19.9288 18.606 20.9448C17.5571 21.2246 16.6015 21.7714 15.8355 22.5304C15.0695 23.2894 14.5201 24.2337 14.2426 25.2682C13.2107 29.0511 13.2107 36.9737 13.2107 36.9737C13.2107 36.9737 13.2107 44.8855 14.2426 48.6793C14.5201 49.7138 15.0695 50.6581 15.8355 51.417C16.6015 52.176 17.5571 52.7229 18.606 53.0026C22.4481 54.0186 37.9096 54.0186 37.9096 54.0186C37.9096 54.0186 53.3547 54.0186 57.2077 53.0026C58.2617 52.727 59.223 52.182 59.9941 51.4228C60.7652 50.6635 61.3188 49.717 61.5987 48.6793C62.636 44.8963 62.636 36.9737 62.636 36.9737C62.636 36.9737 62.6086 29.0403 61.5712 25.2466ZM32.9699 44.2478V29.6564L45.7968 36.9521L32.9699 44.2478Z" fill="white" />
                        </svg>
                        </span> Upload from YouTube
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl size-4">
                        <svg className="size-4" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7935 18.8343L4.62749 30.0003C4.20971 30.4181 3.678 30.627 3.03235 30.627C2.3867 30.627 1.85498 30.4181 1.43721 30.0003C1.01943 29.5825 0.810547 29.0508 0.810547 28.4052C0.810547 27.7595 1.01943 27.2278 1.43721 26.81L12.6032 15.644L1.43721 4.47804C1.01943 4.06027 0.810547 3.52856 0.810547 2.88291C0.810547 2.23725 1.01943 1.70554 1.43721 1.28776C1.85498 0.869989 2.3867 0.661102 3.03235 0.661102C3.678 0.661102 4.20971 0.869989 4.62749 1.28776L15.7935 12.4537L26.9595 1.28776C27.3772 0.869989 27.9089 0.661102 28.5546 0.661102C29.2003 0.661102 29.732 0.869989 30.1497 1.28776C30.5675 1.70554 30.7764 2.23725 30.7764 2.88291C30.7764 3.52856 30.5675 4.06027 30.1497 4.47804L18.9838 15.644L30.1497 26.81C30.5675 27.2278 30.7764 27.7595 30.7764 28.4052C30.7764 29.0508 30.5675 29.5825 30.1497 30.0003C29.732 30.4181 29.2003 30.627 28.5546 30.627C27.9089 30.627 27.3772 30.4181 26.9595 30.0003L15.7935 18.8343Z" fill="#3C3C3C" />
                        </svg>

                    </button>
                </div>

                {/* Form */}
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        className="w-full border p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label className="block text-sm font-medium text-gray-700 mt-3">Transcript</label>
                    <textarea
                        rows="3"
                        className="w-full border p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={transcript}
                        onChange={(e) => setTranscript(e.target.value)}
                    ></textarea>
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-5">
                    <button
                        className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
                        onClick={() => {
                            onClose();
                            createHandleFile(name,transcript,new Date().toLocaleString());
                            setName("");
                            setTranscript("");
                        }
                        }
                    >
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
}
