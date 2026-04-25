import { zoneDefinitions, getZonePixelBounds } from '../engine/mapToSockShape';
import { createRepeatedGrid, mapIndexToColor } from '../engine/renderPattern';

const svgWidth = 860;
const svgHeight = 640;

function zoneLabel(zone) {
  return zone.charAt(0).toUpperCase() + zone.slice(1);
}

export default function SockPreview({ patternsByName, zonePattern, colors, debug }) {
  const entries = Object.entries(zoneDefinitions);

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      width="100%"
      role="img"
      aria-label="Sock design preview"
      className="sock-svg"
    >
      <rect x="0" y="0" width={svgWidth} height={svgHeight} fill="#f8f9fa" rx="20" />
      <path
        d="M 160 80 L 160 480 C 160 510 180 530 210 530 L 680 530 C 740 530 790 485 790 430 C 790 375 740 330 680 330 L 450 330 L 450 80 Z"
        fill="#dfe6ee"
        stroke="#8ea0b3"
        strokeWidth="10"
      />

      {entries.map(([zoneKey]) => {
        const zone = getZonePixelBounds(zoneKey);
        const patternName = zonePattern[zoneKey];
        const pattern = patternsByName[patternName];
        const repeated = createRepeatedGrid(pattern, zone.width, zone.height);

        return (
          <g key={zoneKey} transform={`translate(${zone.x * zone.cell}, ${zone.y * zone.cell})`}>
            {repeated.map((row, y) =>
              row.map((value, x) => (
                <rect
                  key={`${zoneKey}-${x}-${y}`}
                  x={x * zone.cell}
                  y={y * zone.cell}
                  width={zone.cell}
                  height={zone.cell}
                  fill={mapIndexToColor(value, colors, debug, zoneKey)}
                />
              ))
            )}

            <rect
              x="0"
              y="0"
              width={zone.width * zone.cell}
              height={zone.height * zone.cell}
              fill="none"
              stroke={debug ? '#111' : 'rgba(0,0,0,0.25)'}
              strokeWidth="2"
            />

            <text
              x="8"
              y="22"
              fontSize="18"
              fontWeight="700"
              fill={debug ? '#111' : 'rgba(0,0,0,0.45)'}
            >
              {zoneLabel(zoneKey)}
            </text>
          </g>
        );
      })}

      <text x="28" y="608" fill="#1f2937" fontSize="20" fontWeight="700">
        Live preview · Sock Design App
      </text>
    </svg>
  );
}
