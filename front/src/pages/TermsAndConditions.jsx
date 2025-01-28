import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className=" mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Terms and Conditions</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-700">1. Services Provided</h2>
            <p className="text-gray-600">
              VidhaanamDocs.co.in specializes in legal documentation services and does not provide legal advice or representation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700">2. Payment Terms</h2>
            <p className="text-gray-600">
              Full payment is required before the commencement of services unless otherwise agreed.
            </p>
            <p className="text-gray-600">
              Payment modes accepted: UPI, bank transfer, or online payment gateways.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700">3. Turnaround Time</h2>
            <p className="text-gray-600">
              Standard documents are delivered within 3-5 working days after receiving complete information and payment. Complex requests may take longer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700">4. Refund Policy</h2>
            <p className="text-gray-600">
              No refunds will/वसीयत be provided once work has commenced.
            </p>
            <p className="text-gray-600">
              Refunds are subject to review if services are not initiated due to unforeseen circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700">5. Client Responsibility</h2>
            <p className="text-gray-600">
              Clients are required to provide accurate and complete information to ensure the timely preparation of documents.
            </p>
            <p className="text-gray-600">
              Any delay due to incomplete or incorrect information is not the responsibility of VidhaanamDocs.co.in.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700">6. Limitation of Liability</h2>
            <p className="text-gray-600">
              VidhaanamDocs.co.in will/वसीयत not be held responsible for errors resulting from inaccurate client information or misuse of the documents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700">7. Governing Law</h2>
            <p className="text-gray-600">
              All disputes are subject to the jurisdiction of courts in Delhi, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
