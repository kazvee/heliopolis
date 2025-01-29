import { passiveSupport } from 'passive-events-support/src/utils';

passiveSupport({
  events: ['touchstart', 'touchmove', 'wheel'],
});

import kaplay from 'kaplay';

export const k = kaplay({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById('game'),
});
