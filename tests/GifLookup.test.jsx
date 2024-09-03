import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { GifLookup } from "../src/GifLookup"
import { test, describe, expect, afterEach } from "vitest"

describe('<GifLookup /> test', () => { 

    afterEach(() => {
        cleanup();
      });


    test('should load and show apps title', () => { 
        render(<GifLookup />)
        expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe('Gif Lookup')
     })

     test('should add category when having input', () => {
        render(<GifLookup />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: { value: 'Suguru Geto'}})
        fireEvent.submit(form)

        expect(screen.getAllByRole('heading', { level: 3})).toHaveLength(2)

     })
 })