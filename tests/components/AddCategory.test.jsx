import { afterEach, describe, expect, test, vitest } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components'

describe('<AddCategory /> tests', () => { 
    afterEach(() => {
        cleanup()
    })
    
    test('should change input value', () => { 
        render(<AddCategory onNewCategory={() => {}} />)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: 'Suguru Geto' }})

        expect(input.value).toBe('Suguru Geto')
     })

     test('should call onNewCategory if input has a value', () => { 
        const inputValue = 'Suguru Geto'
        const onNewCategory = vitest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form') 

        fireEvent.input(input, { target: { value: inputValue }})
        fireEvent.submit(form)

        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
      })

      test('should not call onNewCategory if there is no input', () => { 
        const onNewCategory = vitest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)
        
        const form = screen.getByRole('form')
        fireEvent.submit(form)

        expect(onNewCategory).not.toHaveBeenCalled()
       })
 })