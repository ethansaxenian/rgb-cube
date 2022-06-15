import Plot from 'react-plotly.js';

export default function App() {
  const data = [...Array(256).keys()].filter((x) => x % 10 == 0)

  const product = (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));

  const points = product(data, data, data);

  const x = []
  const y = []
  const z = []

  points.forEach(([x1, y1, z1]) => {
    x.push(x1)
    y.push(y1)
    z.push(z1)
  })

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Plot
        style={{border: '1px solid black'}}
        data={[
          {
            x,
            y,
            z,
            type: 'scatter3d',
            mode: 'markers',
            marker: {
              color: points.map(([r, g, b]) => `rgb(${r}, ${g}, ${b})`),
            }
          }
        ]}
        layout={{
          width: 800,
          height: 800,
          margin: {
            l: 0,
            r: 0,
            t: 0,
            b: 0
          },
          scene: {
            xaxis: {
              title: 'Red'
            },
            yaxis: {
              title: 'Green'
            },
            zaxis: {
              title: 'Blue'
            },
            camera: {
              eye: {
                x: 1.6,
                y: 1.6,
                z: 1.6
              }
            }
          }
        }}
      />
    </div>
  );
}
