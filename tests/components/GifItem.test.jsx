import { cleanup, render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
import { afterAll, describe, expect, test } from "vitest";

describe("Pruebas en <GifItem />", () => {

  afterAll(() => {
    cleanup();
  });

  const title = 'JJK'
  const url = 'https://jjk.com/geto.jpg'

  test("should match with snapshot", () => {
    const container = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('should show image with correct URL and ALT', () => { 
    // render( <GifItem title={title} url={url} />)
    const {src, alt} = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
   })

   test('should show title in component', () => { 
    // render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
    })
});
