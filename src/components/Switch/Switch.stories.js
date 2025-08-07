/*
 * Copyright (c) 2024 LeadChat. All rights reserved.
 */

import React from 'react';
import Switch from './Switch.jsx';

export default {
  title: 'Design System/Switch',
  component: Switch,
};

export const Default = {
  args: {},
};

export const Checked = {
  args: {
    checked: true,
  },
};

export const WithLabel = {
  args: {
    label: 'Toggle Switch',
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked = {
  args: {
    checked: true,
    disabled: true,
  },
};
