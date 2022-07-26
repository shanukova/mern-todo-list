import React, { useState, useEffect } from 'react'
import AddItem from './components/AddItem'
import Items from './components/Items'

const App = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems()
      setItems(itemsFromServer)
    }
    getItems()
  }, [])

  const fetchItems = async () => {
    const res = await fetch('http://localhost:8080/get')
    const data = await res.json()
    return data.todos
  }

  const fetchItem = async (id) => {
    const res = await fetch(`http://localhost:8080/get/${id}`)
    const data = await res.json()
    return data.todo
  }

  const addItem = async (item) => {
    const res = await fetch('http://localhost:8080/post', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(item),
    })
    const data = await res.json()
    setItems([...items, data.todo])
  }

  const removeItem = async (id) => {
    const res = await fetch(`http://localhost:8080/delete/${id}`, {
      method: 'DELETE',
    })

    res.status === 200
    ? setItems(items.filter((item) => item.id !== id))
    : alert('There was an error while deleting')
  }

  const markItem = async (id) => {
    const itemToToggle = await fetchItem(id)
    const updatedItem = { status: !itemToToggle.status }

    const res = await fetch(`http://localhost:8080/put/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })

    if(res.status === 200) {
      const data = await res.json()
      setItems(
        items.map((item) =>
        item.id === id ? { ...item, status: data.todo.status } : item
        )
      )
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <AddItem addItem={addItem} />
      {
        items.length > 0
        ? (<Items items={items} removeItem={removeItem} markItem={markItem} />)
        : ('No items')
      }
    </div>
  )
}

export default App
