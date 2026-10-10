import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App';

describe('App Smoke Test', () => {
  it('mounts the application tree without crashing', () => {
    const { container } = render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );

    expect(container.querySelector('#main-content')).toBeInTheDocument();
  });
});
