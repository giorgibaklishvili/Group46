const s = { background: 'white' };

export default function App() {
  return (
    <div style={{ background: 'gray' }}>
      <p style={s}>Internal</p>
      <button style={{ color: 'red' }}>Inline</button>
    </div>
  );
}