import React from 'react'

const LandingPageComponent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FutureLearn</h1>
          <div className="space-x-4">
            <a href="/login" className="px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">Login</a>
            <a href="/register" className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300">Register</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center flex flex-col items-center justify-center h-screen"
        style={{ backgroundImage: `url(https://images.pexels.com/photos/901962/pexels-photo-901962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}
      >
        <div className="absolute opacity-90 inset-0 bg-gradient-to-t from-black via-black to-transparent"></div>
        <div className="relative z-10 text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Welcome to FutureLearn
          </h1>
          <p className="text-lg md:text-xl text-white mb-6">
            Join us to start your learning journey!
          </p>
          <div className="space-x-4">
            <a href="/login" className="px-6 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-700 border border-white transition duration-300">Login</a>
            <a href="/register" className="px-6 py-2 bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300">Register</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} FutureLearn. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPageComponent
