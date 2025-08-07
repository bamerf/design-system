/*
 * Copyright (c) 2024 LeadChat. All rights reserved.
 */

import React from 'react';
import Slider from './Slider.jsx';

export default {
  title: 'Design System/Slider',
  component: Slider,
};

export const Default = {
  args: {
    min: 0,
    max: 100,
    value: 50,
  },
};

export const WithLabel = {
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    value: 75,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Slider',
    min: 0,
    max: 100,
    value: 25,
    disabled: true,
  },
};
