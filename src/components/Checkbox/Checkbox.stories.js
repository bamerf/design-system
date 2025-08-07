/*
 * Copyright (c) 2024 LeadChat. All rights reserved.
 */

import React from 'react';
import Checkbox from './Checkbox.jsx';

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
};

export const Default = {
  args: {
    label: 'Checkbox Label',
  },
};

export const Checked = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
  },
};

export const DisabledChecked = {
  args: {
    label: 'Disabled Checked Checkbox',
    checked: true,
    disabled: true,
  },
};
