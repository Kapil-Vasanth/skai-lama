import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api';
import AuthContext from '../context/AuthContext';
import quesLogo from '../assets/QuesLogo 1.png';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response;
      if (isRegister) {
        response = await api.register(formData);
      } else {
        response = await api.login(formData);
      }
      login(response.token, response.user);
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Box */}
      <div className="w-1/2 w-lg-2/3 flex flex-col justify-start p-20 bg-gradient-to-r from-purple-500 to-purple-900 text-white">
        <img src={quesLogo} alt="" width={256} height={57} className='mb-6'/>
        <h1 className="text-[40px] text-lg-[90px] leading-tight font-thin mb-4 max-w-[647px] mt-4">
          Your podcast will no longer be just a hobby.
        </h1>
        <p className="text-3xl max-w-[400px]">Supercharge Your Distribution using our AI assistant!</p>
      </div>
      
      {/* Right Box */}
      <div className="w-1/2 w-lg-2/3 bg-gray-100 flex flex-col justify-center items-center p-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-purple-700">Welcome to Ques.AI</h2>
        </div>
        <form onSubmit={onSubmit} className="w-full">
          {isRegister && (
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChange}
              placeholder="Name"
              required
              className="w-full p-3 mb-4 border rounded-md"
            />
          )}
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            required
            className="w-full p-3 mb-4 border rounded-md"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            required
            className="w-full p-3 mb-4 border rounded-md"
          />
          <div className="flex justify-between w-full text-sm mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-purple-600">Forgot password?</a>
          </div>
          <button 
            type="submit" 
            className="w-full p-3 bg-purple-700 text-white rounded-md flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
            ) : (
              isRegister ? 'Register' : 'Login'
            )}
          </button>
        </form>
        <div className="my-4 text-gray-500">or</div>
        <button className="w-full p-3 border rounded-md flex items-center justify-center">
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5 mr-2" /> 
          Continue with Google
        </button>
        <p className="mt-4 text-sm">
          Don’t have an account? 
          <a href="#" className="text-purple-600" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Login' : 'Create Account'}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
