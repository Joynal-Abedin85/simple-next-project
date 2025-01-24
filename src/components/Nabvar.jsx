export default function Navbar() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
      // Add your login logic here
      setIsAuthenticated(true);
    };
  
    const handleLogout = () => {
      // Add your logout logic here
      setIsAuthenticated(false);
    };
    
    return (
        <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Links */}
            <div className="flex items-center">
              <div className="text-white text-lg font-bold">MyApp</div>
              <div className="ml-10 flex space-x-4">
                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="/profile"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </a>
              </div>
            </div>
  
            {/* Authentication Button */}
            <div>
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }