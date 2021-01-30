import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const allCategories = ['all',... new Set(items.map((item) => item.category))]


function App() {
  const [Items, setItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
      if (category === 'all'){
          setItems(items)
          return
      }
      const newItems = items.filter((item) => item.category === category)
        setItems(newItems)
    }


  return (
      <main>
        <section className="menu section">
            <div className="title">
                <h2>Mainland Furniture & Bedding</h2>
                <div className="underline">
                </div>
            </div>
                <Categories categories={categories} filterItems = {filterItems}/>
                <Menu items={Items}/>
        </section>
      </main>
  )
}

export default App;
