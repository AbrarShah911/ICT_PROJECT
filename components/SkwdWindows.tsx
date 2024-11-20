import Image from "next/image";
import { FaProjectDiagram } from "react-icons/fa";
import { TbBugFilled, TbAccessPoint } from "react-icons/tb";
//import Light from "./Light";

type SkwdWindowsProps = object
const SkwdWindows = (props: SkwdWindowsProps) => {
  console.log(props)
  return (
    <div className="h-full w-full bg-slae-500">
      <div className="text-5xl text-white font-thin p-10 text-shadow ">
      Booming Fintech industry:
      </div>
      <div className=" bg-purple-200 w-[200px] h-[200px] blur absolute"></div>
      <div className="relative text-lg  text-white/50 w-5/6 mx-auto ">
      We invite you to be a part of this exciting journey as we work to reshape the future of finance. Whether you&apos;re a s
      easoned crypto enthusiast or just starting to explore digital currencies,
      </div>
      <div className="relative top-[-100px]">
        <div className="h-[200px] w-[500px] bg-gradient-to-r from-purple-600/25 to-[--main-color] ml-28 relative top-[200px] skew inter text-white text-xl p-5 rounded-md">
          <p className="text-[#a02424]">
            Bug Reports{" "}
            <TbBugFilled className="bg-red-500 rounded-full text-[] inline text-[#ff9999]" />
            <Image alt="monokai_mirror" src={'/monokai_mirror.png'} width={380} height={400} className="rounded-md"/>

          </p>
        </div>
        <div className="h-[200px] w-[500px] bg-gradient-to-r from-purple-700/50 to-[--main-color] ml-[10rem] relative top-[50px] skew inter text-white text-xl p-5 rounded-md backdrop-blur-sm">
          <p className="text-[#ff8a1d]">
            User queries{" "}
            <FaProjectDiagram className="bg-orange-500 text-[#ffca99] rounded-full inline" />
          </p>

        </div>
        <div className="h-[200px] w-[500px] bg-gradient-to-r from-purple-600/50 to-[--main-color] ml-[13rem] relative top-[-100px] skew inter text-white text-xl p-5 rounded-md backdrop-blur-sm">
          <p className="text-[#73ff73]">
            Project updates{" "}
            <TbAccessPoint className="bg-green-500 rounded-full text-[#c8ffc8] inline" />
          </p>
          <Image alt="night mirror" src={'/night_mirror.png'} width={380} height={400} className="rounded-md"/>


        </div>
      </div>
    </div>
  );
};

export default SkwdWindows;
