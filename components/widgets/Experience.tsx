import { ScrollControls, View } from "@react-three/drei";
import { Canvas, CanvasProps, } from "@react-three/fiber";


const ExperienceContainer = (props: CanvasProps & React.RefAttributes<HTMLCanvasElement>) => {
  return (
    <Canvas
      className="Canvas fixed top-0 left-0 w-screen h-screen"
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [0, 23, -23],
      }}
      {...props}
      id="cnvs"
    >
      {props.children}
      <ScrollControls pages={2}>

      <View.Port />
      </ScrollControls>

    </Canvas>
  );
};

export default ExperienceContainer;
