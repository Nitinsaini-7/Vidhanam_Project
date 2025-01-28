import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className=" mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">1. Information We Collect</h2>
          <p className="text-gray-600 mt-2">
            Personal details such as name, contact number, email address, and required legal documents for service processing.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">2. Use of Information</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>To provide legal documentation services.</li>
            <li>To communicate regarding updates, queries, or promotional offers.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">3. Data Security</h2>
          <p className="text-gray-600 mt-2">
            All client data is securely stored and is not shared with third parties without prior consent, except as required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">4. Third-Party Services</h2>
          <p className="text-gray-600 mt-2">
            For specific services, we may collaborate with trusted third-party vendors. All third-party activities will/वसीयत comply with our privacy standards.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">5. Your Consent</h2>
          <p className="text-gray-600 mt-2">
            By using our services, you agree to the collection and use of your information as outlined in this policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">6. Amendments</h2>
          <p className="text-gray-600 mt-2">
            We reserve the right to update this policy from time to time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
