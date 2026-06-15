// Custom Logo Icon Component for Arihant Builders & Construction
export function LogoIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Building structure - brown/orange color scheme */}
      <g>
        {/* Main building body */}
        <rect x="25" y="35" width="50" height="55" fill="#8B4513" />
        
        {/* Roof/top section */}
        <path d="M 50 10 L 20 35 L 80 35 Z" fill="#D2691E" />
        
        {/* Windows - 3 rows */}
        {/* Top row */}
        <rect x="32" y="42" width="10" height="10" fill="#FFF8DC" />
        <rect x="58" y="42" width="10" height="10" fill="#FFF8DC" />
        
        {/* Middle row */}
        <rect x="32" y="57" width="10" height="10" fill="#FFF8DC" />
        <rect x="45" y="57" width="10" height="10" fill="#FFF8DC" />
        <rect x="58" y="57" width="10" height="10" fill="#FFF8DC" />
        
        {/* Bottom row */}
        <rect x="32" y="72" width="10" height="10" fill="#FFF8DC" />
        <rect x="58" y="72" width="10" height="10" fill="#FFF8DC" />
        
        {/* Door */}
        <rect x="42" y="75" width="16" height="15" fill="#A0522D" />
        <circle cx="54" cy="82" r="1.5" fill="#FFD700" />
        
        {/* Base/foundation */}
        <rect x="20" y="88" width="60" height="4" fill="#654321" />
      </g>
    </svg>
  );
}

// Orange/Construction themed version
export function LogoIconOrange({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Building structure - orange color scheme matching website */}
      <g>
        {/* Main building body */}
        <rect x="25" y="35" width="50" height="55" fill="#EA580C" />
        
        {/* Roof/top section */}
        <path d="M 50 10 L 20 35 L 80 35 Z" fill="#F97316" />
        
        {/* Windows - 3 rows */}
        {/* Top row */}
        <rect x="32" y="42" width="10" height="10" fill="#FFF7ED" />
        <rect x="58" y="42" width="10" height="10" fill="#FFF7ED" />
        
        {/* Middle row */}
        <rect x="32" y="57" width="10" height="10" fill="#FFF7ED" />
        <rect x="45" y="57" width="10" height="10" fill="#FFF7ED" />
        <rect x="58" y="57" width="10" height="10" fill="#FFF7ED" />
        
        {/* Bottom row */}
        <rect x="32" y="72" width="10" height="10" fill="#FFF7ED" />
        <rect x="58" y="72" width="10" height="10" fill="#FFF7ED" />
        
        {/* Door */}
        <rect x="42" y="75" width="16" height="15" fill="#C2410C" />
        <circle cx="54" cy="82" r="1.5" fill="#FCD34D" />
        
        {/* Base/foundation */}
        <rect x="20" y="88" width="60" height="4" fill="#9A3412" />
      </g>
    </svg>
  );
}

// White version for dark backgrounds
export function LogoIconWhite({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Building structure - white/light color scheme for dark backgrounds */}
      <g>
        {/* Main building body */}
        <rect x="25" y="35" width="50" height="55" fill="#FFFFFF" opacity="0.9" />
        
        {/* Roof/top section */}
        <path d="M 50 10 L 20 35 L 80 35 Z" fill="#FFFFFF" />
        
        {/* Windows - 3 rows */}
        {/* Top row */}
        <rect x="32" y="42" width="10" height="10" fill="#1F2937" opacity="0.3" />
        <rect x="58" y="42" width="10" height="10" fill="#1F2937" opacity="0.3" />
        
        {/* Middle row */}
        <rect x="32" y="57" width="10" height="10" fill="#1F2937" opacity="0.3" />
        <rect x="45" y="57" width="10" height="10" fill="#1F2937" opacity="0.3" />
        <rect x="58" y="57" width="10" height="10" fill="#1F2937" opacity="0.3" />
        
        {/* Bottom row */}
        <rect x="32" y="72" width="10" height="10" fill="#1F2937" opacity="0.3" />
        <rect x="58" y="72" width="10" height="10" fill="#1F2937" opacity="0.3" />
        
        {/* Door */}
        <rect x="42" y="75" width="16" height="15" fill="#E5E7EB" />
        <circle cx="54" cy="82" r="1.5" fill="#FCD34D" />
        
        {/* Base/foundation */}
        <rect x="20" y="88" width="60" height="4" fill="#F3F4F6" />
      </g>
    </svg>
  );
}
