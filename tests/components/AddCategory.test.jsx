import { afterEach, describe, expect, test } from 'vitest'
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
        // TODO: ????

        render(<AddCategory onNewCategory={() => {}} />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue }})
        fireEvent.submit(form)

        expect(input.value).toBe('')

        screen.debug()
      })
 })