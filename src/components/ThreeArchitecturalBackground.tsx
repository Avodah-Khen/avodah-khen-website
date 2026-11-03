"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

export default function ThreeArchitecturalBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // Keep references to scene objects to update colors dynamically on theme change
  const sceneRef = useRef<THREE.Scene | null>(null);
  const gridRef = useRef<THREE.GridHelper | null>(null);
  const wireMatRef = useRef<THREE.LineBasicMaterial | null>(null);
  const particleMatRef = useRef<THREE.PointsMaterial | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference & touch/mobile devices
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchOrMobile =
      typeof window !== "undefined" &&
      (!window.matchMedia("(pointer: fine)").matches || window.innerWidth < 768);

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const isLight = theme === "light";
    if (!isLight) {
      scene.fog = new THREE.FogExp2(0x0c0d0c, 0.022);
    }

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    // Camera positioned to view deep into the architectural background
    camera.position.set(0, 1.8, 12);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isTouchOrMobile,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(isTouchOrMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 1. 3D Architectural Blueprint Perspective Grid (pushed backward into deep space)
    const gridColor1 = isLight ? 0x8c6d41 : 0xa8875b;
    const gridColor2 = isLight ? 0xd0c8b8 : 0x1b3d36;
    const gridHelper = new THREE.GridHelper(50, 40, gridColor1, gridColor2);
    gridHelper.position.set(0, -3.2, -6);
    gridRef.current = gridHelper;

    if (Array.isArray(gridHelper.material)) {
      gridHelper.material.forEach((mat) => {
        mat.transparent = true;
        mat.opacity = isLight ? 0.16 : 0.20;
      });
    } else {
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = isLight ? 0.16 : 0.20;
    }
    scene.add(gridHelper);

    // 2. 3D Floating Architectural Wireframe Modules (placed deeper in background)
    const group = new THREE.Group();
    const boxGeo = new THREE.BoxGeometry(2.4, 0.4, 2.4);
    const wireMat = new THREE.LineBasicMaterial({
      color: isLight ? 0x8c6d41 : 0xc9a97c,
      transparent: true,
      opacity: isLight ? 0.22 : 0.26,
    });
    wireMatRef.current = wireMat;

    const wireframes: THREE.LineSegments[] = [];
    const positions = [
      { x: -5.0, y: -0.6, z: -8.0 },
      { x: 5.0, y: 1.2, z: -9.5 },
      { x: 0.0, y: -2.0, z: -11.0 },
      { x: -3.8, y: 2.4, z: -12.5 },
      { x: 3.8, y: -1.0, z: -10.0 },
    ];

    positions.forEach((pos) => {
      const edges = new THREE.EdgesGeometry(boxGeo);
      const line = new THREE.LineSegments(edges, wireMat);
      line.position.set(pos.x, pos.y, pos.z);
      group.add(line);
      wireframes.push(line);
    });
    scene.add(group);

    // 3. Ambient architectural particle field (lighter on mobile: 30 particles vs 120 on desktop)
    const particleCount = prefersReducedMotion ? 40 : (isTouchOrMobile ? 30 : 120);
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 35;
      particlePos[i + 1] = (Math.random() - 0.5) * 20;
      particlePos[i + 2] = -Math.random() * 25 - 2;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: isLight ? 0xa8875b : 0xe8d5b5,
      size: 0.05,
      transparent: true,
      opacity: isLight ? 0.25 : 0.45,
    });
    particleMatRef.current = particleMat;

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Window Resize Handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Mouse Tracking for Gentle Parallax (Desktop only, skip on touch/mobile)
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 1.2;
    };
    if (!isTouchOrMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    // Render loop with pause when tab is hidden or when scrolled off-screen
    let animationId: number;
    let isIntersecting = true;
    let isTabVisible = typeof document !== "undefined" ? document.visibilityState !== "hidden" : true;
    let isRunning = false;
    const startTime = performance.now();

    const animate = () => {
      if (!isRunning) return;

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth camera lerp (active when mouse moves on desktop)
      if (!isTouchOrMobile) {
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;
        camera.position.x = currentMouseX * 1.0;
        camera.position.y = 1.8 - currentMouseY * 0.6;
        camera.lookAt(0, 0, -6);
      }

      if (!prefersReducedMotion) {
        // Subtle rotation of wireframe modules
        group.rotation.y = elapsedTime * 0.06;
        wireframes.forEach((wf, idx) => {
          wf.rotation.y = Math.sin(elapsedTime * 0.25 + idx) * 0.12;
        });

        // Drifting particles
        particles.rotation.y = elapsedTime * 0.015;
      }

      renderer.render(scene, camera);

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(animate);
      }
    };

    const updatePlayState = () => {
      const shouldRun = isIntersecting && isTabVisible && !prefersReducedMotion;
      if (shouldRun && !isRunning) {
        isRunning = true;
        animationId = requestAnimationFrame(animate);
      } else if (!shouldRun && isRunning) {
        isRunning = false;
        cancelAnimationFrame(animationId);
      }
    };

    const handleVisibility = () => {
      isTabVisible = document.visibilityState !== "hidden";
      updatePlayState();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Pause rendering when hero/top area is scrolled off-screen
    let observer: IntersectionObserver | null = null;
    if (sentinelRef.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isIntersecting = entry.isIntersecting;
          updatePlayState();
        },
        { threshold: 0 }
      );
      observer.observe(sentinelRef.current);
    }

    if (prefersReducedMotion) {
      renderer.render(scene, camera);
    } else {
      isRunning = true;
      animate();
    }

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationId);
      observer?.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      if (!isTouchOrMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      boxGeo.dispose();
      wireMat.dispose();
    };
  }, [theme]);

  return (
    <>
      {/* Off-screen sentinel: spans top 150vh to pause WebGL when user scrolls to deeper sections */}
      <div
        ref={sentinelRef}
        className="absolute top-0 left-0 w-full h-[150vh] pointer-events-none -z-20"
        aria-hidden="true"
      />
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-45 select-none"
        style={{ zIndex: -10 }}
        aria-hidden="true"
      />
    </>
  );
}
