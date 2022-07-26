const Item = ({ item, removeItem, markItem }) => {
  return (
    <div className='item'>
      <span
        style={{ textDecoration: item.status ? 'line-through' : 'none' }}
      >
        {item.name}
      </span>
      <div>
        <button
          className='buttons delete'
          onClick={() => removeItem(item.id)}
        >
          Delete
        </button>
        <button
          className='buttons done'
          onClick={() => markItem(item.id)}
        >
          {item.status ? 'Undone' : 'Done'}
        </button>
      </div>
    </div>
  )
}

export default Item
