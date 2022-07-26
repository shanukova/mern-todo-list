import Item from './Item';

const Items = ({ items, removeItem, markItem }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
            <Item
              item={item}
              markItem={markItem}
              removeItem={removeItem}
            />
        </li>
      ))}
    </ul>
  )
}

export default Items
