import { useState } from "react"
import { AddCategory } from './components/AddCategory'

export const GifLookup = () => {

  const [categories, setCategories] = useState(['Jujutsu Kaisen'])

  const onNewCategory = (newCategory) => {
    setCategories([newCategory, ...categories])
  }

  return (
    <>
        <h1>Gif Lookup</h1>

        <AddCategory onNewCategory={onNewCategory} />

        <ol>
          { categories.map(category => <li key={category}>{category}</li>) }
        </ol>
    </>
  )
}

