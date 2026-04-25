export const zoneDefinitions = {
  cuff: { x: 20, y: 15, width: 28, height: 18, cell: 8 },
  leg: { x: 20, y: 33, width: 28, height: 28, cell: 8 },
  heel: { x: 40, y: 61, width: 16, height: 14, cell: 8 },
  foot: { x: 56, y: 61, width: 34, height: 14, cell: 8 },
  toe: { x: 90, y: 61, width: 12, height: 14, cell: 8 },
};

export function getZonePixelBounds(zoneKey) {
  const zone = zoneDefinitions[zoneKey];
  return {
    x: zone.x,
    y: zone.y,
    width: zone.width,
    height: zone.height,
    cell: zone.cell,
  };
}
