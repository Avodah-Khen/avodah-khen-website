"use client";

import React from "react";

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function Card3DTilt({
  children,
  className = "",
}: Card3DTiltProps) {
  return (
    <div className={`relative w-full h-full rounded-sm overflow-hidden transition-transform duration-300 ${className}`}>
      {children}
    </div>
  );
}
