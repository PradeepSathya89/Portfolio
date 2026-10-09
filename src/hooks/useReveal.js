import { useEffect, useRef, useState } from 'react';

/**
 * Adds a `revealed` flag once the element scrolls into view.
 * Fires once, then stops observing — no work on every scroll frame.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, revealed];
}

/** Tracks which section is currently on screen, for nav highlighting. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join(',');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: '-80px 0px -40% 0px' }
    );

    key.split(',').forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [key]);

  return active;
}

/**
 * Slowly auto-scrolls a horizontal row of cards, looping endlessly.
 * Pointing at a card does NOT stop it. Clicking a card stops the row and
 * keeps that card "selected"; clicking it again (or anywhere outside) resumes.
 * It also yields to a finger on touch screens and to keyboard focus.
 */
export function useAutoScroll({ speed = 0.4 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let held = false;      // stopped by a click on a card
    let touching = false;  // a finger is on the row
    let kbd = false;       // keyboard focus is inside the row
    let selected = null;
    let touchTimer;
    let raf;
    let pos = node.scrollLeft;
    let last = pos;

    const release = () => {
      held = false;
      if (selected) selected.classList.remove('is-selected');
      selected = null;
    };

    const onClick = (e) => {
      if (e.target.closest('a, button')) return; // links and buttons keep working
      let card = e.target;
      while (card && card.parentElement !== node) card = card.parentElement;
      if (!card) return;
      if (held && selected === card) { release(); return; } // click again = resume
      release();
      held = true;
      selected = card;
      card.classList.add('is-selected');
    };
    const onOutside = (e) => { if (held && !node.contains(e.target)) release(); };
    const onTouchStart = () => { touching = true; clearTimeout(touchTimer); };
    const onTouchEnd = () => { touchTimer = setTimeout(() => { touching = false; }, 1200); };
    const onFocusIn = (e) => { if (e.target.matches(':focus-visible')) kbd = true; };
    const onFocusOut = () => { kbd = false; };

    node.addEventListener('click', onClick);
    document.addEventListener('click', onOutside);
    node.addEventListener('touchstart', onTouchStart, { passive: true });
    node.addEventListener('touchend', onTouchEnd, { passive: true });
    node.addEventListener('focusin', onFocusIn);
    node.addEventListener('focusout', onFocusOut);

    const step = () => {
      // Width of one full set of cards (the row holds two identical sets)
      const half = node.children.length / 2;
      const loop = node.children[half]
        ? node.children[half].offsetLeft - node.children[0].offsetLeft
        : 0;
      if (loop > 0) {
        const running = !held && !touching && !kbd;
        // If the person scrolled by hand, continue from where they are
        if (!running || Math.abs(node.scrollLeft - last) > 1.5) pos = node.scrollLeft;
        if (node.scrollLeft > loop + 1) { node.scrollLeft -= loop; pos = node.scrollLeft; }
        if (running) {
          pos += speed; // keep a decimal position: browsers round scrollLeft to whole pixels
          if (pos >= loop) pos -= loop; // jump back invisibly -> endless rotation
          node.scrollLeft = pos;
        }
        last = node.scrollLeft;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(touchTimer);
      node.removeEventListener('click', onClick);
      document.removeEventListener('click', onOutside);
      node.removeEventListener('touchstart', onTouchStart);
      node.removeEventListener('touchend', onTouchEnd);
      node.removeEventListener('focusin', onFocusIn);
      node.removeEventListener('focusout', onFocusOut);
    };
  }, [speed]);

  return ref;
}
export function useTypewriter(words, { type = 70, erase = 40, hold = 1600 } = {}) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
  }, []);

  return text;
}
