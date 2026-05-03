const LogoIcon = ({ size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <filter id="lglow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <linearGradient id="lpopcorn" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
      <linearGradient id="lred" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E50914" />
        <stop offset="100%" stopColor="#831010" />
      </linearGradient>
    </defs>
    <g filter="url(#lglow)">
      <circle cx="40" cy="35" r="18" fill="#333" stroke="#555" strokeWidth="2" />
      <circle cx="75" cy="35" r="18" fill="#333" stroke="#555" strokeWidth="2" />
      <rect x="35" y="45" width="45" height="35" rx="4" fill="#222" />
      <rect x="80" y="52" width="12" height="20" rx="2" fill="#444" />
      <path d="M45 70 L75 70 L80 105 L40 105 Z" fill="url(#lred)" />
      <rect x="52" y="70" width="4" height="35" fill="white" fillOpacity="0.3" />
      <rect x="64" y="70" width="4" height="35" fill="white" fillOpacity="0.3" />
      <circle cx="50" cy="68" r="6" fill="url(#lpopcorn)" />
      <circle cx="60" cy="65" r="7" fill="url(#lpopcorn)" />
      <circle cx="70" cy="68" r="6" fill="url(#lpopcorn)" />
      <circle cx="55" cy="62" r="5" fill="#FFFACD" />
      <circle cx="65" cy="62" r="5" fill="#FFFACD" />
      <rect x="20" y="85" width="30" height="18" rx="2" fill="#FFD700" transform="rotate(-15 20 85)" />
      <circle cx="21" cy="94" r="3" fill="#0f172a" transform="rotate(-15 20 85)" />
    </g>
  </svg>
);

export default LogoIcon;
