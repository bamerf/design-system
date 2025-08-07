/*
 * Copyright (c) 2024 LeadChat. All rights reserved.
 */

import React from 'react';
import Button from './Buttons.jsx';

export default {
  title: 'Design System/Buttons',
  component: Button,
};

export const Primary = {
  args: {
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    type: 'secondary',
    children: 'Secondary Button',
  },
};

export const Tertiary = {
  args: {
    type: 'tertiary',
    children: 'Tertiary Button',
  },
};

export const Success = {
  args: {
    status: 'success',
    children: 'Success Button',
  },
};

export const Warning = {
  args: {
    status: 'warning',
    children: 'Warning Button',
  },
};

export const Error = {
  args: {
    status: 'error',
    children: 'Error Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};
