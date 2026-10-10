import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { RecruiterProvider, useRecruiterMode } from '../context/RecruiterContext';
import App from '../App';
import { HelmetProvider } from 'react-helmet-async';

function RecruiterToggleTester() {
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();
  return (
    <div>
      <span data-testid="mode-status">{isRecruiterMode ? 'RECRUITER_ON' : 'RECRUITER_OFF'}</span>
      <button onClick={toggleRecruiterMode}>Toggle Mode</button>
    </div>
  );
}

describe('Recruiter Mode Context & Toggle', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('toggles recruiter mode state and persists to localStorage', () => {
    render(
      <RecruiterProvider>
        <RecruiterToggleTester />
      </RecruiterProvider>
    );

    expect(screen.getByTestId('mode-status')).toHaveTextContent('RECRUITER_OFF');

    // Click toggle
    fireEvent.click(screen.getByRole('button', { name: /toggle mode/i }));

    expect(screen.getByTestId('mode-status')).toHaveTextContent('RECRUITER_ON');
    expect(localStorage.getItem('portfolio_recruiter_mode')).toBe('true');

    // Click toggle again
    fireEvent.click(screen.getByRole('button', { name: /toggle mode/i }));
    expect(screen.getByTestId('mode-status')).toHaveTextContent('RECRUITER_OFF');
    expect(localStorage.getItem('portfolio_recruiter_mode')).toBe('false');
  });

  it('renders recruiter view banner when recruiter mode is active in the App', () => {
    localStorage.setItem('portfolio_recruiter_mode', 'true');

    render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );

    // Recruiter banner is displayed
    expect(screen.getByText(/Recruiter View Active:/i)).toBeInTheDocument();
  });
});
