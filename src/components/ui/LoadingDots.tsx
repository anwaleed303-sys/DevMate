"use client";

export default function LoadingDots() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-2 h-2 bg-primary-400 rounded-full dot-flashing"></div>
      <div className="w-2 h-2 bg-primary-400 rounded-full dot-flashing"></div>
      <div className="w-2 h-2 bg-primary-400 rounded-full dot-flashing"></div>
    </div>
  );
}
