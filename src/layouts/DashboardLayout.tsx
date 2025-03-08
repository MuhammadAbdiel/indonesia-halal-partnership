import { useState } from "react";
import { AiOutlineMenu, AiOutlineUser, AiOutlineLogout, AiOutlineDashboard, AiOutlineSetting, AiOutlineShop } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return <div className="min-h-screen flex bg-gradient-to-br from-gray-50 to-gray-200">
    {/* Sidebar */}
    <div
      className={`bg-white shadow-lg ${isSidebarOpen ? "w-64" : "w-16"
        } transition-all duration-300 p-4 flex flex-col justify-between`}
    >
      <div>
        <button onClick={toggleSidebar} className="text-gray-700 self-end">
          <AiOutlineMenu size={24} />
        </button>
        <nav className="mt-4">
          <Link
            to="/main-dashboard"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <AiOutlineDashboard size={24} className="mr-2" />
            <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
              Dashboard
            </span>
          </Link>
          {user?.role === 'ADMIN' && (
            <Link
              to="/main-dashboard/kafas"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg mt-2"
            >
              <AiOutlineShop size={24} className="mr-2" />
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
                Kode Fasilitator
              </span>
            </Link>
          )}
          <Link
            to="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg mt-2"
          >
            <AiOutlineSetting size={24} className="mr-2" />
            <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
              Settings
            </span>
          </Link>
        </nav>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      {/* Navbar */}
      <div className="bg-white shadow-md p-4 flex justify-end relative">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center text-gray-700"
          >
            <AiOutlineUser size={24} />
            <span className="ml-2">{user?.fullName}</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
              >
                <AiOutlineLogout className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      {children}
    </div>
  </div>;
}

