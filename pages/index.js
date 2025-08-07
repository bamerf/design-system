/*
 * Copyright (c) 2024 LeadChat. All rights reserved.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme, darkTheme } from '../src/utils';
import Select from '../src/components/Select/Select.jsx';
import Link from 'next/link';

export default function Home() {
  const useDarkTheme = false;

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>LeadChat Design System</h1>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
          A modern design system built with Next.js and Storybook, featuring
          reusable React components.
        </p>

        <div style={{ marginBottom: '40px' }}>
          <h2>Quick Links</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link
              href="/showcase"
              style={{
                padding: '12px 24px',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                display: 'inline-block',
              }}
            >
              View Component Showcase
            </Link>
            <a
              href="http://localhost:9009"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px 24px',
                backgroundColor: '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                display: 'inline-block',
              }}
            >
              Open Storybook
            </a>
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <h2>Example Component</h2>
          <p>Here&apos;s an example of the Select component:</p>
          <Select
            label="Labelled"
            status="disabled"
            items={['option 1', 'option 2', 'option 3']}
          />
        </div>

        <div>
          <h2>Getting Started</h2>
          <p>To run the development server:</p>
          <pre
            style={{
              backgroundColor: '#f8f9fa',
              padding: '15px',
              borderRadius: '4px',
              overflow: 'auto',
            }}
          >
            {`npm run dev`}
          </pre>
          <p>To run Storybook:</p>
          <pre
            style={{
              backgroundColor: '#f8f9fa',
              padding: '15px',
              borderRadius: '4px',
              overflow: 'auto',
            }}
          >
            {`npm run storybook`}
          </pre>
        </div>
      </div>
    </ThemeProvider>
  );
}
