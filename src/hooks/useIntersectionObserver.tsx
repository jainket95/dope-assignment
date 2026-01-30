import { useEffect, type RefObject } from 'react';

type IntersectionObserverProps = {
  target: RefObject<HTMLDivElement | null>;
  onIntersect: () => void;
  enabled: boolean;
};
export const useIntersectionObserver = ({
  target,
  onIntersect,
  enabled,
}: IntersectionObserverProps) => {
  useEffect(() => {
    if (!enabled || !target.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      {
        threshold: 0,
        rootMargin: '200px',
      }
    );

    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, [enabled, onIntersect, target]);
};
