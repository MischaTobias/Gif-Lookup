import { describe, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components'

describe('<AddCategory /> tests', () => { 
    
    test('should change input value', () => { 
        render(<AddCategory onNewCategory={() => {}} />)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: 'Suguru Geto' }})

        expect(input.value).toBe('Suguru Geto')
        screen.debug()
     })
 })