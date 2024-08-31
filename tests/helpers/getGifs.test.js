import { describe, expect, test } from "vitest"
import { getGifs } from "./../../src/helpers/getGifs"

describe('getGifs tests', () => { 
    test('should return a gifs array', async () => { 
        const gifs = await getGifs('Geto Suguru')
        expect(gifs.length).toBeGreaterThan(0)
     })
 })