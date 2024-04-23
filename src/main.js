import { scaleFactor } from './constants';
import { k } from './kaboomContext';

k.loadSprite('spritesheet', './spritesheet.png', {
  sliceX: 39,
  sliceY: 31,
  anims: {
    'idle-down': 956,
    'walk-down': { from: 956, to: 959, loop: true, speed: 8 },
    'idle-side': 995,
    'walk-side': { from: 995, to: 998, loop: true, speed: 8 },
    'idle-up': 1034,
    'walk-up': { from: 1034, to: 1037, loop: true, speed: 8 },
  },
});

k.loadSprite('map', './map.png');

k.setBackground(k.Color.fromHex('#222222'));

k.scene('main', async () => {
  const mapData = await (await fetch('./map.json')).json();
  const layers = mapData.layers;

  const map = k.add([k.sprite('map'), k.pos(0), k.scale(scaleFactor)]);
});

k.go('main');
