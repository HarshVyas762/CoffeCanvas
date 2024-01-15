import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useRoute, useLocation } from 'wouter';
import { easing } from 'maath';
import { Framecomponent } from './Framecomponent'
import * as THREE from 'three';

import image1 from "../img/Frame1.jpg";
import image2 from "../img/Frame2.png";
import image3 from "../img/Frame3.png";
import image4 from "../img/Frame4.jpg";
import image5 from "../img/Frame5.png";
import image6 from "../img/Frame6.webp";
import image7 from "../img/Frame7.webp";
import image8 from "../img/Frame8.webp";
import image9 from "../img/Frame9.webp";

const GOLDENRATIO = 1.61803398875;

const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: image1 },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: image2 },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: image3 },
  // Left
  {
    position: [-2, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: image4,
  },
  {
    position: [-2.55, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: image5,
  },
  {
    position: [-2.95, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: image6,
  },
  // Right
  {
    position: [1.95, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: image7,
  },
  {
    position: [2.35, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: image8,
  },
  {
    position: [2.75, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: image9,
  },
];

export const Frames= () => {
  console.log(images); 
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();
  const q = new THREE.Quaternion();
  const p = new THREE.Vector3();

  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  }, [params?.id]);

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  return (
    <group
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name
        );
      }}
      onPointerMissed={() => setLocation("/")}
    >
      {images.map((props, index) => (
        <Framecomponent key={index} {...props} name={props.url} />
      ))}
    </group>
  );
};