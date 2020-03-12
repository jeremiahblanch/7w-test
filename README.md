# Jeremiah Blanch

## 7West Tech Test

### Assumptions
- I haven't looked at preloading the image or using place holders so that the cards have the correct shape before the images load
- The expected results screen shots were different sizes. No specific rules were given for the card sizing. It seems obvious the cards are full width on narrow screens. For the screens > 768, eg iphone X, it looks like it is 350px. For the even large screens, it looks like approx 385px. I checked by measuring the pixels and then multiplying by (the pixel size written in the top of the screen) divided by (how wide the screen shot screen was in pixels). I have not made these pixel perfect, just close enough, which is fine for this exercise. Normally in a case like this I would clarify the exact rules with the designer or use invision or some other tool where the element size would be recorded.
- Equally I haven't looked in detail at the font sizes, or the font, or the correct tint on the caption overlay
- I have not checked if the padding rules are different at different media widths

### Reason for the chosen approach
- I followed the instructions and didn't use anything else in terms of packages.
- My App.js has a Container, Card, and Panel components. The Panel component is inside the Container, simply because each react component needs one root element, and I didn't want to make another wrapper element. As the Panel is `position: fixed` it doesn't interfere with the flex layout of the Cards in the Container.
- As the card appears the same inside the Panel, I used the Card component inside the Panel. Even if it was a different size, I'd probably just use props to change the size depending on the parent and make the component re-usable.
- I haven't done much in the way of interactivity tests before so that was a bit new for me; I haven't written tests in about a year so I had to look up a good way to address Styled Components in the tests without adding unnecessary ids to the elements. The tests had many parts that needed to be re-used so I abstracted these to re-usable functions. I'm not sure if the pattern I chose was the most appropriate but wouldn't know a better answer until I had written more tests or seen complete tests for another component.

### What could you I done better if time was not a constraint?
- The image component should be a separate re-usable styled component, and encapsulate the logic of different src images using srcset. This would make the tests more robust. See comments in the tests
- Ensure pixel perfect details on image sizes, paddings, fonts
- The brand logo element should be a separate styled component. This would also help the tests.
- I used a transform: translateX to show and hide the panel. For testing, I merely tested that style property. Perhaps a better test would be agnostic as to how the panel was moved off screen.

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
