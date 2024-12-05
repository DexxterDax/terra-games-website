export function Noise() {
  return (
    <>
      <svg className="fixed isolate opacity-40 h-[0px] w-[0px]">
        <filter id="noise">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.65"
          />
        </filter>
      </svg>
      <div className="fixed inset-0 opacity-[0.15] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            filter: 'url(#noise)',
            backdropFilter: 'contrast(190%) brightness(150%)',
          }}
        />
      </div>
    </>
  );
} 