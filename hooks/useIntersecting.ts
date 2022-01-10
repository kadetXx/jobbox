import React, { useState, useEffect } from "react";

const isIntersecting = (
  ref: React.MutableRefObject<Element>,
  threshold?: number,
  root?: Element,
  rootMargin?: string
) => {
  const [intersecting, setIntersecting] = useState<boolean>(false);

  const options = {
    root: root || null,
    rootMargin: `${rootMargin || 0}px`,
    threshold: threshold || 1,
  };

  useEffect(() => {
    const checkIntersect = ([entry]: [entry: IntersectionObserverEntry]) => {
      setIntersecting(entry.isIntersecting);
    };

    const target = ref.current;
    const observer = new IntersectionObserver(checkIntersect, options);

    target && observer.observe(target);

    return () => observer.unobserve(target);
  }, [ref, intersecting]);

  return intersecting;
};

export default isIntersecting;
