import { describe, expect, test } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('useFetchGifs hook tests', () => { 
    test('should return initial state', () => { 
        const { result } = renderHook(() => useFetchGifs('Geto Suguru'))
        const { images, isLoading } = result.current
        
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })
    
    test('should return an image array and isLoading with false value', async () => { 
        const { result } = renderHook(() => useFetchGifs('Geto Suguru'))
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )
        
        const { images, isLoading } = result.current
        
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
     })
 })