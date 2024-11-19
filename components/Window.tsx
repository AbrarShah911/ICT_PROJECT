interface WindowProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}
import Image from "next/image";
import { IoMdGitNetwork } from "react-icons/io";
import Light from "./Light";
const Window = (props: WindowProps) => {
  return (
    <div className="h-[500px] w-[90%] bg-slae-500 mx-auto my-20 border-double border-4 border-[--window-border-color] rounded-md">
      <div className="border-b border-[--window-border-color] m-2 text-white p-2 inter flex flex-row gap-2 items-center">
        <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div> {props.title}
      </div>
      <div className="p-5">
        {props.children}
        <Light blurRadius={100} className="h-[400px] w-[400px] absolute" color='#0C021B'/>
        <Image alt="code" src={"/code_mirror.png"} width={600} height={500} className="ml-5 rounded-md"/>

      </div>
        <NestedWindow title="Commits" items={[
              {message: "Addressed user needs and requirements", user: "John Doe"},
              {message: "Fixed major performance bottleneck", user: "Maggie Cl"},
              {message: "Introduced a more privacy-focused ad system", user: "Danni"},
            ]}/>
    </div>
  );
};

interface NestedWindowProps {
  title: string;
  items: {message:string, user: string,}[];
}

const NestedWindow = (props: NestedWindowProps) => {
  return (
    <>
      <div className="z-10 pb-6 top-[-100px] relative border border-orange-50/20 rounded-xl bg-gradient-to-br from-[rgba(14,2,30,1)] via-[rgba(35,6,78,1)] to-[rgba(14,2,30,1)] h-full w-[90%] px-10 inter -ml-5">
        <h1 className="text-3xl mt-3 text-white font-thin"><IoMdGitNetwork className="inline"/> {props.title}</h1>

        {props.items.map((item, key) => (
          <div className="p-4 border border-orange-50/20 w-[95%] text-white ml-10 mx-auto bg-gradient-to-r from-[rgba(52,26,88,1)] to-[rgba(12,2,27,1)] rounded-md text-lg mt-5" key={key}>
             {item.message} <br />
            <div className="flex">
              <div className="rounded-full bg-black text-4xl flex flex-col items-center justify-center text-white w-[50px] h-[50px]">
                {item.user[0]}
              </div>
              <span className="text-sm justify-center items-center text-center flex ml-3">
              Commit by {item.user}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Window;
export { NestedWindow };
