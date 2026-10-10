import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App';

describe('Homepage Rendering & Structure', () => {
  it('renders primary hero content and value proposition', () => {
    render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );

    // Hero Name & Title
    expect(screen.getByRole('heading', { level: 1, name: /Gokul Ramachandran/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Junior Full-Stack Engineer/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/building reliable web products and practical AI systems/i)).toBeInTheDocument();

    // Availability Badge
    expect(screen.getByText(/Open to junior software engineering opportunities/i)).toBeInTheDocument();

    // Resume CTAs
    const resumeLinks = screen.getAllByRole('link', { name: /resume/i });
    expect(resumeLinks.length).toBeGreaterThanOrEqual(1);
  }, 15000);

  it('renders the proof strip with verified engineering credentials', () => {
    render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );

    // Proof strip items exist on page
    expect(screen.getAllByText('VIT Chennai').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Incrix Techlutions').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('2nd Place Finalist')).toBeInTheDocument();
  }, 15000);
});
