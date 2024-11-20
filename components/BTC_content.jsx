export default function BTC() {
    return (
      <div className=" min-h-screen flex flex-col justify-center items-center " style={{color: "#a79d9d"}}>
        <div className=" max-w-4xl px-10 py-10">
          <h1 className="text-5xl font-bold  mb-4 leading-loose"  style={{color: "#a79d9d"}}>
            Bitcoin: The Digital Gold <br /> of the Decentralized Era
          </h1>
      <div>
      <p className="text-lg md:text-xl mb-8 text-red-900 mt-10" style={{color: "rgb(167, 157, 157)"}}>
            Bitcoin is the world’s first decentralized digital currency, designed to allow peer-to-peer transactions without the need for a trusted third party. It is often referred to as &quot;digital gold&quot; due to its store of value qualities and its ability to function as a hedge against inflation.
          </p>
      </div>
          <hr className="mt-5" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className=" text-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-3xl font-semibold mb-5  mt-10">What is Bitcoin?</h2>
              <p>
                Bitcoin is a decentralized cryptocurrency that allows users to send and receive value over the internet without relying on centralized institutions like banks. It uses blockchain technology to ensure secure and transparent transactions that are recorded on a public ledger.
              </p>
            </div>
  
            <div className=" text-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-3xl font-semibold mb-4 mt-10">Bitcoin vs Ethereum</h2>
              <p>
                While Bitcoin is primarily a store of value and a digital currency, Ethereum is a platform designed for creating decentralized applications (dApps) and smart contracts. Bitcoin’s main focus is on transferring and preserving value, whereas Ethereum extends its use cases to decentralized finance (DeFi), digital assets, and more.
              </p>
            </div>
          </div>
  
          <div className="mt-12 bg-gray-800 text-gray-100 rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold mb-6 mt-10 ">The Power of Decentralization</h2>
            <p className="text-lg">
              Bitcoin’s decentralized nature means that no central authority controls it. Transactions are verified by network participants (miners) using proof-of-work, making it secure, transparent, and resistant to censorship. This decentralization ensures that no single entity can manipulate or control Bitcoin.
            </p>
          </div>
  
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://bitcoin.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out"
            >
              Learn More
            </a>
            <a
              href="https://developer.bitcoin.org/"
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
  