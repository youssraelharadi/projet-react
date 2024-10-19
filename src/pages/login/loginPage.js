import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Utiliser useNavigate pour la redirection

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password,
            });
            alert(response.data.message); // Afficher un message de succès
            // Rediriger ou faire autre chose après la connexion
        } catch (err) {
            setError(err.response.data); // Afficher les erreurs
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 p-4 mb-4 rounded">
                        {JSON.stringify(error)}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        required 
                        className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        required 
                        className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <button 
                        onClick={() => navigate('/register')} // Redirection vers la page d'inscription
                        className="text-blue-500 hover:underline"
                    >
                        Don't have an account? Register here.
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
