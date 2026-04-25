export function createRepeatedGrid(pattern, width, height) {
  const source = pattern.grid;
  const sourceH = source.length;
  const sourceW = source[0].length;

  return Array.from({ length: height }, (_, y) => {
    return Array.from({ length: width }, (_, x) => {
      return source[y % sourceH][x % sourceW];
    });
  });
}

export function mapIndexToColor(index, palette, debug, zoneKey) {
  if (debug) {
    return debugColorFor(zoneKey, index);
  }

  if (index === 0) return palette[0];
  if (index === 1) return palette[1];
  if (index === 2) return palette[2];

  return '#111111';
}

function debugColorFor(zoneKey, index) {
  const zoneBaseColors = {
    cuff: [210, 60, 55],
    leg: [40, 60, 55],
    heel: [280, 60, 55],
    foot: [20, 70, 55],
    toe: [330, 70, 55],
  };

  const [hue, sat, light] = zoneBaseColors[zoneKey] || [200, 50, 50];
  const hueShift = (index * 26) % 60;
  return `hsl(${hue + hueShift} ${sat}% ${Math.max(35, light - index * 4)}%)`;
}
