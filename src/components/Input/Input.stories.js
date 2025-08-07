/*
 * Copyright (c) 2024 LeadChat. All rights reserved.
 */

import React from 'react';
import Input from './Input.jsx';

export default {
  title: 'Design System/Input',
  component: Input,
};

export const Default = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel = {
  args: {
    label: 'Input Label',
    placeholder: 'Enter text...',
  },
};

export const WithValue = {
  args: {
    label: 'Input with Value',
    value: 'Hello World',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Input',
    value: 'Cannot edit',
    disabled: true,
  },
};

export const Error = {
  args: {
    label: 'Error Input',
    value: 'Invalid input',
    error: 'This field is required',
  },
};
