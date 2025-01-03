import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaCheckCircle } from "react-icons/fa";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from API
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://adrenix-backend-production.up.railway.app/api/users"); // Adjust URL as needed
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-8 sm:mb-10">
        User Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <motion.div
            key={user._id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <FaUserCircle className="text-5xl sm:text-6xl text-blue-500" />
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  {user.username}
                </h2>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-sm font-medium text-green-600 flex items-center justify-center sm:justify-start gap-2 mt-2">
                  <FaCheckCircle /> Active
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default User;
