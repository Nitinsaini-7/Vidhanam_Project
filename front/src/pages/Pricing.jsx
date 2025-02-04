import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import whatsappImg from "../assets/images/whatsapp.png";

const Pricing = () => {
  const {token, backendUrl } = useContext(AuthContext);

  const documents = [
    {
      id: 1,
      cost: "Price",
      buttonValue: "Pay & Download in English",
      title: "Car Sale Agreement",
      fileName: "Car Sale Agreement.pdf",
      price: 399,
      discountPrice: 199,

    },
    {
      id: 2,
      cost: "कीमत",
      buttonValue: "भुगतान करें और डाउनलोड करें हिंदी में",
      title: "कार बिक्री अनुबंध",
      fileName: "कार बिक्री अनुबंध.pdf",
      price: 399,
      discountPrice: 199,

    },
    {
      id: 3,
      cost: "Price",
      buttonValue: "Pay & Download in English",
      title: "Family Settlement deed",
      fileName: "Family Settlement deed.pdf",
      price: 399,
      discountPrice: 199,
      
    },
    {
      id: 4,
      cost: "कीमत",
      buttonValue: "भुगतान करें और डाउनलोड करें हिंदी में",
      title: "पारिवारिक समझौता विलेख",
      fileName: "पारिवारिक समझौता विलेख.pdf",
      price: 399,
      discountPrice: 199,

    },
    {
      id: 5,
      cost: "Price",
      buttonValue: "Pay & Download in English",
      title: "RENT AGREEMENT",
      fileName: "RENT AGREEMENT.pdf",
      price: 399,
      discountPrice: 199,
      
    },
    {
      id: 6,
      cost: "कीमत",
      buttonValue: "भुगतान करें और डाउनलोड करें हिंदी में",
      title: "किराया अनुबंध",
      fileName: "किराया अनुबंध.pdf",
      price: 399,
      discountPrice: 199,

    },
    {
      id: 7,
      cost: "Price",
      buttonValue: "Pay & Download in English",
      title: "Will draft.pdf",
      fileName: "Will draft.pdf",
      price: 399,
      discountPrice: 199,
      
    },
    {
      id: 8,
      cost: "कीमत",
      buttonValue: "भुगतान करें और डाउनलोड करें हिंदी में",
      title: "वसीयत का मसौदा",
      fileName: "वसीयत का मसौदा.pdf",
      price: 399,
      discountPrice: 199,

    },

    {
      id: 9,
      cost: "Price",
      buttonValue: "Pay & Download in English",
      title: "EMPLOYMENT CONTRACT AGREEMENT",
      fileName: "EMPLOYMENT CONTRACT AGREEMENT.pdf",
      price: 399,
      discountPrice: 199,

    },

    {
      id: 10,
      cost: "कीमत",
      buttonValue: "भुगतान करें और डाउनलोड करें हिंदी में",
      title: "नियुक्ति अनुबंध",
      fileName: "नियुक्ति अनुबंध.pdf",
      price: 399,
      discountPrice: 199,

    },
    {
      id: 11,
      cost: "Price",
      buttonValue: "Pay & Download in English",
      title: "Mutual consent divorce agreement",
      fileName: "Mutual consent divorce agreement.pdf",
      price: 399,
      discountPrice: 199,

    },


    {
      id: 12,
      cost: "कीमत",
      buttonValue: "भुगतान करें और डाउनलोड करें हिंदी में",
      title: "तलाक आपसी सहमति",
      fileName: "तलाक आपसी सहमति.pdf",
      price: 399,
      discountPrice: 199,

    },

  ];

  const handlePayment = async (doc) => {
    try {
      // Create an order on the server
      const { data: order } = await axios.post(
        `${backendUrl}/api/payment/create-order`,
        { amount: doc.discountPrice },
        { headers: { Authorization: `Bearer ${token}` } }
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

      <div className="w-full grid md:grid-cols-2 gap-6 p-6">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-slate-100 shadow-md rounded-lg  p-4 max-w-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-5">{doc.title}</h3>
            <p className="text-green-600 font-semibold text-2xl pb-2">
              {doc.cost}: ₹{doc.discountPrice}
              <span className="text-lg text-red-700 line-through p-2">₹{doc.price}</span>
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

      <div className=" p-4">
      <div className="bg-slate-200 rounded-md  p-6 ">
        <h2 className="text-3xl text-gray-800  font-bold">NOTE-</h2>
        <h2 className="text-2xl font-bold text-indigo-600">Legal Drafting Subscription Offer</h2>
        <p className="text-gray-600">
          Get minor legal drafts done under your subscription at no extra cost!
          If you need major changes or customizations, additional charges will apply.
        </p>
        <p className="text-gray-600 mb-2">
        For quick and hassle-free legal drafting, contact us today!
        <span className="flex items-center gap-1 font-semibold">
          Contact Us:
          <img src={whatsappImg} className="w-5" alt="" />
          <Link to={`tel:9220306753`} className="text-blue-600 ">
          9220306753
          </Link>
        </span>
        </p>

        <div className="pt-10">
          <h2 className="text-3xl font-bold text-gray-800">नोट-</h2>
        <h2 className="text-2xl font-bold text-indigo-600">लीगल ड्राफ्टिंग सब्सक्रिप्शन ऑफर</h2>
        <p className="text-gray-600">
          आपकी सदस्यता में छोटे-मोटे कानूनी ड्राफ्ट बिना किसी अतिरिक्त शुल्क के किए जाएंगे! यदि आपको बड़े बदलाव या कस्टमाइज़ेशन की आवश्यकता है, तो इसके लिए अतिरिक्त शुल्क लागू होंगे।
        </p>
        <p className="text-gray-600 mb-4">तुरंत और सुविधा के साथ कानूनी ड्राफ्टिंग के लिए आज ही संपर्क करें!
        <span className=" flex items-center gap-1 font-semibold">
        हमसे संपर्क करें:
        <img src={whatsappImg} className="w-5" alt="" />
          <Link to={`tel:9220306753`} className="text-blue-600">
          9220306753
          </Link>
        </span>
        </p>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Pricing;
