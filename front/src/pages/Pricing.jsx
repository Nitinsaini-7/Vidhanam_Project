import React from "react";
import Login from "./Login";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import Title from "../components/Title";

const Pricing = () => {
  const { token, backendUrl } = useContext(AuthContext);

  const documents = [
    {
      id: 1,
      cost: "Price",
      buttonValue: "Pay & Download in English",
      title: "Car Sale Agreement",
      fileName: "Car Sale Agreement.pdf",
      price: 199,
    },
    {
      id: 2,
      cost: "Price",
      buttonValue: "Pay & Download in English",
      title: "Family Settlement deed",
      fileName: "Family Settlement deed.pdf",
      price: 199,
    },
    {
      id: 3,
      cost: "Price",
      buttonValue: "Pay & Download in English",
      title: "RENT AGREEMENT",
      fileName: "RENT AGREEMENT.pdf",
      price: 199,
    },
    {
      id: 4,
      cost: "Price",
      buttonValue: "Pay & Download in English",
      title: "Will draft.pdf",
      fileName: "Will draft.pdf",
      price: 199,
    },
    {
      id: 5,
      cost: "कीमत",
      buttonValue: "भुगतान करें और डाउनलोड करें हिंदी में",
      title: "कार बिक्री अनुबंध",
      fileName: "कार बिक्री अनुबंध.pdf",
      price: 199,
    },
    {
      id: 6,
      cost: "कीमत",
      buttonValue: "भुगतान करें और डाउनलोड करें हिंदी में",
      title: "किराया अनुबंध",
      fileName: "किराया अनुबंध.pdf",
      price: 199,
    },
    {
      id: 7,
      cost: "कीमत",
      buttonValue: "भुगतान करें और डाउनलोड करें हिंदी में",
      title: "पारिवारिक समझौता विलेख",
      fileName: "पारिवारिक समझौता विलेख.pdf",
      price: 199,
    },
    {
      id: 8,
      cost: "कीमत",
      buttonValue: "भुगतान करें और डाउनलोड करें हिंदी में",
      title: "वसीयत का मसौदा",
      fileName: "वसीयत का मसौदा.pdf",
      price: 199,
    },
    // { id: 3, title: "Document 3", fileName: "RENT AGREEMENT.pdf", price: 199 },
    // { id: 3, title: "Document 3", fileName: "RENT AGREEMENT.pdf", price: 199 },
    // { id: 3, title: "Document 3", fileName: "RENT AGREEMENT.pdf", price: 199 },
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
        name: `${doc.title}`,
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
        // prefill: {
        //   name: "Your Name",
        //   email: "your.email@example.com",
        //   contact: "1234567890",
        // },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
      toast.error("Payment failed. Please try again.");
    }
  };

  const downloadDocument = (fileName) => {
    const link = document.createElement("a");
    link.href = `${fileName}`; // Ensure the document is accessible on the server
    link.download = fileName;
    link.click();
  };

  return (
    <div className="mt-20">
      <div className="text-center">
        <Title text1={"Download Documents/दस्तावेज़ डाउनलोड करें"} />
      </div>
      <div className="p-6 my-5 bg-indigo-600 text-gray-50 mx-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">
              🔥 Exclusive Offer on Legal Documents! 🔥
            </h2>
            <p className="text-xl mt-1">
              💰 Prices Starting at Just{" "}
              <span className="font-semibold">₹199</span>!
            </p>
            <div className="mt-4">
              <p className="">✅ Quick & Easy Downloads</p>
              <p className="">✅ Professionally Drafted Documents</p>
              <p className="">✅ 100% Legally Compliant</p>
            </div>
            <button className="mt-4 bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
              Grab Your Discount Now!
            </button>
          </div>
        <div className="flex items-center justify-center">
          <h2 className="text-center text-yellow-400 text-5xl md:text-7xl py-2 tracking-tighter font-bold">
            Up to {""}
            <br className="sm:hidden" />
            50% Off
          </h2>
        </div>
        </div>
      </div>
      {token ? (
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-100 shadow-md rounded-lg  p-4 max-w-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-5">{doc.title}</h3>
              <p className="text-green-500 font-semibold text-2xl pb-2">
                {doc.cost}: ₹{doc.price}
              </p>
              <button
                onClick={() => handlePayment(doc)}
                className="bg-indigo-600 text-white text-sm px-6 py-2 rounded-lg hover:bg-indigo-500 duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {doc.buttonValue}
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
