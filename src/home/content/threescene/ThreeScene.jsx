import React, { useEffect, useRef } from "react";
import "./ThreeScene.css";
import gsap from "gsap";
import * as THREE from "three";
import { GUI } from "dat.gui";

function ThreeScene({ triggerScatter }) {

  useEffect(() => {
    let scene, camera, renderer;
    let spheres = [];
    let mouse = new THREE.Vector3();
    let center = new THREE.Vector3(0, 0, 0);
    const numSpheres = 40;
    let lastMouseMoveTime = Date.now();
    let explosionActive = false;

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 120;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.querySelector("#canvas-holder-id").append(renderer.domElement);

      const material = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.3 });

      for (let i = 0; i < numSpheres; i++) {
        let sizeCategory = Math.random();
        let radius = sizeCategory < 0.1 ? 14 : sizeCategory < 0.7 ? 13 : 11;

        let geometry = new THREE.SphereGeometry(radius, 32, 32);
        let sphere = new THREE.Mesh(geometry, material);

        sphere.position.set(
          (Math.random() - 0.7) * 80,
          (Math.random() - 0.7) * 80,
          (Math.random() - 0.7) * 80
        );

        sphere.velocity = new THREE.Vector3((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5);
        sphere.bounceCount = 0;
        sphere.radius = radius;

        spheres.push(sphere);
        scene.add(sphere);
      }

      const light = new THREE.DirectionalLight(0xffffff, 2);
      light.position.set(40, 50, 50);
      light.castShadow = false;
      scene.add(light);

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", onWindowResize);

      animate();
    }

    function onMouseMove(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      center.set(mouse.x * 100, mouse.y * 100, mouse.z * 100);
      lastMouseMoveTime = Date.now();
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function resolveCollisions() {
      for (let i = 0; i < spheres.length; i++) {
        for (let j = i + 1; j < spheres.length; j++) {
          let s1 = spheres[i];
          let s2 = spheres[j];

          let dx = s2.position.x - s1.position.x;
          let dy = s2.position.y - s1.position.y;
          let dz = s2.position.z - s1.position.z;
          let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          let minDist = s1.radius + s2.radius;

          if (distance < minDist) {
            let overlap = minDist - distance;
            let direction = new THREE.Vector3(dx, dy, dz).normalize();

            s1.position.addScaledVector(direction, -overlap / 2);
            s2.position.addScaledVector(direction, overlap / 2);

            if (s1.bounceCount < 3) {
              s1.velocity.multiplyScalar(0.8);
              s1.bounceCount++;
            } else {
              s1.velocity.set(0, 0, 0);
            }

            if (s2.bounceCount < 3) {
              s2.velocity.multiplyScalar(0.8);
              s2.bounceCount++;
            } else {
              s2.velocity.set(0, 0, 0);
            }

            let tempVelocity = s1.velocity.clone();
            s1.velocity = s2.velocity.clone();
            s2.velocity = tempVelocity;
          }
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate);
  
      let elapsedTime = Date.now() - lastMouseMoveTime;
      let targetPosition = elapsedTime > 100 ? new THREE.Vector3(0, 0, 0) : mouse;
  
      spheres.forEach(sphere => {
          if (!triggerScatter) {
              let attraction = new THREE.Vector3().subVectors(targetPosition, sphere.position).multiplyScalar(0.001);
              sphere.velocity.add(attraction);
          } else {
              let explosionForce = sphere.position.clone().normalize().multiplyScalar(3);
              sphere.velocity.add(explosionForce);
              sphere.material.opacity -= 0.02;
              sphere.material.transparent = true;
  
              if (sphere.material.opacity <= 0) {
                  scene.remove(sphere); 
              }
          }
      });
  
      if (!triggerScatter) {
          if (elapsedTime > 100) {
              center.set(0, 0, 0);
          }
  
          if (elapsedTime < 3000) {
              spheres.forEach(sphere => {
                  let attractionForce = center.clone().sub(sphere.position).multiplyScalar(0.009);
                  sphere.velocity.add(attractionForce);
  
                  let mouseForce = new THREE.Vector3(mouse.x * 50, mouse.y * 50, mouse.z * 50).sub(sphere.position);
                  let distance = mouseForce.length();
                  if (distance < 40) {
                      mouseForce.multiplyScalar(-0.05);
                      sphere.velocity.add(mouseForce);
                  }
  
                  sphere.velocity.multiplyScalar(0.9);
                  sphere.position.add(sphere.velocity);
              });
  
              resolveCollisions();
          }
      }
  
      renderer.render(scene, camera);
    }
  

    init();
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
      if(document.querySelector("#canvas-holder-id")) {
        document.querySelector("#canvas-holder-id").innerHTML = "";
      }
    };
  }, []);

  useEffect(() => {
    if (triggerScatter) {
      explosionActive = true;
    }
  }, [triggerScatter]);

  return <div id="canvas-holder-id" className="canvas-holder"></div>;
};

export default ThreeScene;

