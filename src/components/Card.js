import React, {useEffect} from "react";
import * as THREE from "three";
import bioPhoto from '../assets/bio-photo.JPG';

const Card = () => {
    const cardRef = useRef(null); // Reference to the card container element

    useEffect(() => {
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGL1Renderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        cardRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        animate();

        

        return () => {
            renderer.dispose();
        };
    }, []);

    return (
        <div className="card" ref={cardRef}>
            {/* Render other content inside the card */}
            <img src={bioPhoto} alt="bio photo"/>
            <h2>About Me</h2>
            <p>Fully Stack Web Developer</p>
            <button>Click Me</button>
        </div>

    );

};

export default Card;