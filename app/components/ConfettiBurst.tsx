import type { ConfettiParticle } from "../utils/types";

interface ConfettiBurstProps {
  particles: ConfettiParticle[];
}

export const ConfettiBurst = ({ particles }: ConfettiBurstProps) => {
  if (particles.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute animate-confetti text-3xl"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            color: particle.color,
            animationDelay: `${particle.id * 0.01}s`,
            transform: `rotate(${particle.rotation}deg)`,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
          }}
        >
          {particle.emoji}
        </span>
      ))}
    </div>
  );
};
