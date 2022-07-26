import { useState } from 'react'

const AddItem = ({ addItem }) => {
  const [name, setName] = useState('')

  const handleClick = e => {
    e.preventDefault()
    if (!name) {
        alert('Cannot add empty item')
        return
    }
    addItem({ name, status: false })
    setName('')
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => { setName(e.target.value) } }
        placeholder="Add new item"
      />
      <button onClick={handleClick}>
        <span>Add</span>
      </button>
    </div>
  )
}

export default AddItem
