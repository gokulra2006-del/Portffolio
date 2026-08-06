import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export function useKonamiCode() {
  useEffect(() => {
    let inputSequence: string[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      inputSequence.push(key);

      // Keep sequence length matching Konami code length
      if (inputSequence.length > KONAMI_CODE.length) {
        inputSequence.shift();
      }

      // Check if sequence matches
      const isMatch = KONAMI_CODE.every(
        (targetKey, index) => targetKey.toLowerCase() === inputSequence[index]?.toLowerCase()
      );

      if (isMatch) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#58a6ff', '#bc8cff', '#3fb950', '#d29922', '#f85149'],
        });
        inputSequence = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}
