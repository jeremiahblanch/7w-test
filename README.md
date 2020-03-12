# Jeremiah Blanch
0435 002 708
jeremiahblanch@gmail.com

## For the built solution, go to <https://jeremiahblanch.github.io/7w-test-build/>

## 7West Tech Test

### Assumptions

The spec said to "Push your code into your GitHub" and then "host your solution" on github pages. I haven't used Github pages before. After I set it up I realised it was showing my *source code* - this Readme file. To host the *solution* would involve *building it* and then hosting the *built* files on github, and you don't normally commit built files to a repository. Maybe I'm missing something? So I made a second repository and copied the build file over to it. Now I have two things hosted on github pages:
    1. this at <https://jeremiahblanch.github.io/7w-test/>
    2. the solution at <https://jeremiahblanch.github.io/7w-test-build/>

The expected results screen shots were different sizes and zooms. After some trial and error, I resized all the expect result images so they were 1:1 for pixels. I managed to simplify the styling down to only a couple of media queries, with these caveats:
- I was unable to get the correct card with at 812px wide - the expected result is 355 and mine is 365. The only way I could get this was to add an extra rule targeting widths around 812px, or play with the margins, however my one still has an even margin between the cards whereas the example space between the cards is larger than that around the sides
- There are no designs for between 375 and 768 wide, when the cards will get larger than they are on any other designs. So I let them grow full width. I have a max-height set on the Meta element (which is otherwise sized by a height % so it is always in proportion)
- I haven't looked at preloading the image or using place holders so that the cards have the correct shape before the images load. This is more noticeable now the app is hosted remotely.
- I haven't looked in detail at the font sizes, or the font, or the correct tint on the caption overlay

### Reason for the chosen approach
- I followed the instructions and didn't use anything else in terms of packages. I used `create-react-app` because that seemed the most straight forward.
- My App.js has a Container, Card, and Panel components. The Panel component is inside the Container, simply because each react component needs one root element, and I didn't want to make another wrapper element. As the Panel is `position: fixed` it doesn't interfere with the flex layout of the Cards in the Container.
- As the card appears the same inside the Panel, I used the Card component inside the Panel. Even if it was a different size, I'd probably just use props to change the size depending on the parent and make the component re-usable.
- I used the test framework that came with `create-react-app`. I haven't written tests in about a year, and they were done by adapting Storybook stories into Jest tests for a Reat Native mobile app. So this was a bit of a blind attempt. I had to look up a good way to address Styled Components in the tests without adding unnecessary ids to the elements. The tests had some repeated code so I abstracted these to re-usable functions. I'm not sure if the pattern I chose was the most appropriate but wouldn't know a better answer until I had written more tests or seen complete tests for another component.

### What could you I done better if time was not a constraint?
- The 7 logo should be an SVG, and be a separate styled component. This would also help the tests.
- The media images could be served in different sizes.
- Between about 1080px and 1200px screen width the last card image appears too wide
- The image inside the card component should be a separate re-usable styled component, and encapsulate the logic of different src images using srcset. This would make the tests more robust. See comments in the tests. I would also look into giving the element a size before it loads, or perhaps use a CSS `background-image` for the image, with  the style trick of `height: 0`, `padding-bottom: {aspect-ratio-of-image}%`, `background-size: cover`, `width: 100%`.
- ARIA, accessibility. I added one `aria-describedby` because I was going to use it in tests (`getByRole`) but ended up using the technique described above to find elements by their styled component class name. I left this in, but have not addressed any other accessibility aspects. Testing through roles not styled components is probably the very best way to test.
- I used a `transform: translateX` to show and hide the panel. For testing, I merely tested that style property was there. Perhaps a better test would be agnostic as to how the panel was moved off screen and tested visibility. OR to also test for the 400ms.

---

## To run

In the project directory, you can run:

### `yarn start`


## To test

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## To build

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
