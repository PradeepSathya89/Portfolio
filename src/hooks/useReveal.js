import { useEffect, useRef, useState } from 'react';

/**
 * Adds a `revealed` flag once the element scrolls into view.
<<<<<<< HEAD
=======
 * Fires once, then stops observing — no work on every scroll frame.
>>>>>>> 00fef651b76862429170abebcc0a9309f8c3cb30
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduce || typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
        ...options,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
<<<<<<< HEAD
  }, []);
=======
  }, [options]);
>>>>>>> 00fef651b76862429170abebcc0a9309f8c3cb30

  return [ref, revealed];
}

/**
<<<<<<< HEAD
 * Tracks which section is currently on screen.
=======
 * Tracks which section is currently on screen, for nav highlighting.
>>>>>>> 00fef651b76862429170abebcc0a9309f8c3cb30
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join(',');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
<<<<<<< HEAD
            (a, b) => b.intersectionRatio - a.intersectionRatio
=======
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
>>>>>>> 00fef651b76862429170abebcc0a9309f8c3cb30
          )[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        threshold: [0.2, 0.5, 0.8],
        rootMargin: '-80px 0px -40% 0px',
      }
    );

    key.split(',').forEach((id) => {
      const el = document.getElementById(id);

      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [key]);

  return active;
}

/**
<<<<<<< HEAD
 * Slowly auto-scrolls a horizontal container.
=======
 * Slowly auto-scrolls a horizontal container, looping back to the start.
 * Pauses on hover, touch, and keyboard focus so it never fights the user.
>>>>>>> 00fef651b76862429170abebcc0a9309f8c3cb30
 */
export function useAutoScroll({ speed = 0.4 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    if (
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
    ) {
      return;
    }

    let paused = false;
    let raf;

    const pause = () => {
      paused = true;
    };

    const resume = () => {
      paused = false;
    };

<<<<<<< HEAD
=======
    const handleTouchEnd = () => {
      setTimeout(resume, 2500);
    };

>>>>>>> 00fef651b76862429170abebcc0a9309f8c3cb30
    node.addEventListener('mouseenter', pause);
    node.addEventListener('mouseleave', resume);
    node.addEventListener('touchstart', pause, {
      passive: true,
    });
<<<<<<< HEAD
    node.addEventListener(
      'touchend',
      () => setTimeout(resume, 2500),
      { passive: true }
    );
=======
    node.addEventListener('touchend', handleTouchEnd, {
      passive: true,
    });
>>>>>>> 00fef651b76862429170abebcc0a9309f8c3cb30
    node.addEventListener('focusin', pause);
    node.addEventListener('focusout', resume);

    let pos = node.scrollLeft;

    const step = () => {
<<<<<<< HEAD
=======
      // Width of one full set of cards
      // The row holds two identical sets.
>>>>>>> 00fef651b76862429170abebcc0a9309f8c3cb30
      const half = node.children.length / 2;

      const loop = node.children[half]
        ? node.children[half].offsetLeft -
          node.children[0].offsetLeft
        : 0;

      if (loop > 0) {
        if (paused) {
          pos = node.scrollLeft;
        } else {
          pos += speed;
        }

        if (pos >= loop) {
          pos -= loop;
        }

        if (!paused || node.scrollLeft >= loop) {
          node.scrollLeft = pos;
        }
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);

      node.removeEventListener('mouseenter', pause);
      node.removeEventListener('mouseleave', resume);
      node.removeEventListener('touchstart', pause);
<<<<<<< HEAD
=======
      node.removeEventListener('touchend', handleTouchEnd);
>>>>>>> 00fef651b76862429170abebcc0a9309f8c3cb30
      node.removeEventListener('focusin', pause);
      node.removeEventListener('focusout', resume);
    };
  }, [speed]);

  return ref;
}

/**
<<<<<<< HEAD
 * Typewriter effect for rotating words.
=======
 * Typewriter text effect.
>>>>>>> 00fef651b76862429170abebcc0a9309f8c3cb30
 */
export function useTypewriter(
  words,
  { type = 70, erase = 40, hold = 1600 } = {}
) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (!words || words.length === 0) {
      return;
    }

    if (
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
    ) {
      setText(words[0]);
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let erasing = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex];

      charIndex += erasing ? -1 : 1;

      setText(word.slice(0, charIndex));

      let delay = erasing ? erase : type;

      if (!erasing && charIndex === word.length) {
        erasing = true;
        delay = hold;
      } else if (erasing && charIndex === 0) {
        erasing = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 320;
      }

      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 600);

    return () => clearTimeout(timer);
  }, [words, type, erase, hold]);

  return text;
}