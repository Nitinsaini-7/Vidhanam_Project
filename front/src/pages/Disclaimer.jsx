import React from "react";

const Disclaimer = () => {
  return (
    <div className="bg-gray-100 h-screen p-4">
      <div className=" mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Disclaimer
        </h1>

        <section className="mb-6">
          
          <p className=" mt-2">
            1. VidhaanamDocs.co.in provides professional legal documentation
            services but does not act as a legal consultant or lawyer.
          </p>
        </section>

        <section className="mb-6">
         
          <p>
           2. The documents prepared are based solely on the information provided
            by the client.
          </p>
        </section>

        <section className="mb-6">
         
          <p className=" mt-2">
           3. For any legal advice, disputes, or litigation matters, we recommend
            consulting a qualified legal professional.
          </p>
        </section>

        <section className="mb-6">
         
          <p className=" mt-2">
           4. While we strive for accuracy, VidhaanamDocs.co.in is not liable for
            errors or omissions in documentation resulting from incomplete or
            inaccurate client inputs.
          </p>
        </section>

       
      </div>
    </div>
  );
};

export default Disclaimer;
