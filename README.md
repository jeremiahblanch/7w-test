# Jeremiah Blanch

## For the built solution, go to https://jeremiahblanch.github.io/7w-test-build/

## 7West Tech Test

### Assumptions

- The spec said to "host your solution" on github pages. I haven't used Github pages before. After I set it up I realised it was sowing my *source code* - this Readme file. To host the *solution* would involve *building it* and then hosting the *built* files on github, and you don't normally commit built files. So I made a second repository and copied the build file over to it. Now I have two things hosted on github pages:
    1. this at https://jeremiahblanch.github.io/7w-test/
    2. the solution at https://jeremiahblanch.github.io/7w-test-build/

- The expected results screen shots were different sizes. No specific rules were given for the card sizing, so I just looked at all the different images to derive the rules. I derived the following:
   - below 375px - card should be full width of container
   - between 375 and 767 - don't know. I have assumed it is full width but the designers may in fact want it to be max-width of 350 px
   - between 768 and 1023 - 350 px
   - above 1024 - 385px
 I checked by measuring the pixels and then multiplying by (the pixel size written in the top of the screen) divided by (how wide the device screen was in pixels in the image). I have not made these pixel perfect, just close enough, which is fine for this exercise. Normally in a case like this I would clarify the exact rules with the designer or use invision or some other tool where the element size would be recorded.
- I haven't looked at preloading the image or using place holders so that the cards have the correct shape before the images load. This is more noticeable now the app is hosted remotely.
- I haven't looked in detail at the font sizes, or the font, or the correct tint on the caption overlay
- I have not checked if the padding rules are different at different media widths

### Reason for the chosen approach
- I followed the instructions and didn't use anything else in terms of packages. I used `create-react-app` because that seemed the most straight forward.
- I assumed this is a test of showing I understand the problem and all the different variants. I don't have time to be meticulous with the pixel dimensions and then spend half an hour to discover I have to build the project and host the built files on github pages :)
- My App.js has a Container, Card, and Panel components. The Panel component is inside the Container, simply because each react component needs one root element, and I didn't want to make another wrapper element. As the Panel is `position: fixed` it doesn't interfere with the flex layout of the Cards in the Container.
- As the card appears the same inside the Panel, I used the Card component inside the Panel. Even if it was a different size, I'd probably just use props to change the size depending on the parent and make the component re-usable.
- I haven't written tests in about a year so I had to look up a good way to address Styled Components in the tests without adding unnecessary ids to the elements. The tests had many parts that needed to be re-used so I abstracted these to re-usable functions. I'm not sure if the pattern I chose was the most appropriate but wouldn't know a better answer until I had written more tests or seen complete tests for another component.

### What could you I done better if time was not a constraint?
- The image component should be a separate re-usable styled component, and encapsulate the logic of different src images using srcset. This would make the tests more robust. See comments in the tests. I would also look into giving the element a size before it loads, or perhaps use a CSS `background-image` for the image, with  the style trick of `height: 0`, `padding-bottom: {aspect-ratio-of-image}%`, `background-size: cover`, `width: 100%`.
- Ensure pixel perfect details on image sizes, paddings, fonts
- The brand logo element should be a separate styled component. This would also help the tests.
- I used a transform: translateX to show and hide the panel. For testing, I merely tested that style property was there. Perhaps a better test would be agnostic as to how the panel was moved off screen and tested visibility.

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
