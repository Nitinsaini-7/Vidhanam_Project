import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../App";

const UsersData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(backendUrl + "/api/usersData");
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-5">User List</h1>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Sr. No.</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone No.</th>
          </tr>
        </thead>
        
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="odd:bg-white even:bg-gray-100 text-center"
              >
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-blue-600">
                  <Link to={`mailto:${user.email}`}>{user.email}</Link>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-blue-600">
                  <Link to={`tel:${user.phone}`} >
                  {user.phone}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        
      </table>
    </div>
  );
};

export default UsersData;
