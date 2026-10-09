import './Section.css';

/**
 * Decorative floating icons (cut from the hero artwork) shown on the right
 * of the gap between two sections. `w` is the width in px on desktop.
 */
// `top` = desktop position, `topM` = phone position (defaults to `top`).
// Positions using calc(100% + ...) sit lower, beside the heading of the next section.
const sets = {
  home: [
    { src: '/icons/react.png',  w: 170, right: '7%',   top: 'calc(100% - 10px)', topM: '0%',  dur: 6.4, delay: 0,    r: 4 },
    { src: '/icons/sphere.png', w: 46,  right: '27%',  top: '34%',                              dur: 5.2, delay: -1.4, r: 0 },
    { src: '/icons/gem.png',    w: 58,  right: '1.5%', top: 'calc(100% + 40px)', topM: '72%', dur: 5.8, delay: -2.6, r: -8 },
  ],
  about: [
    { src: '/icons/code.png',    w: 112, right: '9%',  top: 'calc(100% + 8px)',  topM: '30%', dur: 5.6, delay: 0,    r: -7 },
    { src: '/icons/gem.png',     w: 62,  right: '24%', top: '64%',                              dur: 6.2, delay: -1.8, r: 8 },
    { src: '/icons/sphere2.png', w: 46,  right: '2%',  top: 'calc(100% + 52px)', topM: '60%', dur: 5,   delay: -3,   r: 0 },
  ],
  skills: [
    { src: '/icons/laptop.png',  w: 230, right: '14%', top: 'calc(100% + 24px)', topM: '20%', dur: 6.6, delay: 0,    r: -3 },
    { src: '/icons/jspanel.png', w: 92,  right: '3%',  top: '24%',                              dur: 5.8, delay: -2.2, r: 5 },
    { src: '/icons/sphere.png',  w: 40,  right: '41%', top: '66%',                              dur: 5.2, delay: -1,   r: 0 },
  ],
};

export default function SectionIcons({ variant = 'home' }) {
  return (
    <div className={`section-icons section-icons--${variant}`} aria-hidden="true">
      {sets[variant].map((it, i) => (
        <img
          key={i}
          className="section-icons__item"
          src={it.src}
          alt=""
          loading="lazy"
          style={{ '--w': it.w, '--dur': `${it.dur}s`, '--delay': `${it.delay}s`, '--r': `${it.r}deg`, '--top-d': it.top, '--top-m': it.topM ?? it.top, ...(it.left ? { left: it.left } : { right: it.right }) }}
        />
      ))}
    </div>
  );
}
