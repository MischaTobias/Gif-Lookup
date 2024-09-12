import { beforeEach, describe, expect, test, vi } from "vitest"
import { getGifs } from "./../../src/helpers/getGifs"

global.fetch = vi.fn()

function createFetchResponse(data) {
    return { json: () => new Promise((resolve) => resolve(data))}
}

describe('getGifs tests', () => { 
    beforeEach(() => {
        const useFetchGifsResponse = {
          data: [
            {
              id: "BWYS3xLAYVrQWSqrzj",
              title: "Panda Jujutsu Kaisen GIF",
              images: {
                downsized_medium: {
                  url: "https://media2.giphy.com/media/BWYS3xLAYVrQWSqrzj/giphy.gif?cid=d51ebb094mlj0aa78ymmjqek74o2ynd13msypwzv74uvzrce&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                },
              },
            },
            {
              id: "KQPpZD5f0d1IswW9N7",

              title: "Smile GIF by Tokkingheads",

              images: {
                downsized_medium: {
                  height: "480",
                  width: "480",
                  size: "1659564",
                  url: "https://media3.giphy.com/media/KQPpZD5f0d1IswW9N7/giphy.gif?cid=d51ebb094mlj0aa78ymmjqek74o2ynd13msypwzv74uvzrce&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                },
              },
            },
            {
              id: "AeFE3g6d9EpWWk3cfQ",

              title: "Angry Wait For It GIF by BANDAI NAMCO",

              images: {
                downsized_medium: {
                  height: "270",
                  width: "480",
                  size: "1158025",
                  url: "https://media1.giphy.com/media/AeFE3g6d9EpWWk3cfQ/giphy.gif?cid=d51ebb094mlj0aa78ymmjqek74o2ynd13msypwzv74uvzrce&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                },
              },
            },
          ],
        };

        fetch.mockResolvedValue(createFetchResponse(useFetchGifsResponse))
    })

    test('should return a gifs array', async () => { 
        const gifs = await getGifs('Geto Suguru')
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
     })
 })