import {
  CONFETTI_COLORS,
  CONFETTI_EMOJIS,
  NO_BUTTON_MESSAGES,
  NO_BUTTON_POSITIONS,
} from "./constants";
import type { ConfettiParticle, TimeLeft } from "./types";

export const calculateTimeLeft = (targetDate: number): TimeLeft => {
  const now = Date.now();
  const distance = targetDate - now;

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

export const createConfettiParticles = (count: number): ConfettiParticle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: -5,
    rotation: Math.random() * 360,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    emoji: CONFETTI_EMOJIS[Math.floor(Math.random() * CONFETTI_EMOJIS.length)],
  }));
};

export const getNoButtonText = (count: number): string => {
  if (count === 0) return NO_BUTTON_MESSAGES[0];
  if (count < 3) return NO_BUTTON_MESSAGES[1];
  if (count < 6) return NO_BUTTON_MESSAGES[2];
  return NO_BUTTON_MESSAGES[3];
};

export const isLastVariant = (count: number): boolean => {
  return count >= 6;
};

export const getNoButtonPosition = (count: number) => {
  const index = Math.min(count, NO_BUTTON_POSITIONS.length - 1);
  return NO_BUTTON_POSITIONS[index];
};
