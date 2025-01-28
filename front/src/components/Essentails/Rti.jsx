import React from "react";

const Rti = () => {
  return (
    <div className="p-8 mx-auto">
        <div className="text-center">
            <h1 className="text-4xl font-bold pt-10">Right to Information (RTI/सूचना का अधिकार)</h1>
        </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4">What is the Right to Information (RTI/सूचना का अधिकार)?</h2>

      <p className="mb-4">
        RTI/सूचना का अधिकार is a law that allows people to request information from government offices. It ensures transparency and holds the government accountable for its actions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Who can file an RTI/सूचना का अधिकार application?</h2>
      <p className="mb-4">
        Any citizen of India can file an RTI/सूचना का अधिकार application. Organizations or companies cannot file RTIs, but an individual can do so on their behalf.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">What information can I ask for under RTI/सूचना का अधिकार?</h2>
      <p className="mb-4">
        You can ask for any information related to public policies, government activities, or decisions, except for:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Information that affects national security.</li>
        <li>Personal information that doesn’t concern public interest.</li>
        <li>Trade secrets or sensitive information about other countries.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How can I file an RTI/सूचना का अधिकार application?</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Write your questions clearly on paper or submit it online (if available).</li>
        <li>Pay the application fee (usually ₹10).</li>
        <li>Send it to the Public Information Officer (PIO) of the relevant department.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How long does it take to get a reply?</h2>
      <p className="mb-4">
        The government must reply within 30 days. If the information concerns someone’s life or liberty, the reply should come within 48 hours.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">What if I don’t get a response?</h2>
      <p className="mb-4">
        You can:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>File a First Appeal with the senior officer of the department.</li>
        <li>If you're still not satisfied, file a Second Appeal with the Information Commission.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">What are the fees for filing an RTI/सूचना का अधिकार?</h2>
      <p className="mb-4">
        <strong>Application Fee:</strong> ₹10 (for most states). Additional charges may apply for photocopies or printed documents (e.g., ₹2 per page).
      </p>
      <p className="mb-4">
        Some people, like those below the poverty line (BPL), don’t have to pay any fees.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Can I ask questions about private companies under RTI/सूचना का अधिकार?</h2>
      <p className="mb-4">
        No, RTI applies only to government bodies or organizations funded by the government. However, you can request information about private companies if it's held by a government office (e.g., tax or regulatory details).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Can someone file an RTI/सूचना का अधिकार on my behalf?</h2>
      <p className="mb-4">
        No, the RTI/सूचना का अधिकार must be filed by you. However, you can get help from someone to draft the application.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">What happens if the information is denied?</h2>
      <p className="mb-4">
        If your request is denied without a valid reason, the responsible officer can face penalties, including fines.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Is there any format for filing RTI/सूचना का अधिकार?</h2>
      <p className="mb-4">
        There’s no fixed format for an RTI/सूचना का अधिकार application. Just write your questions in simple language, include your contact details, and address it to the relevant Public Information Officer (PIO).
      </p>
    </div>
  );
};

export default Rti;
