import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => setInputValue(target.value)

  const onSubmit = (event) => {
    event.preventDefault()
    const newInput = inputValue.trim();

    if(newInput < 1) return;

    onNewCategory(newInput)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Look for gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
