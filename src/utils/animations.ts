import { useEffect, RefObject } from "react";

// Unified smooth animation system for all components with reverse animations
export const smoothAnimations = `
  /* Base scroll animation classes - ONE animation per element with smooth reverse */
  .scroll-animate {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .scroll-animate.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .scroll-animate-left {
    opacity: 0;
    transform: translateX(-40px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .scroll-animate-left.visible {
    opacity: 1;
    transform: translateX(0);
  }
  
  .scroll-animate-right {
    opacity: 0;
    transform: translateX(40px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .scroll-animate-right.visible {
    opacity: 1;
    transform: translateX(0);
  }
  
  .scroll-animate-scale {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .scroll-animate-scale.visible {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  
  /* Staggered animations for multiple elements */
  .scroll-animate-delay-1 {
    transition-delay: 0.1s;
  }
  
  .scroll-animate-delay-2 {
    transition-delay: 0.2s;
  }
  
  .scroll-animate-delay-3 {
    transition-delay: 0.3s;
  }
  
  .scroll-animate-delay-4 {
    transition-delay: 0.4s;
  }
  
  /* Simple hover effects - no interference with scroll animations */
  .hover-scale {
    transition: transform 0.3s ease;
  }
  
  .hover-scale:hover {
    transform: scale(1.05);
  }
  
  .hover-glow {
    transition: box-shadow 0.3s ease;
  }
  
  .hover-glow:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  /* Text effects */
  .text-glow {
    text-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
  }
  
  /* Enhanced reverse animations on scroll out */
  @media (prefers-reduced-motion: no-preference) {
    .scroll-animate:not(.visible) {
      opacity: 0;
      transform: translateY(30px);
    }
    
    .scroll-animate-left:not(.visible) {
      opacity: 0;
      transform: translateX(-40px);
    }
    
    .scroll-animate-right:not(.visible) {
      opacity: 0;
      transform: translateX(40px);
    }
    
    .scroll-animate-scale:not(.visible) {
      opacity: 0;
      transform: scale(0.9) translateY(20px);
    }
  }
`;

// Unified scroll observer hook with reverse animations and advanced options
export const useScrollAnimation = (sectionRef: RefObject<HTMLElement>, options?: {
  threshold?: number;
  rootMargin?: string;
  reverseOnExit?: boolean;
  staggerDelay?: number;
}) => {
  useEffect(() => {
    const {
      threshold = 0.15,
      rootMargin = "0px 0px -50px 0px",
      reverseOnExit = true,
      staggerDelay = 100
    } = options || {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element masuk viewport - tampilkan dengan animasi
            entry.target.classList.add("visible");
          } else if (reverseOnExit) {
            // Element keluar viewport - sembunyikan dengan animasi reverse
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(
        ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale"
      );

      elements.forEach((el, index) => {
        // Add staggered delay classes for better animation sequences
        if (index < 4) {
          el.classList.add(`scroll-animate-delay-${index + 1}`);
        }
        
        // Staggered observation for smooth sequence
        setTimeout(() => {
          observer.observe(el);
        }, index * staggerDelay);
      });
    }

    return () => observer.disconnect();
  }, [sectionRef, options]);
};
