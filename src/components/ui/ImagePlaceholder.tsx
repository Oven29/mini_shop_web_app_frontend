export default function ImagePlaceholder() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 200"
      preserveAspectRatio="none"
    >
      <rect width="400" height="200" fill="#D1D5DB" />
      <rect x="0" y="0" width="400" height="200" fill="url(#shimmer)" />
      <defs>
        <linearGradient id="shimmer" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="var(--tg-theme-bg-color)" />
          <stop offset="50%" stopColor="var(--tg-theme-hint-color)" />
          <stop offset="100%" stopColor="var(--tg-theme-bg-color)" />
        </linearGradient>
      </defs>
      <animateTransform
        attributeName="gradientTransform"
        type="translate"
        from="0 -200"
        to="0 200"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </svg>
  )
}