import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const TAP_TARGET = 14;
const TAP_WINDOW_MS = 2500;

const Selfie = ({ className = "" }) => {
  const router = useRouter();
  const tapCountRef = useRef(0);
  const resetTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleTap = () => {
    tapCountRef.current += 1;

    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }

    // Keep taps in a short window so accidental clicks don't trigger it.
    resetTimerRef.current = setTimeout(() => {
      tapCountRef.current = 0;
    }, TAP_WINDOW_MS);

    if (tapCountRef.current >= TAP_TARGET) {
      tapCountRef.current = 0;
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
      router.push("/admin-mode");
    }
  };

  return (
    <div className={className}>
      <div className="place-items-center hidden md:inline-block lg:inline-block bg-clip-content">
        <img
          className="w-96 top-0 left-0 fill-[var(--color-gold)] cursor-pointer"
          src="/static/selfie_blob.png"
          alt="selfie"
          onClick={handleTap}
        />
      </div>
    </div>
  );
};

export default Selfie;
