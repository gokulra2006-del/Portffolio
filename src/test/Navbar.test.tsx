import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from '../components/Navbar';

describe('Navbar Component', () => {
  it('renders the navigation links', () => {
    render(<Navbar />);
    
    // Check if navigation elements are present
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
