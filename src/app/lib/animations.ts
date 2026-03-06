// src/lib/animations.ts
import type { Transition, Variants } from "framer-motion";

type AnimationPreset = {
  name: string;
  variants: Variants;
  transition: Transition;
};

// ✅ define easing ONCE here
const EASE_IN_OUT: [number, number, number, number] = [0.42, 0, 0.58, 1];

const slideUp: AnimationPreset = {
  name: "Slide Up",
  variants: {
    initial: { opacity: 0, top: "100vh", scale: 0.4 },
    animate: { opacity: 1, top: "0vh", scale: 1 },
    exit: { opacity: 0, top: "100vh", scale: 0.4 },
  },
  transition: { duration: 0.7, ease: EASE_IN_OUT },
};

const slideRight: AnimationPreset = {
  name: "Slide Right",
  variants: {
    initial: { opacity: 0, left: "-100%", scale: 0.6 },
    animate: { opacity: 1, left: 0, scale: 1 },
    exit: { opacity: 0, left: "100%", scale: 0.6 },
  },
  transition: { duration: 0.7, ease: EASE_IN_OUT },
};

const fadeBack: AnimationPreset = {
  name: "Fade Back",
  variants: {
    initial: { opacity: 0, scale: 0.4 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.4 },
  },
  transition: { duration: 0.7, ease: EASE_IN_OUT },
};

const rotateY: AnimationPreset = {
  name: "Rotate Y",
  variants: {
    initial: { rotateY: 90 },
    animate: { rotateY: 0 },
    exit: { rotateY: 90 },
  },
  transition: { duration: 0.7, ease: EASE_IN_OUT },
};

const rotateX: AnimationPreset = {
  name: "Rotate X",
  variants: {
    initial: { rotateZ: 90, opacity: 0, scale: 0.6 },
    animate: { opacity: 1, rotateZ: 0, scale: 1 },
    exit: { opacity: 0, rotateZ: 90, scale: 0.6 },
  },
  transition: { duration: 0.7, ease: EASE_IN_OUT },
};

const rotateZ: AnimationPreset = {
  name: "Rotate Z",
  variants: {
    initial: { opacity: 0, rotateZ: 360 },
    animate: { opacity: 1, rotateZ: 0 },
    exit: { opacity: 0, rotateZ: 360 },
  },
  transition: { duration: 0.7, ease: EASE_IN_OUT },
};

export const animations: AnimationPreset[] = [
  slideUp,
  slideRight,
  fadeBack,
  rotateX,
  rotateY,
  rotateZ,
];

export const defaultAnimation = slideRight;