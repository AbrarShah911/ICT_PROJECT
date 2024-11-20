
import Navbar from "@/components/navbar";
import { View } from "@react-three/drei";

import Particles from "@/components/particles";
import HomePage from "@/components/templates/Home";


const navigationMenu = [
  {
    label: "Home",
    link: "#Hero",
  },
  {
    label: "Projects",
    link: "#Stats",
  },
  {
    label: "Contributions",
    link: "#Footer",
  },
  {
    label: "Statistics",
    link: "#Chart",
  },
];



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home() {
  return (
    <>
      {/* Top navigation menu */}
      <Navbar items={navigationMenu} />
        <View className="h-screen w-screen fixed hidden sm:block" id="Hi">
          
            <Particles />

        </View>

      <HomePage/>
    </>
  );
}
