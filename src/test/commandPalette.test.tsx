import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { CommandPalette } from '../components/CommandPalette';
import { ThemeProvider } from '../context/ThemeContext';
import { RecruiterProvider } from '../context/RecruiterContext';

describe('Command Palette Component', () => {
  it('opens upon pressing Ctrl+K or Cmd+K and displays quick actions', () => {
    render(
      <ThemeProvider>
        <RecruiterProvider>
          <BrowserRouter>
            <CommandPalette />
          </BrowserRouter>
        </RecruiterProvider>
      </ThemeProvider>
    );

    // Initially closed
    expect(screen.queryByPlaceholderText(/type a command or search/i)).not.toBeInTheDocument();

    // Trigger Ctrl+K
    fireEvent.keyDown(document, { key: 'k', ctrlKey: true });

    // Input appears
    const input = screen.getByPlaceholderText(/type a command or search/i);
    expect(input).toBeInTheDocument();

    // Quick Actions are visible
    expect(screen.getByText(/Switch to Recruiter View/i)).toBeInTheDocument();
    expect(screen.getByText(/Copy Email Address/i)).toBeInTheDocument();
    expect(screen.getByText(/View Print-Friendly Resume Page/i)).toBeInTheDocument();
  });
});
