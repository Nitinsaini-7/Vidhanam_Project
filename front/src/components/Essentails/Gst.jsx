import React from 'react'

const Gst = () => {
  return (
    <div className="py-10 px-5">
       <div className="text-center">
            <h1 className="text-4xl font-bold pt-10">Goods and Services Tax (GST)</h1>
        </div>
    <div className=" mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 ">Importance of Filing GST</h1>
      <p className=" mb-6">
        Filing GST returns is essential for complying with tax laws, ensuring smooth business operations, and claiming input tax credits. It promotes transparency and helps businesses avoid penalties while contributing to the nation's economic growth.
      </p>

      <h2 className="text-xl font-semibold  mb-4">How to File GST</h2>
      <ol className="list-decimal list-inside  space-y-2">
        <li>GST can be filed online through the GST portal.</li>
        <li>Register your business, maintain accurate records of sales, purchases, and taxes paid.</li>
        <li>Submit the required forms within the due dates.</li>
        <li>Professional assistance can simplify the process.</li>
      </ol>
    </div>
  </div>
  )
}

export default Gst