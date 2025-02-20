import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-white p-10">
      {/* Header */}
      <div className="absolute top-5 left-5 text-2xl font-bold text-purple-700">Ques.AI</div>
      <div className="absolute top-5 right-5 flex space-x-4">
        <button className="text-gray-600"><i className="fas fa-cog"></i></button>
        <button className="text-gray-600"><i className="fas fa-bell"></i></button>
      </div>
      
      {/* Main Content */}
      <h1 className="text-3xl font-semibold text-purple-700 mb-6">Create a New Project</h1>
      <img src="/project-illustration.png" alt="Illustration" className="w-1/2 mb-4" />
      <p className="text-center text-gray-600 max-w-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className="bg-purple-700 text-white py-2 px-6 rounded-md flex items-center">
        <i className="fas fa-plus-circle mr-2"></i> Create New Project
      </button>
    </div>
  );
};

export default HomePage;