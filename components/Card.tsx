"use client";
import { CiCirclePlus } from "react-icons/ci";
import { motion } from "framer-motion";
import { useState } from "react";
import Portal from "./Portal"
// import {  View } from "@react-three/drei";
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from "three/examples/jsm/Addons.js";
// import { DRACOLoader } from "three/examples/jsm/Addons.js";
import ETH from "./ETH_content"
//import Scene from "./GPGPU"
import Image from "next/image";
// function Scene() {
//  // const dracoLoader = new DRACOLoader();
//  // const glbLoader = new GLTFLoader()
//   const gltf =useLoader(GLTFLoader, '/model.glb', (loader) => {
//     const dracoLoader = new DRACOLoader();
//     dracoLoader.setDecoderPath("/draco/");
//     loader.setDRACOLoader(dracoLoader);
//   });
//   return <>
//   <primitive object={gltf.scene} position={[2,2,2]} rotation-x={Math.PI}/>
//   </>
// }
interface CardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
//  modelContent : any;
  className: string;
  color:string;
  name:string;
  back:string;
  responsive:string;
}
const Card = (props: CardProps) => {
  const [isClicked, setIsClicked] = useState(false);
  // useEffect(() => {
  //   if (typeof window == 'object') {
  //      const canvas = document.querySelector('#cnvs')
  //      if (isClicked) {
  //         canvas?.classList.add('z-super-alpha')
  //      } else {
  //       canvas?.classList.remove('z-super-alpha')
 

  //      }
  //   }
  // }, [isClicked])
  return (
    <>
      <div
        className={"relative border border-[--window-border-color] h-[1000px] "+ props.responsive}
        onClick={() => {
          setIsClicked(!isClicked);
          console.log("Hi");
        }}
      >
         <Portal selector='body'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: isClicked ? 1 : 0,
              transition: { duration: 0.25 },
            }}
            className={`h-[1000px] overflow-y-scroll modal flex flex-row items-center w-screen justify-center z-50 sm:p-5 backdrop-blur-sm top-0 left-0`}
          >
            <div className={`w-full md:w-5/6 lg:w-1/2 h-[1000px] overflow-y-scroll z-50 rounded-md p-5` + props.back}>
            {/* <View className="h-[500px] w-[500px] z-[500]" id="Hi">
          <mesh>
            <boxGeometry/>
            <meshBasicMaterial/>
          </mesh>
          <Scene/>

            </View> */}

              <div className="text-white  h-1/2 bg-hite Image">
              {/* <div className="bg-amber-400 backdrop-blur-3xl w-1/4 h-40 mx-auto relative flex light_backdrop top-32">klj</div> */}
        
             <Image 
              className={"mx-auto relative" + props.color}
        src={props.name} 
        alt="ETH" 
        width={500} 
        height={500} 
      />
              </div>
            <div className="mt-20">
            <ETH/>
            jklf
            </div>
            </div>
          </motion.div>,
          </Portal>
         
        <main className="back   h-3/4 sm:p-2 text-white">
           <div className="bg-gren-200 w-full h-5/6 ">
           <Image 
              className={"mx-auto relative"+props.color}
        src={props.name} 
        alt="ETH" 
        width={500} 
        height={500} 
      />
          <CiCirclePlus className="inline text-5xl hover:rotate-180 transition-all duration-300 hover:cursor-pointer" />
          </div>
          <footer className="text-white p-4 back">{props.children}</footer>
        </main>
   
      </div>
    </>
  );
};

export default Card;
