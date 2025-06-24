import React, { useEffect, useRef } from 'react';

const useWindowSize = () => {

  const [windowSize, setWindowSize] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;

};

const FlyingCircle = () => {

  const { width } = useWindowSize();
  const circleRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (width <= 1064) return;

    const circleElement = circleRef.current;
    const mouse = { x: 0, y: 0 };
    const previousMouse = { x: 0, y: 0 };
    const circle = { x: 0, y: 0 };
    let currentScale = 0;
    let currentAngle = 0;
    let rotationEnabled = true;
    let mouseMoved = false;

    const fadeInOnLoadDuration = 1;
    const fadeHoverDuration = 0.2;

    const fadeInCircleOnLoad = () => {
      circleElement.style.transition = `opacity ${fadeInOnLoadDuration}s ease-in-out`;
      circleElement.style.opacity = '1';
    };

    const fadeInCircle = () => {
      circleElement.style.transition = `opacity ${fadeHoverDuration}s ease-in-out`;
      circleElement.style.opacity = '1';
    };

    const fadeOutCircle = () => {
      circleElement.style.transition = `opacity ${fadeHoverDuration}s ease-in-out`;
      circleElement.style.opacity = '0';
    };

    const handleMouseMove = (e) => {
      if (!mouseMoved) {
        fadeInCircle();
        mouseMoved = true;
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const speed = 0.12;

    const tick = () => {
      circle.x += (mouse.x - circle.x) * speed;
      circle.y += (mouse.y - circle.y) * speed;
      const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

      const deltaMouseX = mouse.x - previousMouse.x;
      const deltaMouseY = mouse.y - previousMouse.y;
      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;

      const mouseVelocity = Math.min(
        Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
        150
      );
      const scaleValue = (mouseVelocity / 150) * 0.5;
      currentScale += (scaleValue - currentScale) * speed;
      const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

      const angle = Math.atan2(deltaMouseY, deltaMouseX) * (180 / Math.PI);
      if (mouseVelocity > 20 && rotationEnabled) {
        currentAngle = angle;
      }

      const rotateTransform = rotationEnabled ? `rotate(${currentAngle}deg)` : '';
      circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    animationFrameRef.current = requestAnimationFrame(tick);
    window.addEventListener('mousemove', handleMouseMove);

    const attachListeners = () => {
      const circleDissapearTo = document.querySelectorAll('.circle-none');
      circleDissapearTo.forEach((container) => {
        container.addEventListener('mouseenter', fadeOutCircle);
        container.addEventListener('mouseleave', fadeInCircle);
      });
      return circleDissapearTo;
    };

    let currentElements = attachListeners();

    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll('.circle-none');
      if (newElements.length !== currentElements.length || Array.from(newElements).some((el, i) => el !== currentElements[i])) {
        currentElements.forEach((container) => {
          container.removeEventListener('mouseenter', fadeOutCircle);
          container.removeEventListener('mouseleave', fadeInCircle);
        });
        currentElements = attachListeners();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        fadeOutCircle();
      } else {
        fadeInCircle();
      }
    });

    document.addEventListener('mouseenter', fadeInCircle);
    document.addEventListener('mouseleave', fadeOutCircle);

    const fadeInTimeout = setTimeout(() => {
      fadeInCircleOnLoad();
    }, 1000);

    return () => {
      clearTimeout(fadeInTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      observer.disconnect();
      currentElements.forEach((container) => {
        container.removeEventListener('mouseenter', fadeOutCircle);
        container.removeEventListener('mouseleave', fadeInCircle);
      });
      document.removeEventListener('visibilitychange', () => {});
      document.removeEventListener('mouseenter', fadeInCircle);
      document.removeEventListener('mouseleave', fadeOutCircle);
    };
  }, [width]);

  if (width <= 1064) return null;

  return (

    <div
      ref={circleRef}
      className="fixed w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[8000] opacity-0"
      style={{ top: '-6px', left: '-6px', color: '#000' }}
    />

  );

};

export default FlyingCircle;