import HorizontalList from "@/components/HorizontalList";
import Light from "@/components/Light";
import SkwdWindows from "@/components/SkwdWindows";
import VerticalRoundedList from "@/components/VerticalRoundedList";
import Window from "@/components/Window";
import { LampContainer } from "@/components/ui/lamp";
import Card from "@/components/Card";
import HomeHeader from "../widgets/HomeHeader";
import Footer from  "../Footer"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import EthereumCard from "../Coins"
const AdvancedRealTimeChart = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

const horizontalUserStats = [
  {
    text: "Client : +185",
  },
  {
    text: "Projects : +134",
  },
  {
    text: "Active Orders : +51",
  },
];


const ethereumData = {
  name: 'Ethereum',
  symbol: 'ETH',
  price: 1725.20, // Example price in USD
  marketCap: 2022000000000, // Market cap in USD
  volume24h: 19500000000, // 24h trading volume in USD
  circulatingSupply: 120000000, // Circulating supply in ETH
  change24h: -3.45, // Percentage change in the last 24 hours
  logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png', // Logo URL
};

const bitcoinData = {
  name: 'Bitcoin',
  symbol: 'BTC',
  price: 34567.89,
  marketCap: 650000000000,
  volume24h: 32000000000,
  circulatingSupply: 19000000,
  change24h: 1.45,
  logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
};

const usdtData = {
  name: 'Tether',
  symbol: 'USDT',
  price: 1.00,
  marketCap: 68000000000,
  volume24h: 70000000000,
  circulatingSupply: 68000000000,
  change24h: 0.00,
  logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
};
// TradingViewWidget.jsx
const HomePage = () => {
  const [width,setWidth] = useState(0)
  useEffect(()=>{
    setWidth(x => {
      if( window.innerWidth >1098){
            x = 1500
      }else x= 1000;
      if( window.innerWidth >1004 ){
        x = 1000;
      }else x=  500;
        return x;
    }  );
     },[])
  return (
    
    <div className="h-screen bg-slte-200/50 w-[100vw] relative">

      <div className="p-10 pt-0 w-full grid grid-cols-1 md:grid-cols-2 grid-row-1 mb-10">
        <div className="bg-back w-full row-span-1 h-full ml-10">
          <HomeHeader
            text={"View some of the major projects and prices"}
            start_color={"to-[rgba(50,47,53,0)] to-90%"}
            end_color={"from-[--text-color]"}
            show={true}
          />

          <Light
            className="h-[500px] w-[180px] rotate-45 absolute -z-10"
            color="var(--light-color)"
            blurRadius={400}
          />

          <div className="text-6xl lg:text-8xl mt-10 ml-10 leading-snug font-bold text-white text-shadow ">
            THE NEXT <br className="hidden md:block"/>{" "}
            <span className="text-[--text-color] sm:block hidden">GENERATION</span>{" "}
           SYSTEMS
          </div>
          <p className="text-white text-xl p-5 w-11/12 mt-5 hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptates molestias sit harum temporibus! Eum odit suscipit nisi
            unde expedita?
          </p>
        </div>
      </div>

      <HorizontalList
        items={horizontalUserStats}
        elementGeneralClass="text-2xl md:text-3xl font-extrabold"
        className="mb-10 mt-10"
      />
      <div className="w-full flex flex-row">
        <div className="md:w-1/2"></div>
        <div className="w-full md:w-7/12 mt-20 mb-20 mr-10 backdrop-blur-lg">
          <VerticalRoundedList
            items={[
              {
                heading: "Lorem Ipsum",
                text:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates molestias sit harum temporibus! Eum odit suscipit nisi",
                image: "Lorem Ipsum",
              },
              {
                heading: "Lorem Ipsum",
                text:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates molestias sit harum temporibus! Eum odit suscipit nisi",
                image: "Lorem Ipsum",
              },
              {
                heading: "Lorem Ipsum",
                text:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates molestias sit harum temporibus! Eum odit suscipit nisi",
                image: "Lorem Ipsum",
              },
            ]}
          />
        </div>
      </div>

      <div className="w-full xl:flex h-fit backdrop-blur-sm">
        <div className="border_custom w-full mx-10 my-auto relative xl:flex">
          <div className="h-fit w-full border_right hidden sm:block">
            <Window title="Main.c → Assets → README.md">
              <p className="font-extrabold text-white text-2xl tracking-wide">
                Project Overview:
              </p>
              <p className="text-white ml-5 mt-5 text-lg leading-relaxed inter mb-1">
                Lorem ipsum dolor sit amet{" "}
                <span className="border rounded-md border-[#00FF55] text-[#00FF55] bg-[#00ff5535] p-1">
                  consectetur
                </span>{" "}
                 Ipsa{" "}
                <span className="border rounded-md border-[#ff5e00] text-[#ff5e00] bg-[#ff5e003a] p-1">
                adipisicing elit.
                </span>{" "}
                fuga commodi
                ab quibusdam possimus tempora amet eveniet cum est eaque libero
                autem natus doloribus quod
              </p>
            </Window>
          </div>

       <div className="hidden md:block">
       <SkwdWindows />
       </div>
        </div>
      </div>


     <div className="h-[1000px]">
     <LampContainer>
        <p className="font-extrabold text-white text-5xl sm:text-7xl inter tracking-wide w-full flex flex-col items-center">
          Modern Products
        </p>

        <p className="text-white ml-5 mt-10 text-lg leading-relaxed inter mb-1 w-full flex flex-col items-center">
          <span className="w-1/2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fuga
            commodi ab quibusdam possimus tempora amet eveniet cum est eaque
            libero autem natus doloribus quod
          </span>
        </p>
      </LampContainer>
     </div>
     
      <div className=" relative -translate-y-80  w-full hidden sm:block">
    <AdvancedRealTimeChart theme="dark" width={width}/>

      </div>
    
      <div className="w-full -translate-y-80 top-20 relative ml-5 sm:ml-0 sm:px-20 grid lg:grid-cols-2 lg:grid-rows-2 xl:grid-rows-1 xl:grid-cols-3 gap-2 sm:gap-5 sm:p-2 h-[700px]">
        <Card className="" name={"/ethrum.jpeg"} color={" hue-rotate-[50deg] "} back={" bg-[#060407]"} responsive=" hidden xl:block">
        <EthereumCard ethereumData={ethereumData}/>
       </Card>
        <Card className="" name={"/BTC.jpeg"} color={" hue-rotate-[200deg] "} back={" bg-[#060407]"}  responsive={""}>
        <EthereumCard ethereumData={bitcoinData}/>
        </Card>
        <Card className="" name={"/USDT.jpeg"} color={" hue-rotate-[50deg] "} back={" bg-[#060407]"}  responsive={""}>
        <EthereumCard ethereumData={usdtData}/>
        </Card>
      </div> 
    <div>
    </div>
  <div className="top-[80rem] sm:top-[60rem] md:top-[80rem] lg:top-[20rem] relative ml-10 xl:ml-0">
  <Footer/>
  </div>
    </div>
  );
};

export default HomePage;
