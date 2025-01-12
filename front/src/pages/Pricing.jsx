import React from 'react';
import Login from './Login';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Pricing = () => {
  const { token, backendUrl } = useContext(AuthContext);

  const documents = [
    { id: 1, title: "Document 1", fileName: "Vidhanam doc.pdf", price: 200 },
    { id: 2, title: "Document 2", fileName: "Vidhanam doc.pdf", price: 200 },
    { id: 3, title: "Document 3", fileName: "Vidhanam doc.pdf", price: 200 },
  ];

  const handlePayment = async (doc) => {
    try {
      // Create an order on the server
      const { data: order } = await axios.post(
        `${backendUrl}/api/payment/create-order`,
        { amount: doc.price },
        { headers: { Authorization: `Bearer ${token}` } } // Pass token for authentication
      );

      // Open Razorpay payment modal
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Your Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: "Document Purchase",
        description: `Purchase ${doc.title}`,
        order_id: order.id,
        handler: async (response) => {
          try {
            // Verify payment on the server
            const verifyResponse = await axios.post(
              `${backendUrl}/api/payment/verify-payment`,
              response,
              { headers: { Authorization: `Bearer ${token}` } }
            );

            if (verifyResponse.data.success) {
              downloadDocument(doc.fileName);
            } else {
              toast.error("Payment verification failed. Please try again.");
            }
          } catch (err) {
            // console.error("Payment verification error:", err);
            toast.error(err);
          }
        },
        prefill: {
          name: "Your Name",
          email: "your.email@example.com",
          contact: "1234567890",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Payment failed. Please try again.");
    }
  };

  const downloadDocument = (fileName) => {
    const link = document.createElement("a");
    link.href = `${fileName}`; // Ensure the document is accessible on the server
    link.download = fileName;
    link.click();
  };

  return (
    <div>
      {token ? (
        <div className="flex flex-col mt-20 md:flex-row justify-center items-center gap-6 p-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white shadow-md rounded-lg p-4 max-w-xs text-center border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
              <p className="text-gray-600 mb-4">Price: ₹{doc.price}</p>
              <button
                onClick={() => handlePayment(doc)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Pay & Download
              </button>
            </div>
          ))}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Pricing;
