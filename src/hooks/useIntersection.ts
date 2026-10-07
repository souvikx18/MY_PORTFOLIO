import { useState, useEffect, useRef } from 'react';

interface UseIntersectionOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersection<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionOptions = {}
): [React.RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isIntersecting];
}
