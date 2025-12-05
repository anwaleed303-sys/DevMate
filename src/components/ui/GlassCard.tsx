"use client";

import { useEffect, useState } from "react";

interface AITypingEffectProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

const AITypingEffect = ({
  text,
  speed = 30,
  onComplete,
}: AITypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && <span className="typing-cursor">|</span>}
    </span>
  );
};

export default AITypingEffect;
