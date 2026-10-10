import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from '../context/ThemeContext';
import { RecruiterProvider } from '../context/RecruiterContext';
import { Navbar } from '../components/Navbar';

describe('Navbar Component', () => {
  it('renders all core navigation links', () => {
    render(
      <ThemeProvider>
        <RecruiterProvider>
          <Navbar />
        </RecruiterProvider>
      </ThemeProvider>
    );

    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Experience' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('toggles mobile menu and sets accessible aria attributes', () => {
    render(
      <ThemeProvider>
        <RecruiterProvider>
          <Navbar />
        </RecruiterProvider>
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole('button', { name: /open navigation menu/i });
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    expect(toggleButton).toHaveAttribute('aria-controls', 'mobile-navigation');

    // Click to open
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('menu', { name: /mobile navigation/i })).toBeInTheDocument();

    // Click to close
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });
});
