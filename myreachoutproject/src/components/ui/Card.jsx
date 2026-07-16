function Card({ children, style }) {
  return <section style={{ background: '#fff', borderRadius: '1rem', padding: '1rem', boxShadow: '0 6px 20px rgba(0,0,0,0.06)', ...style }}>{children}</section>
}

export default Card
