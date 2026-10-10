import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Contact } from '../sections/Contact';

describe('Contact Section & Form Validation', () => {
  it('renders all required form controls and recruiter links', () => {
    render(<Contact />);

    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit message/i })).toBeInTheDocument();

    // Direct links
    expect(screen.getByRole('link', { name: /gokulra2006@gmail\.com/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument();
  });

  it('validates required fields before allowing submission', () => {
    render(<Contact />);

    const submitBtn = screen.getByRole('button', { name: /submit message/i });
    fireEvent.click(submitBtn);

    // Validation messages should appear
    expect(screen.getByText('Please provide your name.')).toBeInTheDocument();
    expect(screen.getByText('Please provide an email address.')).toBeInTheDocument();
    expect(screen.getByText('Please include a message.')).toBeInTheDocument();
  });

  it('validates email format and message length', () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/your email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitBtn = screen.getByRole('button', { name: /submit message/i });

    // Fill invalid email and too short message
    fireEvent.change(nameInput, { target: { value: 'Alex Recruiter' } });
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });
    fireEvent.change(messageInput, { target: { value: 'short' } });
    fireEvent.click(submitBtn);

    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
    expect(screen.getByText('Message must be at least 10 characters.')).toBeInTheDocument();
  });
});
