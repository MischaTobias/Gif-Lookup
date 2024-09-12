import { useState } from "react"
import { GifGrid, AddCategory } from './components'

export const GifLookup = () => {

  const [categories, setCategories] = useState(['Jujutsu Kaisen'])

  const onNewCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories])
  }

  return (
    <>
        <h1>Gif Lookup based on GIPHY</h1>

        <AddCategory onNewCategory={onNewCategory} />

        { categories.map(category => <GifGrid key={category} category={category} />) }
    </>
  )
}

