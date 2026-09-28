import { useEffect, useRef, useState } from 'react';

/**
 * Adds a `revealed` flag once the element scrolls into view.
 * Fires once, then stops observing.
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
  }, []);

  return [ref, revealed];
}

/**
 * Tracks which section is currently on screen for nav highlighting.
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
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
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
 * Slowly auto-scrolls a horizontal container.
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

    const handleTouchEnd = () => {
      setTimeout(resume, 2500);
    };

    node.addEventListener('mouseenter', pause);
    node.addEventListener('mouseleave', resume);
    node.addEventListener('touchstart', pause, {
      passive: true,
    });
    node.addEventListener('touchend', handleTouchEnd, {
      passive: true,
    });
    node.addEventListener('focusin', pause);
    node.addEventListener('focusout', resume);

    let pos = node.scrollLeft;

    const step = () => {
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
      node.removeEventListener('touchend', handleTouchEnd);
      node.removeEventListener('focusin', pause);
      node.removeEventListener('focusout', resume);
    };
  }, [speed]);

  return ref;
}

/**
 * Typewriter effect for rotating words.
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