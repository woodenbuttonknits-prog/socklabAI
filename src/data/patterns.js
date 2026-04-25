export const patterns = [
  {
    name: 'plain',
    label: 'Plain',
    grid: [[0]],
    colors: { 0: 'background' },
  },
  {
    name: 'bee_motif',
    label: 'Bee Motif',
    grid: [
      [0, 1, 0, 1],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
    ],
    colors: { 0: 'background', 1: 'contrast1' },
  },
  {
    name: 'diamonds',
    label: 'Diamonds',
    grid: [
      [0, 0, 1, 0, 0],
      [0, 1, 2, 1, 0],
      [1, 2, 0, 2, 1],
      [0, 1, 2, 1, 0],
      [0, 0, 1, 0, 0],
    ],
    colors: { 0: 'background', 1: 'contrast1', 2: 'contrast2' },
  },
  {
    name: 'stripes',
    label: 'Stripes',
    grid: [[0], [1], [2], [1]],
    colors: { 0: 'background', 1: 'contrast1', 2: 'contrast2' },
  },
];

export const zones = ['cuff', 'leg', 'heel', 'foot', 'toe'];
