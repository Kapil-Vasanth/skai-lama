import { useState } from "react";

export default function EditTranscript({ fileTranscript, saveTranscript, fileId, setTranscriptModal }) {
    const [isEditing, setIsEditing] = useState(false);
    const [transcript, setTranscript] = useState(fileTranscript);

    return (
        <div className="flex h-screen">
            <div className="flex-1 bg-gray-50 p-10">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <button className="text-gray-700 text-lg size-11" onClick={() => setTranscriptModal(false)}>
                            <svg className="size-8" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.0312 23.4062H11.1562C10.601 23.4062 10.0684 23.6268 9.67575 24.0195C9.28309 24.4121 9.0625 24.9447 9.0625 25.5C9.0625 26.0553 9.28309 26.5879 9.67575 26.9805C10.0684 27.3732 10.601 27.5938 11.1562 27.5938H43.0312C43.5865 27.5938 44.1191 27.3732 44.5118 26.9805C44.9044 26.5879 45.125 26.0553 45.125 25.5C45.125 24.9447 44.9044 24.4122 44.5118 24.0195C44.1191 23.6268 43.5865 23.4062 43.0312 23.4062Z" fill="#1D1929" stroke="#1D1929" />
                                <path d="M12.5233 25.4999L25.3882 12.6382L25.3882 12.6381C25.7813 12.2451 26.0021 11.712 26.0021 11.1562C26.0021 10.6004 25.7813 10.0673 25.3882 9.67426L25.0347 10.0278L25.3882 9.67426C24.9952 9.28123 24.4621 9.06042 23.9063 9.06042C23.3505 9.06042 22.8174 9.28123 22.4244 9.67426L8.08106 24.0176C8.08092 24.0177 8.08075 24.0179 8.08061 24.018C7.88583 24.2124 7.7313 24.4433 7.62583 24.6975C7.52027 24.9518 7.46594 25.2245 7.46594 25.4999C7.46594 25.7753 7.52027 26.048 7.62583 26.3024C7.73136 26.5567 7.88603 26.7878 8.08098 26.9822C8.081 26.9823 8.08103 26.9823 8.08106 26.9823L22.4244 41.3256C22.8174 41.7187 23.3505 41.9395 23.9063 41.9395C24.4621 41.9395 24.9952 41.7187 25.3882 41.3256C25.7813 40.9326 26.0021 40.3995 26.0021 39.8437C26.0021 39.2879 25.7813 38.7548 25.3882 38.3618L25.3882 38.3617L12.5233 25.4999Z" fill="#1D1929" stroke="#1D1929" />
                            </svg>


                        </button>
                        <h1 className="text-2xl font-semibold text-gray-800">Edit Transcript</h1>
                    </div>
                    {isEditing ?
                        <div className="flex gap-4">
                            <button
                                className=" text-red px-12 py-2 border text-red-600 border-red-600 rounded transition"
                                onClick={() => setIsEditing(!isEditing)}
                            >
                                Discard
                            </button>
                            <button
                                className="bg-gray-900 px-12 text-white  py-2 rounded hover:bg-gray-700 transition"
                                onClick={() => saveTranscript(fileId, transcript)}
                            >
                                Save
                            </button>

                        </div> :
                        <button
                            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            Edit
                        </button>
                    }

                </div>

                {/* Transcript Box */}
                <div className="bg-white shadow-md rounded-lg mt-6 p-6">
                    <h3 className="text-purple-700 font-semibold">Speaker</h3>
                    {isEditing ? (
                        <textarea
                            className="w-full h-80 mt-2 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                            value={transcript}
                            onChange={(e) => setTranscript(e.target.value)}
                        />
                    ) : (
                        <p className="text-gray-700 mt-2">{transcript}</p>
                    )}
                </div>
            </div>
        </div>
    );
}