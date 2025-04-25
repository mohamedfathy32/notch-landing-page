import React from 'react';
import { Link } from 'react-router-dom';
import Notch from '../assets/Notch.webp';


export default function NotFound() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex flex-col items-center justify-center px-4">
            <div className="relative z-10 max-w-lg text-center">
                {/* Logo */}
                <div className="mb-8 flex justify-center">
                    <img src={Notch} alt="Notch Logo" className=" w-auto h-20" />
                </div>
                
                {/* 404 Message */}
                <div>
                    <h1 className="text-8xl font-bold text-gray-900 mb-4">404</h1>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Oops! Page Not Found</h2>
                    <p className="text-gray-600 text-lg mb-8">
                        We've searched high and low, but it seems this page has gone on an adventure without us.
                    </p>
                </div>

                {/* Return Home Button */}
                <div>
                    <Link 
                        to="/"
                        className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                    >
                        Return to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}
