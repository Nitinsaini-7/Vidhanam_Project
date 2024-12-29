import React from 'react'

const Will = () => {
  return (
    <div className=" py-10 px-5">
      <div className="text-center">
            <h1 className="text-4xl font-bold pt-10">WILL </h1>
        </div>
    <div className=" mx-auto  p-8">
      <h1 className="text-2xl font-bold mb-6 ">Importance of Creating a Will</h1>
      <p className=" mb-6">
        Creating a will ensures that your assets are distributed according to your wishes, protecting your loved ones from unnecessary legal disputes and delays. It provides clarity, avoids conflicts, and secures the future of your family and dependents.
      </p>

      <h2 className="text-xl font-semibold  mb-4">Procedure for Creating a Will</h2>
      <ol className="list-decimal list-inside  space-y-2">
        <li>Draft a clear document stating your assets, beneficiaries, and executors.</li>
        <li>Get it signed in the presence of two witnesses to ensure its legality.</li>
        <li>For added validity, a person can register the will.</li>
      </ol>
    </div>
  </div>
  )
}

export default Will