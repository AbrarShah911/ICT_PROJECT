
import Navbar from "@/components/navbar";
import { View } from "@react-three/drei";

import Particles from "@/components/particles";
import HomePage from "@/components/templates/Home";


const navigationMenu = [
  {
    label: "Home",
    link: "/account/create",
  },
  {
    label: "Projects",
    link: "/navigation",
  },
  {
    label: "Services",
    link: "/account/create",
  },
  {
    label: "About",
    link: "/account/create",
  },
];



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home() {
  return (
    <>
      {/* Top navigation menu */}
      <Navbar items={navigationMenu} />
        <View className="h-screen w-screen fixed" id="Hi">
          
            <Particles />

        </View>

      <HomePage/>
    </>
  );
}
