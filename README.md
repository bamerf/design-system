# LeadChat Design System

A modern design system built with Next.js and Storybook, featuring reusable React components with styled-components.

## Features

- **Next.js 14**: Modern React framework with server-side rendering
- **Storybook**: Interactive component documentation and testing
- **Styled Components**: CSS-in-JS styling with theme support
- **Accessibility**: Built with accessibility best practices
- **TypeScript Ready**: Components are ready for TypeScript migration

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

#### Run the Next.js App

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

#### Run Storybook

```bash
npm run storybook
```

Storybook will be available at `http://localhost:9009`

### Building for Production

#### Build the Next.js App

```bash
npm run build
npm start
```

#### Build Storybook

```bash
npm run build-storybook
```

## Project Structure

```
design-system/
├── pages/                 # Next.js pages
│   ├── _app.js           # App wrapper
│   ├── _document.js      # Document wrapper
│   └── index.js          # Home page
├── src/
│   ├── components/       # React components
│   │   ├── Buttons/
│   │   ├── Checkbox/
│   │   ├── Input/
│   │   ├── Radio/
│   │   ├── Select/
│   │   ├── Slider/
│   │   └── Switch/
│   ├── assets/           # Images and SVG icons
│   └── utils/            # Utilities and themes
├── .storybook/           # Storybook configuration
├── public/               # Static assets
└── next.config.js        # Next.js configuration
```

## Components

The design system includes the following components:

- **Buttons**: Various button styles and states
- **Checkbox**: Custom checkbox component
- **Input**: Text input fields
- **Radio**: Radio button groups
- **Select**: Dropdown select component
- **Slider**: Range slider component
- **Switch**: Toggle switch component

Each component includes:

- Interactive Storybook stories
- Accessibility features
- Multiple variants and states
- Responsive design
- Theme support

## Theming

The design system uses styled-components with a comprehensive theme system. Themes include:

- Color palettes
- Typography scales
- Spacing systems
- Component-specific tokens

## Contributing

1. Create a feature branch
2. Make your changes
3. Add or update Storybook stories
4. Test accessibility
5. Submit a pull request

## License

Copyright (c) 2024 LeadChat. All rights reserved.
