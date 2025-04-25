const HeroSection = () => {
  return (
    <div class="relative bg-cover bg-center h-screen bg-blue-50" style={{backgroundImage: "url('https://plus.unsplash.com/premium_photo-1685656440548-d8cad874d5d8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div class="max-w-4xl px-6">
          <h1 class="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Welcome to Notch</h1>
          <p class="text-lg md:text-2xl mb-8">Discover innovative solutions that drive your business forward with our cutting-edge services.</p>
          <a href="#services" class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">Get Started</a>
        </div>
      </div>
    </div>

  );
};

export default HeroSection; 