/*
 * Copyright (c) 2024 LeadChat. All rights reserved.
 */

import React from 'react';
import Select from './Select.jsx';

export default {
  title: 'Design System/Select',
  component: Select,
};

export const Default = {
  args: {
    placeholder: 'Select an option',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};

export const WithLabel = {
  args: {
    label: 'Select Label',
    placeholder: 'Choose an option',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
    ],
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Select',
    placeholder: 'Cannot select',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ],
    disabled: true,
  },
};
