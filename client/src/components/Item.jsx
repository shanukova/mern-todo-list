const Item = ({ item, removeItem, markItem }) => {
  return (
    <div>
      <span
        style={{ textDecoration: item.status ? 'line-through' : 'none' }}
      >
        {item.name}
      </span>
      <div>
        <button variant="outline-danger" onClick={() => removeItem(item.id)}>Delete</button>
        <button variant="outline-primary" onClick={() => markItem(item.id)}>Done</button>
      </div>
    </div>
  )
}

export default Item
