import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating and managing 3D interactions for VidNexus,
 * an AI technology platform specializing in AI video creation.
 *
 * @returns {Object} - Contains the Three.js scene, camera, and renderer.
 */
export const use3D = () => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    // Initialize Three.js scene
    sceneRef.current = new THREE.Scene();
    
    // Setup camera
    cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current.position.z = 5;

    // Setup renderer
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(rendererRef.current.domElement);

    // Set background color to white
    sceneRef.current.background = new THREE.Color(0xffffff);

    // Create a 3D object (e.g., a simple cube)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xff4500 }); // Orange color for AI branding
    const cube = new THREE.Mesh(geometry, material);
    sceneRef.current.add(cube);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      rendererRef.current?.render(sceneRef.current, cameraRef.current);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
      }
      rendererRef.current?.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (sceneRef.current) {
        sceneRef.current = null;
      }
    };
  }, []);

  return {
    scene: sceneRef.current,
    camera: cameraRef.current,
    renderer: rendererRef.current,
  };
};