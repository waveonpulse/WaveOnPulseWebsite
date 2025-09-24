<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wave On Pulse Radio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    <script src="https://unpkg.com/feather-icons"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #0f172a;
            color: white;
        }
        .gradient-text {
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        .gradient-bg {
            background: linear-gradient(135deg, #1e293b, #0f172a);
        }
        .player-container {
            background: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .wave-animation {
            animation: wave 1.5s ease-in-out infinite;
        }
        @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    </style>
</head>
<body class="min-h-screen">
    <!-- Navigation -->
    <nav class="gradient-bg fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <span class="text-2xl font-bold gradient-text">WAVE ON PULSE</span>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600">Home</a>
                        <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white">About</a>
                        <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white">Shows</a>
                        <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white">DJs</a>
                        <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white">Contact</a>
                    </div>
                </div>
                <div class="md:hidden">
                    <button class="text-gray-300 hover:text-white focus:outline-none">
                        <i data-feather="menu"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center">
                <h1 class="text-5xl md:text-7xl font-bold mb-6 gradient-text" data-aos="fade-up">WAVE ON PULSE</h1>
                <p class="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    Your ultimate destination for the freshest beats and hottest tracks. Tune in 24/7 for non-stop music.
                </p>
                <div class="flex justify-center space-x-4" data-aos="fade-up" data-aos-delay="200">
                    <button class="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition duration-300">
                        Listen Now
                    </button>
                    <button class="px-8 py-3 border border-gray-600 text-white rounded-full font-medium hover:bg-gray-800 transition duration-300">
                        Our Shows
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Live Player -->
    <section class="py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto player-container rounded-xl p-6 shadow-lg" data-aos="fade-up">
            <div class="flex flex-col md:flex-row items-center">
                <div class="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
                    <div class="relative">
                        <img src="http://static.photos/music/640x360/1" alt="Now Playing" class="rounded-lg w-64 h-64 object-cover">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="wave-animation">
                                <i data-feather="music" class="w-12 h-12 text-blue-500"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-2/3 md:pl-8">
                    <h3 class="text-xl font-semibold text-gray-300">NOW PLAYING</h3>
                    <h2 class="text-3xl font-bold mb-2">Summer Vibes Mix</h2>
                    <p class="text-gray-400 mb-4">DJ Pulse • Tropical House</p>
                    
                    <div class="flex items-center mb-6">
                        <div class="w-full bg-gray-700 rounded-full h-2">
                            <div class="bg-blue-500 h-2 rounded-full" style="width: 45%"></div>
                        </div>
                        <span class="ml-4 text-gray-400 text-sm">2:34 / 5:12</span>
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <button class="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
                            <i data-feather="skip-back" class="w-5 h-5"></i>
                        </button>
                        <button class="p-4 rounded-full bg-blue-600 hover:bg-blue-700">
                            <i data-feather="play" class="w-6 h-6"></i>
                        </button>
                        <button class="p-3 rounded-full bg-gray-800 hover:bg-gray-700">
                            <i data-feather="skip-forward" class="w-5 h-5"></i>
                        </button>
                        <div class="flex items-center ml-4">
                            <i data-feather="volume-2" class="w-5 h-5 text-gray-400 mr-2"></i>
                            <div class="w-24 bg-gray-700 rounded-full h-2">
                                <div class="bg-blue-500 h-2 rounded-full" style="width: 80%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Shows -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4" data-aos="fade-up">Featured Shows</h2>
                <p class="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    Discover our most popular shows hosted by talented DJs from around the world.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Show 1 -->
                <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg" data-aos="fade-up">
                    <img src="http://static.photos/music/640x360/2" alt="Morning Vibes" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold">Morning Vibes</h3>
                            <span class="px-3 py-1 bg-blue-600 text-xs rounded-full">LIVE</span>
                        </div>
                        <p class="text-gray-400 mb-4">Start your day with the perfect mix of chill and energy.</p>
                        <div class="flex items-center">
                            <img src="http://static.photos/people/200x200/1" alt="DJ" class="w-10 h-10 rounded-full mr-3">
                            <div>
                                <p class="text-sm font-medium">DJ Sunrise</p>
                                <p class="text-xs text-gray-500">Mon-Fri • 7-9 AM</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Show 2 -->
                <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="100">
                    <img src="http://static.photos/music/640x360/3" alt="Urban Beats" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold">Urban Beats</h3>
                            <span class="px-3 py-1 bg-gray-600 text-xs rounded-full">UPCOMING</span>
                        </div>
                        <p class="text-gray-400 mb-4">The hottest hip-hop and R&B tracks curated for your playlist.</p>
                        <div class="flex items-center">
                            <img src="http://static.photos/people/200x200/2" alt="DJ" class="w-10 h-10 rounded-full mr-3">
                            <div>
                                <p class="text-sm font-medium">MC Groove</p>
                                <p class="text-xs text-gray-500">Tue & Thu • 8-10 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Show 3 -->
                <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="200">
                    <img src="http://static.photos/music/640x360/4" alt="Retro Rewind" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold">Retro Rewind</h3>
                            <span class="px-3 py-1 bg-gray-600 text-xs rounded-full">UPCOMING</span>
                        </div>
                        <p class="text-gray-400 mb-4">Take a trip down memory lane with classic hits from the 70s-90s.</p>
                        <div class="flex items-center">
                            <img src="http://static.photos/people/200x200/3" alt="DJ" class="w-10 h-10 rounded-full mr-3">
                            <div>
                                <p class="text-sm font-medium">Vinyl Vixen</p>
                                <p class="text-xs text-gray-500">Sat • 6-9 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <button class="px-6 py-3 border border-gray-600 text-white rounded-full font-medium hover:bg-gray-800 transition duration-300">
                    View All Shows
                </button>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 gradient-bg">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4" data-aos="fade-up">Stay Updated</h2>
            <p class="text-gray-300 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Subscribe to our newsletter to get the latest updates on shows, events, and exclusive mixes.
            </p>
            <div class="flex flex-col sm:flex-row justify-center max-w-md mx-auto" data-aos="fade-up" data-aos-delay="200">
                <input type="email" placeholder="Your email address" class="px-4 py-3 rounded-l-full sm:rounded-r-none rounded-r-full w-full mb-2 sm:mb-0 text-gray-900">
                <button class="px-6 py-3 bg-blue-600 text-white rounded-r-full sm:rounded-l-none rounded-l-full font-medium hover:bg-blue-700 transition duration-300">
                    Subscribe
                </button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold gradient-text mb-4">WAVE ON PULSE</h3>
                    <p class="text-gray-400">
                        Bringing you the best music from around the world, 24/7.
                    </p>
                    <div class="flex space-x-4 mt-6">
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i data-feather="facebook"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i data-feather="twitter"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i data-feather="instagram"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i data-feather="youtube"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Shows</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">DJs</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Shows</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Morning Vibes</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Urban Beats</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Retro Rewind</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Deep House</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Jazz Lounge</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-4">Contact</h4>
                    <ul class="space-y-2">
                        <li class="flex items-center text-gray-400">
                            <i data-feather="mail" class="w-4 h-4 mr-2"></i>
                            contact@waveonpulse.com
                        </li>
                        <li class="flex items-center text-gray-400">
                            <i data-feather="phone" class="w-4 h-4 mr-2"></i>
                            +1 (555) 123-4567
                        </li>
                        <li class="flex items-center text-gray-400">
                            <i data-feather="map-pin" class="w-4 h-4 mr-2"></i>
                            New York, USA
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                <p>© 2023 Wave On Pulse Radio. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
        feather.replace();
    </script>
</body>
</html>
