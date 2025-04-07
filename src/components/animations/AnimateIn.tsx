"use client";

import { cn } from "@/utilities/cn";
import { useEffect, useRef, useState } from "react";

type AnimationVariant = 
  | "fadeUp" 
  | "fadeLeft" 
  | "fadeRight" 
  | "reveal" 
  | "scale"
  | "none";

type AnimateInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: AnimationVariant;
  once?: boolean;
};

export function AnimateIn({ 
  children, 
  delay = 0, 
  className = "", 
  variant = "fadeUp",
  once = true
}: AnimateInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initial animation based on delay
    const timeout = setTimeout(() => {
      setIsVisible(true);
      if (once) setHasAnimated(true);
    }, delay * 1000);
    
    // If not once, set up intersection observer for re-animation
    if (!once && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (!hasAnimated || !once) {
                setIsVisible(true);
              }
            } else if (!once) {
              setIsVisible(false);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
        clearTimeout(timeout);
      };
    }
    
    return () => clearTimeout(timeout);
  }, [delay, once, hasAnimated]);
  
  // Animation styles based on variant
  const getAnimationStyles = () => {
    if (hasAnimated && once) return {}; // No animation if already animated and once is true
    
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transform: 'none',
      transition: `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)`,
      transitionDelay: `${delay}s`,
    };
    
    if (!isVisible) {
      switch (variant) {
        case "fadeUp":
          return { ...baseStyles, transform: 'translateY(20px)' };
        case "fadeLeft":
          return { ...baseStyles, transform: 'translateX(-20px)' };
        case "fadeRight":
          return { ...baseStyles, transform: 'translateX(20px)' };
        case "scale":
          return { ...baseStyles, transform: 'scale(0.95)' };
        case "reveal":
          return { 
            ...baseStyles, 
            clipPath: 'inset(0 100% 0 0)',
            transform: 'none'
          };
        case "none":
          return { opacity: 1 };
        default:
          return baseStyles;
      }
    }
    
    if (variant === "reveal" && isVisible) {
      return { 
        ...baseStyles,
        clipPath: 'inset(0 0 0 0)',
      };
    }
    
    return baseStyles;
  };
  
  return (
    <div
      ref={ref}
      className={cn(className)}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
}