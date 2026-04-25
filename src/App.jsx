import { useMemo, useState } from 'react';
import SockPreview from './components/SockPreview';
import { patterns, zones } from './data/patterns';

const initialConfig = {
  colors: ['#A3B18A', '#588157', '#3A5A40'],
  zones: {
    cuff: 'stripes',
    leg: 'bee_motif',
    heel: 'plain',
    foot: 'diamonds',
    toe: 'stripes',
  },
};

export default function App() {
  const [colors, setColors] = useState(initialConfig.colors);
  const [zonePattern, setZonePattern] = useState(initialConfig.zones);
  const [debug, setDebug] = useState(false);

  const patternsByName = useMemo(() => {
    return Object.fromEntries(patterns.map((p) => [p.name, p]));
  }, []);

  const updateColor = (index, value) => {
    setColors((previous) => {
      const next = [...previous];
      next[index] = value;
      return next;
    });
  };

  return (
    <main className="app-shell">
      <aside className="controls">
        <h1>Sock Design App</h1>
        <p className="subtitle">Ontwerp colorwork sokken met live preview per zone.</p>

        <section>
          <h2>Kleuren</h2>
          <div className="color-list">
            {['Background', 'Contrast 1', 'Contrast 2'].map((label, index) => (
              <label key={label}>
                <span>{label}</span>
                <input
                  type="color"
                  value={colors[index]}
                  onChange={(event) => updateColor(index, event.target.value)}
                />
              </label>
            ))}
          </div>
        </section>

        <section>
          <h2>Zones</h2>
          <div className="zone-list">
            {zones.map((zone) => (
              <label key={zone}>
                <span>{zone}</span>
                <select
                  value={zonePattern[zone]}
                  onChange={(event) =>
                    setZonePattern((previous) => ({
                      ...previous,
                      [zone]: event.target.value,
                    }))
                  }
                >
                  {patterns.map((pattern) => (
                    <option key={pattern.name} value={pattern.name}>
                      {pattern.label}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        </section>

        <label className="debug-toggle">
          <input type="checkbox" checked={debug} onChange={(event) => setDebug(event.target.checked)} />
          Debug mode (zone/patroon kleur-layers)
        </label>
      </aside>

      <section className="preview">
        <SockPreview
          patternsByName={patternsByName}
          zonePattern={zonePattern}
          colors={colors}
          debug={debug}
        />
      </section>
    </main>
  );
}
