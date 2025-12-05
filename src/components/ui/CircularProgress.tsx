"use client";

interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  isLoading?: boolean;
}

export default function CircularProgress({
  value,
  size = 200,
  strokeWidth = 8,
  isLoading = false,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00a0e6" />
            <stop offset="50%" stopColor="#4dc2ff" />
            <stop offset="100%" stopColor="#80d4ff" />
          </linearGradient>
        </defs>

        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={isLoading ? 0 : offset}
          strokeLinecap="round"
          className={
            isLoading
              ? "circular-progress"
              : "transition-all duration-1000 ease-out"
          }
          style={{
            filter: "drop-shadow(0 0 8px rgba(0, 160, 230, 0.6))",
          }}
        />
      </svg>

      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 160, 230, 0.1) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
