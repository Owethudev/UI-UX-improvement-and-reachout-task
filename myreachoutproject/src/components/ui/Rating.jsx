function Rating({ value = 5 }) {
  return <div>★ {value.toFixed(1)}</div>
}

export default Rating
