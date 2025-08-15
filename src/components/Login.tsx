import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f8efe3] via-[#f6e7d7] to-[#f3e3c3] ornament-pattern-ultra relative overflow-hidden flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-3xl"></div>
      </div>

      {/* Login Card */}
      <motion.div 
        className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-6 text-center">
          <h1 className="text-2xl font-bold text-white tracking-wider">PREMIUM ITTARS</h1>
          <p className="text-sm text-white/90 mt-1">NATURAL PERFUMERY</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <div className="mb-6">
            <label className="block text-amber-900 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              placeholder="Email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-amber-900 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-amber-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-amber-800">
                Remember me
              </label>
            </div>

            <Link to="/forgot-password" className="text-sm text-amber-600 hover:text-amber-800">
              Forgot password?
            </Link>
          </div>

          <motion.button
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white py-3 px-4 rounded-lg font-medium tracking-wider hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>

          
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-12 left-12 w-20 h-20 opacity-20">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-700 to-transparent"></div>
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-amber-700 to-transparent"></div>
      </div>
    </section>
  );
};

export default Login;