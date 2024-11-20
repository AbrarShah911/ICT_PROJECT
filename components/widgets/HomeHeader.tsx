
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function HomeHeader(props: any) {
  return (
    <div
      className={`${
        props.show ? "opacity-100" : "opacity-0"
      } w-3/4 rounded-full h-10 bg-gradient-to-l ${props.end_color}  ${
        props.start_color
      }  mt-40 text-white font-bold text-sm md:text-lg text-center justify-center content-center`}
    >
      {props.text}

    </div>
  );
}
export default HomeHeader;
