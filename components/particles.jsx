/* eslint-disable @typescript-eslint/no-unused-vars */
import * as THREE from "three";
import particlesVertexShader from "@/components/shaders/particles/vertex.glsl.js";
import particlesFragmentShader from "@/components/shaders/particles/fragment.glsl.js";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useMemo, useCallback } from "react";
import { Html } from "@react-three/drei";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { useScroll } from "@react-three/drei";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import gsap from "gsap";
import { GLTFLoader } from "three/addons";
import { Perf } from "r3f-perf";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const toSingleGeometry = (glb) => {
  const geometries = [];
  glb.scene.traverse((object3d) => {
    if (
      object3d instanceof THREE.Mesh &&
      object3d.geometry instanceof THREE.BufferGeometry
    ) {
      // console.log(object3d.geometry)
      geometries.push(object3d.geometry);
    }
  });
  const mergedGeometry = mergeGeometries(geometries);
  return mergedGeometry;
};

function Particles(props) {
  const Transition = props.Transition;
  const MAX_COUNT = 20000;
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
  };
  const scroll = useScroll();
  // const model = useLoader(GLTFLoader, '/skull_downloadable.glb')
  // const model_single = (toSingleGeometry(model));
  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: particlesVertexShader,
        fragmentShader: particlesFragmentShader,
        uniforms: {
          uSize: new THREE.Uniform(0.3),
          uResolution: new THREE.Uniform(
            new THREE.Vector2(
              sizes.width * sizes.pixelRatio,
              sizes.height * sizes.pixelRatio
            )
          ),
          uProgress: { value: 0 },
          uColorA: new THREE.Uniform(new THREE.Color("#ff7300")),
          uColorB: new THREE.Uniform(new THREE.Color("#0091ff")),
        },
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      }),
    [sizes.height, sizes.pixelRatio, sizes.width]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const grp = [];
  const positionSelectionIndex = useRef(0);
  grp.push(
    new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 50, 50),
      new THREE.MeshBasicMaterial()
    )
  );
  const geo_1 = new THREE.Mesh(
    new THREE.IcosahedronGeometry(5, 20),
    new THREE.MeshBasicMaterial()
  );
  geo_1.position.x = 100;
  grp.push(geo_1);

  grp.push(
    new THREE.Mesh(
      new THREE.BoxGeometry(5.0, 5.0, 5.0, 50, 50, 50),
      new THREE.MeshBasicMaterial()
    )
  );
  grp.push(
    new THREE.Mesh(
      new THREE.TorusKnotGeometry(1, 3, 100, 16),
      new THREE.MeshBasicMaterial()
    )
  );

  grp.push(
    new THREE.Mesh(
      new THREE.BoxGeometry(5, 5, 5, 100, 100, 10),
      new THREE.MeshBasicMaterial()
    )
  );

  const geometryPositions = useMemo(() => {
    const positions = grp.map((child) => {
      if (child instanceof THREE.Mesh)
        return child.geometry.attributes.position;
      else {
        // console.log(child)
        return child.attributes.position;
      }
    });

    const geometry_tmp_pos = [];
    let a = 0;
    let pos_offset = [0];
    for (let i = 0; i <= grp.length; i++) {
      if (i == 1) {
        pos_offset[i] = 0;
      } else if (i == 3) {
        pos_offset[i] = 30;
      } else {
        pos_offset[i] = 11;
      }
    }
   
    for (const position of positions) {
      const originalArray = position.array;
      const newArray = new Float32Array(MAX_COUNT * 3);

      for (let i = 0; i < MAX_COUNT; i++) {
        const i3 = i * 3;
        if (i3 < originalArray.length) {
          newArray[i3 + 0] = originalArray[i3 + 0] - pos_offset[a];
          newArray[i3 + 1] = originalArray[i3 + 1];
          newArray[i3 + 2] = originalArray[i3 + 2];
        } else {
          const random = Math.floor(Math.random() * position.count) * 3;
          newArray[i3 + 0] = originalArray[random + 0] - pos_offset[a];
          newArray[i3 + 1] = originalArray[random + 1];
          newArray[i3 + 2] = originalArray[random + 2];
        }
      }
      geometry_tmp_pos.push(new THREE.Float32BufferAttribute(newArray, 3));
      a++;
    }
    return geometry_tmp_pos;
  }, [grp]);

  const geometry = useMemo(() => {
    const sizesArray = new Float32Array(MAX_COUNT);
    for (let i = 0; i < MAX_COUNT; i++) sizesArray[i] = Math.random();
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      geometryPositions[positionSelectionIndex.current]
    );
    geometry.setAttribute("targetPosition", geometryPositions[3]);
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizesArray, 1));
    geometry.setIndex(null);

    return geometry;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const MorphParticles = useCallback((index) => {
    Transition.current = true;
    geometry.attributes.position =
      geometryPositions[positionSelectionIndex.current];
    geometry.attributes.targetPosition = geometryPositions[index];
    gsap.fromTo(
      shaderMaterial.uniforms.uProgress,
      { value: 0 },
      { value: 1, duration: 2, ease: "sine.inOut" }
    );
    setTimeout(() => {
      Transition.current = false;
    }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(() => {
    if (positionSelectionIndex.current != props.index) {
      MorphParticles(props.index);
      positionSelectionIndex.current = props.index;
    }
  });

  return (
    <>
      {/* <Perf /> */}
      <points
        args={[geometry, shaderMaterial]}
        position={[-5, 8, -9]}
        rotation={[0, Math.PI, 0]}
      ></points>
    </>
  );
}

export default function Children() {
  const scroll = useScroll();
  const Transition = useRef(false);
  const [index, setindex] = useState(0);
  let perc = scroll.offset;

  useFrame((state) => {
    var doc = document.documentElement;
    var top = ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0))/document.body.scrollHeight;
    if (Transition.current === false) {
     
      if (top < 0.05) {
        setindex(1);
      } else if (top > 0.05 && top < 0.125) {
        setindex(2);
      } else if (top > 0.1 && top < 0.4) {
        setindex(3);
      }
    }
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <Particles index={index} Transition={Transition} />
    </>
  );
}
