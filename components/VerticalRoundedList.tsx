import Light from "./Light";

interface VerticalRoundedListProps {
  items: { heading: string; image: string; text: string }[];
}
const VerticalRoundedList = (props: VerticalRoundedListProps) => {
  return (
    <div>
      {props.items.map((item, key) => (
        <div className="text-white border border-[#fffcfc23] rounded-full m-5 p-5 flex flex-row" key={key}> 
            <Light
            className="h-[50px] w-[50px] rotate-45 absolute -z-10"
            color="var(--light-color)"
            blurRadius={50}
          />
            <div className="rounded-full bg-[--text-color] w-[50px] h-[50px] mr-5"></div>
            <div>
                <p className="text-xl font-extrabold">{item.heading}</p>
                <p className="text-sm">
                    {item.text}
                </p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalRoundedList;
