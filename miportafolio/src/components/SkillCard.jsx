export default function SkillCard({ nombre, nivel }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '6px' }}>
      <h4>{nombre}</h4>
      <p style={{ margin: 0, color: '#666' }}>Nivel: {nivel}</p>
    </div>
  );
}