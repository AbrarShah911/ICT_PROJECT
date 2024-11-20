export default function USDT() {
    return (
      <div className=" min-h-screen flex flex-col justify-center items-center " style={{color: "#a79d9d"}}>
        <div className=" max-w-4xl px-10 py-10">
          <h1 className="text-5xl font-bold  mb-4 leading-loose"  style={{color: "#a79d9d"}}>
            USDT: The Stablecoin <br /> for a Digital Economy
          </h1>
      <div>
      <p className="text-lg md:text-xl mb-8 text-red-900 mt-10" style={{color: "rgb(167, 157, 157)"}}>
            USDT (Tether) is a stablecoin pegged to the value of a traditional fiat currency, typically the US Dollar. It combines the stability of a fiat currency with the technological benefits of cryptocurrencies, offering a way to transact digitally without the volatility typically associated with other cryptocurrencies.
          </p>
      </div>
          <hr className="mt-5" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className=" text-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-3xl font-semibold mb-5  mt-10">What is USDT?</h2>
              <p>
                USDT is a type of cryptocurrency known as a stablecoin, which is pegged to the value of a fiat currency (such as the US Dollar). This provides stability, allowing users to transact in a digital currency without the price fluctuations often seen in other cryptocurrencies like Bitcoin or Ethereum.
              </p>
            </div>
  
            <div className=" text-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-3xl font-semibold mb-4 mt-10">USDT vs Bitcoin</h2>
              <p>
                While Bitcoin is known for its volatility and as a store of value, USDT is designed to maintain a stable value, making it ideal for transactions, savings, or acting as a bridge between different cryptocurrencies. Bitcoin&apos;s value can fluctuate significantly, but USDT&apos;s value remains stable, pegged to the US Dollar.
              </p>
            </div>
          </div>
  
          <div className="mt-12 bg-gray-800 text-gray-100 rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold mb-6 mt-10 ">The Benefits of Stablecoins</h2>
            <p className="text-lg">
              USDT provides a digital asset with the stability of traditional fiat currencies, offering users the benefits of cryptocurrency transactions such as faster settlement and lower fees, while avoiding the typical price volatility of other crypto assets. USDT is commonly used for trading, hedging, or transferring value across exchanges.
            </p>
          </div>
  
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://tether.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out"
            >
              Learn More
            </a>
            <a
              href="https://tether.to/en/whitepaper/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out"
            >
              Whitepaper
            </a>
          </div>
        </div>
      </div>
    )
  }
  