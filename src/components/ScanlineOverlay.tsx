export const ScanlineOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.03]">
      <div 
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            hsl(130 100% 50% / 0.5) 2px,
            hsl(130 100% 50% / 0.5) 4px
          )`,
          animation: 'scan 8s linear infinite',
        }}
      />
    </div>
  );
};

export default ScanlineOverlay;
