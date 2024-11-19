export default function  ETH() {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center " style={{color: "#a79d9d"}}>
      <div className=" max-w-4xl px-10 py-10">
        <h1 className="text-5xl font-bold  mb-4 leading-loose"  style={{color: "#a79d9d"}}>
          Ethereum: The Future <br />of Decentralized Finance
        </h1>
    <div>
    <p className="text-lg md:text-xl mb-8 text-red-900 mt-10" style={{color: "rgb(167, 157, 157)"}}>
          Ethereum is a decentralized, open-source blockchain system that enables
          developers to build and deploy smart contracts and decentralized
          applications (dApps). It is more than just a cryptocurrency; it&apos;s a platform
          for creating the next generation of the web, often referred to as Web 3.0.
        </p>
    </div>
        <hr className="mt-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className=" text-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-3xl font-semibold mb-5  mt-10">What is Ethereum?</h2>
            <p>
              Ethereum is a global decentralized platform that runs smart contracts—
              applications that run as programmed without any downtime, fraud, or third-party
              interference. It has its own cryptocurrency, Ether (ETH), which is used to
              power the network.
            </p>
          </div>

          <div className=" text-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-3xl font-semibold mb-4 mt-10">Ethereum vs Bitcoin</h2>
            <p>
              While Bitcoin is primarily a digital currency, Ethereum is a full-fledged
              platform for creating decentralized applications. Bitcoin&apos;s focus is on
              transferring value, while Ethereum is designed to support decentralized
              applications, smart contracts, and even new types of financial services
              like decentralized finance (DeFi).
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-800 text-gray-100 rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6 mt-10 ">The Power of Smart Contracts</h2>
          <p className="text-lg">
            Smart contracts are self-executing contracts where the terms of the agreement are
            written directly into code. Ethereum&apos;s programmability allows developers to build
            decentralized applications (dApps) that can run on the Ethereum blockchain, 
            automating complex business logic without relying on intermediaries or centralized
            entities.
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="https://ethereum.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out"
          >
            Learn More
          </a>
          <a
            href="https://ethereum.org/developers/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out"
          >
            Developer Docs
          </a>
        </div>
      </div>
    </div>
  )
}
