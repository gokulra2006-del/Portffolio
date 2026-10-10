import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Projects } from '../sections/Projects';

describe('Selected Projects Section', () => {
  it('displays the top three featured engineering projects with valid GitHub links', () => {
    render(<Projects />);

    // Top 3 Projects Must Exist
    expect(screen.getByRole('heading', { level: 3, name: 'AgriBank' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Dual-enjoy' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'AI Code Review Assistant' })).toBeInTheDocument();

    // Verify GitHub repository links
    const agriLink = screen.getByLabelText('View AgriBank on GitHub');
    expect(agriLink).toHaveAttribute('href', 'https://github.com/gokulra2006-del/agri-bank');

    const dualEnjoyLink = screen.getByLabelText('View Dual-enjoy on GitHub');
    expect(dualEnjoyLink).toHaveAttribute('href', 'https://github.com/gokulra2006-del/Dual-enjoy');

    const codeReviewLink = screen.getByLabelText('View AI Code Review Assistant on GitHub');
    expect(codeReviewLink).toHaveAttribute('href', 'https://github.com/gokulra2006-del/codereview-ai');
  });

  it('opens and closes the engineering case study modal', () => {
    render(<Projects />);

    const caseStudyButtons = screen.getAllByRole('button', { name: /read full case study/i });
    expect(caseStudyButtons.length).toBeGreaterThanOrEqual(1);

    // Open first modal (AgriBank)
    fireEvent.click(caseStudyButtons[0]);

    // Modal dialog is opened
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/05\. Architecture/i)).toBeInTheDocument();
    expect(screen.getByText(/06\. Key Technical Decisions/i)).toBeInTheDocument();

    // Close button works
    const closeBtn = screen.getByRole('button', { name: /close case study/i });
    fireEvent.click(closeBtn);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('filters projects by domain pills', () => {
    render(<Projects />);

    // Click 'Systems' filter
    const systemsBtn = screen.getByRole('button', { name: 'Systems' });
    fireEvent.click(systemsBtn);

    // Dual-enjoy should still be visible
    expect(screen.getByRole('heading', { level: 3, name: 'Dual-enjoy' })).toBeInTheDocument();

    // Click 'AI/ML' filter
    const aiBtn = screen.getByRole('button', { name: 'AI/ML' });
    fireEvent.click(aiBtn);

    // AI Code Review Assistant should be visible
    expect(screen.getByRole('heading', { level: 3, name: 'AI Code Review Assistant' })).toBeInTheDocument();
  });
});
