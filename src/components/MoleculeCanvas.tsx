import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Atom, RotateCw, Activity } from "lucide-react";

export default function MoleculeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeElement, setActiveElement] = useState<string>("Resveratrol (Bioactive)");
  const [moleculeRotationSpeed, setMoleculeRotationSpeed] = useState<number>(0.005);

  const elementsList = [
    { name: "Resveratrol (Bioactive)", color: "#16a34a", desc: "Anti-aging polyphenol supporting sirtuin gene activation." },
    { name: "5-MTHF (Active Folate)", color: "#0284c7", desc: "Co-factor essential for systemic cellular methylation cycles." },
    { name: "Butyrate (SCFA)", color: "#d97706", desc: "Primary colonocyte fuel stabilizing the intestinal blood-brain axis." },
    { name: "Coenzyme Q10", color: "#e11d48", desc: "Mitochondrial electron transport catalyst optimizing cellular ATP." }
  ];

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Get initial dimensions from container
    let width = container.clientWidth || 500;
    let height = container.clientHeight || 400;

    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Groups to hold molecular structure
    const moleculeGroup = new THREE.Group();
    scene.add(moleculeGroup);

    // Create atoms
    const materials: THREE.MeshPhongMaterial[] = [];
    const spheres: THREE.Mesh[] = [];

    // Colors mapping
    const themeColors = {
      primary: 0x16a34a, // green
      secondary: 0x0284c7, // blue
      accent: 0xd97706, // gold
      carbon: 0x475569, // dark slate
      hydrogen: 0xcbd5e1, // silver light
      oxygen: 0xef4444, // red
    };

    // Central core atom
    const coreGeo = new THREE.SphereGeometry(0.8, 32, 32);
    const coreMat = new THREE.MeshPhongMaterial({
      color: themeColors.primary,
      shininess: 100,
      emissive: 0x052005,
      specular: 0xffffff,
    });
    materials.push(coreMat);
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    moleculeGroup.add(coreMesh);
    spheres.push(coreMesh);

    // Orbiting atoms
    const atomCount = 6;
    const orbitRadius = 2.4;
    const bonds: THREE.Line[] = [];

    for (let i = 0; i < atomCount; i++) {
      const angle = (i / atomCount) * Math.PI * 2;
      const x = Math.cos(angle) * orbitRadius;
      const y = Math.sin(angle) * orbitRadius;
      const z = (Math.random() - 0.5) * 0.8;

      // Vary atomic types (Carbon, Oxygen, Hydrogen)
      let color = themeColors.carbon;
      let size = 0.35;
      if (i % 3 === 0) {
        color = themeColors.oxygen;
        size = 0.45;
      } else if (i % 3 === 1) {
        color = themeColors.secondary;
        size = 0.4;
      } else if (i % 3 === 2) {
        color = themeColors.hydrogen;
        size = 0.25;
      }

      const atomGeo = new THREE.SphereGeometry(size, 24, 24);
      const atomMat = new THREE.MeshPhongMaterial({
        color,
        shininess: 80,
        specular: 0xcccccc,
      });
      materials.push(atomMat);
      const atomMesh = new THREE.Mesh(atomGeo, atomMat);
      atomMesh.position.set(x, y, z);
      moleculeGroup.add(atomMesh);
      spheres.push(atomMesh);

      // Create molecular chemical bond lines from core to outer atom
      const linePoints = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, z)];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x64748b,
        transparent: true,
        opacity: 0.5,
        linewidth: 2,
      });
      const bondLine = new THREE.Line(lineGeo, lineMat);
      moleculeGroup.add(bondLine);
    }

    // Outer orbiting ring of bioactive electrons (particle ring)
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color("#16a34a");
    const color2 = new THREE.Color("#0284c7");

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const radius = 3.5 + Math.random() * 0.4;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = color1.clone().lerp(color2, Math.random());
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    moleculeGroup.add(particleSystem);

    // Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Directional light 1 (top-right)
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    // Directional light 2 (bottom-left)
    const dirLight2 = new THREE.DirectionalLight(0x0284c7, 0.8);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    // Point Light near core
    const pointLight = new THREE.PointLight(0x16a34a, 1.5, 10);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Mouse Interaction
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Calculate normalized coordinates (-1 to 1)
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      targetX = (x / rect.width - 0.5) * 1.5;
      targetY = (y / rect.height - 0.5) * 1.5;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Scroll Integration: Rotate model gently as the user scrolls
    const handleScroll = () => {
      const scrollY = window.scrollY;
      moleculeGroup.rotation.y = scrollY * 0.002;
    };
    window.addEventListener("scroll", handleScroll);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse easing
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      // Base rotation
      moleculeGroup.rotation.y += moleculeRotationSpeed;
      moleculeGroup.rotation.x = currentY * 0.8;
      moleculeGroup.rotation.z = currentX * 0.5;

      // Pulsate point light intensity
      pointLight.intensity = 1.0 + Math.sin(elapsedTime * 3) * 0.5;

      // Breathe outer electron cloud
      const particlePositions = particleGeometry.attributes.position.array as Float32Array;
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
      particleSystem.scale.set(scale, scale, scale);

      // Rotate sub-spheres slightly on their axes
      spheres.forEach((sphere, index) => {
        if (index > 0) {
          sphere.rotation.y += 0.01;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Use ResizeObserver for container resizing
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Retrieve width and height of container
        width = entry.contentRect.width || container.clientWidth || 500;
        height = entry.contentRect.height || container.clientHeight || 400;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      }
    });

    resizeObserver.observe(container);

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      renderer.dispose();
      
      // Dispose materials & geometries
      coreGeo.dispose();
      coreMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      materials.forEach(mat => mat.dispose());
    };
  }, [moleculeRotationSpeed]);

  const activeElementData = elementsList.find(e => e.name === activeElement);

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[500px] flex flex-col justify-between p-6 bg-slate-900/40 dark:bg-slate-950/50 rounded-2xl border border-slate-200/10 backdrop-blur-md overflow-hidden">
      {/* Background canvas */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 cursor-grab active:cursor-grabbing">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Decorative Scientific Coordinates Header */}
      <div className="relative z-10 flex justify-between items-start text-white">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-medium tracking-widest uppercase">
            <Atom className="w-4 h-4 animate-spin-slow" />
            Interactive Simulation
          </div>
          <h3 className="text-xl font-display font-semibold mt-1 tracking-tight text-white">
            Bioactive Molecular Grid
          </h3>
        </div>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs font-mono">
          <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>Active Render: 60FPS</span>
        </div>
      </div>

      {/* Selector UI Overlay */}
      <div className="relative z-10 mt-auto grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* Detail Panel */}
        <div className="bg-slate-950/80 border border-white/10 p-4 rounded-xl backdrop-blur-md flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Target Bioactive</span>
            <h4 className="text-base font-display font-semibold text-emerald-400 mt-0.5">
              {activeElementData?.name}
            </h4>
            <p className="text-xs text-slate-300 mt-2 font-sans leading-relaxed">
              {activeElementData?.desc}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5">
            <RotateCw className="w-3.5 h-3.5 text-sky-400 animate-spin-slow" />
            <span className="text-[10px] font-mono text-slate-400">Drag/move mouse over canvas to orbit bonds</span>
          </div>
        </div>

        {/* Option Grid */}
        <div className="grid grid-cols-2 gap-2 bg-slate-950/40 p-2 rounded-xl border border-white/5 backdrop-blur-sm h-fit">
          {elementsList.map((el) => {
            const isSelected = activeElement === el.name;
            return (
              <button
                key={el.name}
                id={`btn-atom-${el.name.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => {
                  setActiveElement(el.name);
                  // Change rotation speed to indicate interaction burst
                  setMoleculeRotationSpeed(0.02);
                  setTimeout(() => setMoleculeRotationSpeed(0.005), 1200);
                }}
                className={`text-left p-2.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                  isSelected
                    ? "bg-emerald-600/90 text-white shadow-lg shadow-emerald-900/30 border border-emerald-500"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-transparent"
                }`}
              >
                <div className="font-display font-medium truncate">{el.name.split(" ")[0]}</div>
                <div className="text-[10px] opacity-75 truncate">{el.name.split(" ").slice(1).join(" ") || "Compound"}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
