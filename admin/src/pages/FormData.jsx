import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FormData = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:3000/data");
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="pb-5">
      <h1 className="text-2xl font-bold py-4">Contact List</h1>
      <div className="">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 whitespace-nowrap">
              <th className="border border-gray-300 px-10 py-2 ">Sr. No.</th>
              <th className="border border-gray-300 px-10 py-2 ">
                Name
              </th>
              <th className="border border-gray-300 px-10 py-2 ">
                Email
              </th>
              <th className="border border-gray-300 px-10 py-2 ">
                Phone
              </th>
              <th className="border border-gray-300 px-10 py-2 ">
                Subject
              </th>
              <th className="border border-gray-300 px-10 py-2 ">
                Message
              </th>
              <th className="border border-gray-300 px-10 py-2">
                Date & Time
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white text-center" : "bg-gray-100 text-center"}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {contact.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link
                    to={`mailto:${contact.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {contact.email}
                  </Link>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {contact.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {contact.subject}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {contact.message}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(contact.date).toDateString()},{" "}
                  {new Date(contact.date).toLocaleTimeString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormData;
