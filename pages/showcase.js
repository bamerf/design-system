/*
 * Copyright (c) 2024 LeadChat. All rights reserved.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme, darkTheme } from '../src/utils';
import Select from '../src/components/Select/Select.jsx';
import Button from '../src/components/Buttons/Buttons.jsx';
import Checkbox from '../src/components/Checkbox/Checkbox.jsx';
import Input from '../src/components/Input/Input.jsx';
import Radio from '../src/components/Radio/Radio.jsx';
import Slider from '../src/components/Slider/Slider.jsx';
import Switch from '../src/components/Switch/Switch.jsx';

export default function Showcase() {
  const useDarkTheme = false;

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>LeadChat Design System - Component Showcase</h1>

        <section style={{ marginBottom: '40px' }}>
          <h2>Buttons</h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Button modifiers={['primary']}>Primary Button</Button>
            <Button modifiers={['secondary']}>Secondary Button</Button>
            <Button modifiers={['small']}>Small Button</Button>
            <Button modifiers={['large']}>Large Button</Button>
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2>Select Component</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Select
              label="Default Select"
              items={['Option 1', 'Option 2', 'Option 3']}
            />
            <Select
              label="Disabled Select"
              status="disabled"
              items={['Option 1', 'Option 2', 'Option 3']}
            />
            <Select
              label="Large Select"
              size="large"
              items={['Option 1', 'Option 2', 'Option 3']}
            />
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2>Input Fields</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Input label="Default Input" placeholder="Enter text..." />
            <Input
              label="Error Input"
              status="error"
              placeholder="Error state"
            />
            <Input
              label="Disabled Input"
              status="disabled"
              placeholder="Disabled"
            />
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2>Checkboxes</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Checkbox label="Default Checkbox" />
            <Checkbox label="Checked Checkbox" checked />
            <Checkbox label="Disabled Checkbox" disabled />
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2>Radio Buttons</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Radio label="Option 1" name="radio-group" />
            <Radio label="Option 2" name="radio-group" />
            <Radio label="Option 3" name="radio-group" />
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2>Slider</h2>
          <div style={{ width: '300px' }}>
            <Slider min={0} max={100} defaultValue={50} />
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2>Switch</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Switch label="Default Switch" />
            <Switch label="Checked Switch" checked />
            <Switch label="Disabled Switch" disabled />
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}
