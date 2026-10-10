import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

function ThemeConsumer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle Mode</button>
    </div>
  );
}

describe('Theme Context', () => {
  it('toggles theme state between dark and light', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const themeDisplay = screen.getByTestId('current-theme');
    const toggleBtn = screen.getByRole('button', { name: /toggle mode/i });

    const initialTheme = themeDisplay.textContent;
    expect(initialTheme).toMatch(/dark|light/);

    fireEvent.click(toggleBtn);
    const newTheme = themeDisplay.textContent;
    expect(newTheme).not.toBe(initialTheme);

    fireEvent.click(toggleBtn);
    expect(themeDisplay.textContent).toBe(initialTheme);
  });
});
