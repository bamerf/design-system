/*
 * Copyright (c) 2024 LeadChat. All rights reserved.
 */

import React from 'react';
import Radio from './Radio.jsx';

export default {
  title: 'Design System/Radio',
  component: Radio,
};

export const Default = {
  args: {
    label: 'Radio Option',
  },
};

export const Checked = {
  args: {
    label: 'Checked Radio',
    checked: true,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Radio',
    disabled: true,
  },
};

export const DisabledChecked = {
  args: {
    label: 'Disabled Checked Radio',
    checked: true,
    disabled: true,
  },
};
