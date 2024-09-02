import { describe, expect, test, vitest } from 'vitest'

import { GifGrid } from "../../src/components";
import { render, screen } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

vitest.mock('../../src/hooks/useFetchGifs')

describe('<GifGrid /> tests', () => { 
    const category = 'Suguru Geto'

    test('should show loading at the beggining', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category } />)
        expect(screen.getByText('Loading...'))
        expect(screen.getByText(category))
     })

    test('should show items when getting images from useFetchGifs', () => { 
        const gifs = [
            {
                id: '1',
                title: 'Geto Suguru',
                url: 'https://localhost/Geto.jpg'
            },
            {
                id: '2',
                title: 'Satoru Gojo',
                url: 'https://localhost/Gojo.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category } />)
        expect(screen.getAllByRole('img').length).toBe(2)
     })
 })