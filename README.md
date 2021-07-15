# Online Learning App for The Global Warming Express

## What is the OLA?

The GWE Online Learning App / OLA (formerly OLP) is a web application which allows teachers and students from anywhere in the world to access the educational curriculum of the non-profit organization [The Global Warming Express](https://theglobalwarmingexpress.org/). 

The curriculum is comprised of sessions, each session containing roughly one class period's worth of material, with a teacher presumably covering 1-2 sessions per week. With this online curriculum, teachers are provided with enough material to teach GWE-provided material on a regular basis over the course of a full school year.

## Technical Overview / Dependencies

### Tech Stack:
* JavaScript
* ReactJS
  * Webpack
* CSS & SCSS
* HTML

### ReactJS for User Interface

This app's user interface is built with [ReactJS](https://reactjs.org/docs/getting-started.html), an extremely popular (at the time of writing) JavaScript library originally developed by the Facebook software engineering team and currently used by countless major organizations. Specifically, this app was initialized using  [create-react-app](https://github.com/facebook/create-react-app), a common starter package for simple React apps.

ReactJS is a component-based system primarily used for SPAs (Single Page Applications), which means there is only one traditional web page in the entire app (`/public/index.html`) which is essentially empty. Components are all written into seperate files and are compiled and inserted into the HTML page at runtime via JavaScript, and the components change responding the user interaction via JavaScript. Because the app doesn't rely on loading new HTML pages in order to change the current on-screen content, the app runs much faster than a more traditional website. What a user experiences as what seems to them to be a traditional web page, we refer to as a "view" (*e.g. Library View, Sessions View, etc*), since these views are not technically "pages". 

The trademark of React code is JSX, a modifed form of HTML which allows for integrated data binding and event listening.

Some key ReactJS concepts and their corresponding documentation:
* [Components & Props](https://reactjs.org/docs/components-and-props.html)
* [State](https://reactjs.org/docs/state-and-lifecycle.html)

_**NOTE:**_ **There is one aspect of the OLA which can be updated with no understanding of ReactJS - The curriculum content.** The educational content itself is all coded in vanilla JavaScript, which makes adding, removing, or altering content possible with no undesrstanding of ReactJS*. The inner workings of the OLA take the educational material as data (from the `src/data/` folder), and represent them in the user interface built with ReactJS (in the `src/views/` & `src/components/` folders). 

*The app currently supports 4 specific types of content: books, discussions, videos, and experiments. The ReactJS UI contains the ability to automatically render these types of content when they are properly coded into the curriculum. Supporting any other type of content will require building out the functionality in the ReactJS user interface.

### Client-Side Routing w/ React Router

This is an _**entirely front-end application**_, meaning there is no server functionality involved / required, which is a positive for multiple reasons*. 

The project does use a system which gives it some of the functionality of a back-end server despite being only a frontend app. This system is [ReactRouter](https://reactrouter.com/web/guides/quick-start), a supplemental library which interacts with React to render components conditionally based on the app's URL. In short, this allows the app to display the Library view by visiting the URL `(website.com)/library`**, or to display the Resources view when visiting `(website.com)/resources`. 

**At one point, there was discussion of user login functionality, but since the app's primary audience are children, this could potentially put the app into [COPPA](https://www.ftc.gov/tips-advice/business-center/guidance/complying-coppa-frequently-asked-questions-0) territory, since something as simple as saving a child's name and email address is delicate under COPPA. For this reason the decision was made to have the app open to the public with no login required.*

***At the time of writing, the app's domain name has not been finalized, so I use website.com as placeholder.* 

### File Bundling w/ Webpack

One aspect of this app being built with ReactJS / [create-react-app](https://github.com/facebook/create-react-app) is that it features [Webpack](https://webpack.js.org/concepts/) bundling. Webpack is a popular JavaScript bundler which takes the numerous JavaScript files written during development and compiles them into a single JavaScript file for consumption by a web browser. This is beneficial because a developer can follow a 'seperation-of-concerns' workflow, but the browser only has to load one JavaScript file at runtime.

The main reason this is important for a high level understanding of this app's functioning is because the file structure that is familiar during development will not be present in the built app. When webpack builds the app, it starts at the `./src/index.js` file, then for each file that is `import`ed by `index.js`, that file becomes bundled in, and any imports from those files become bundled in as well. An important effect of this to realize is that files can be in the app's `./src/` folder during development, but if they are not properly imported into the bundle chain, they will not be present at all in the app's build.

The app's `./public` folder is unique in that it's contents will be present in the app's build, which is why certain elements, such as images, etc. are present in that folder. 

**NOTE:** Putting content files in the `./public` should not be thought of as a go-to solution for files that the developer want to be present in the app for reasons that won't be explained in detail here. The go-to solution for almost all files should be a relative import from a relevant `./src/` subfolder.

## Multiple Language Programming

One important aspect of the app to understand is that it is programmed with multiple languages for all user-facing text. At any time a user can click a language selector button in the top nav bar and change the language of all text on the screen. Currently the app supports English & Spanish, and French is in the process of being incorporated.

### The MultiLingual API
`src/data/model/multiLingual.js` is the heart of most of the app's multi-lingual capabilities. MultiLingual is a class whose consructor creates an object which can contain strings for enlish, spanish, and/or french and provides a basic API for getting the desired text in a specified language. 

To illustrate how MultiLingual works, see the following code:

```javascript
import { MultiLingual } from "../model/multiLingual"; 
// ^ As with any import, this relative path will have to be adjusted to reflect
// MultiLingual's location in relation to the current file 

var hello = new MultiLingual(
  'Hello world',
  'Hola mundo',
  'Bonjour le monde'
);

var helloEng = hello.get('eng');
var helloSpa = hello.get('spa');
var helloFra = hello.get('fra');

console.log(helloEng, helloSpa, helloFra);
// Logs: 'Hello world', 'Hola mundo', 'Bonjour le monde'
```

### The Language State & Prop
What makes MultiLingual especially useful is its pairing with [React state](https://reactjs.org/docs/state-and-lifecycle.html), namely the OLA's `language` state, which is declared in the app's outer-most [component]() `src/components/app/App.js`, and then passed down to all child components as a [prop](https://reactjs.org/docs/components-and-props.html) (Another ReactJS feature). The `language` state (and it's dependent props) always contains a string representing one of the supported languages (at the time of writing - `eng`, `spa`, or `fra`).

What this accumulates to can be illustrated with the following:

```javascript
var hello = new MultiLingual(
  'Hello world',
  'Hola mundo',
  'Bonjour le monde'
);

return <p>{hello.get(props.language)}</p>
```
In the above code, a 'Hello world' `p` element would be displayed in the app's current language, as determined by the app's `language` state and passed down to this component's `language` prop. If the user clicked one of the other language selector buttons, this `p` element would immediately display the string of the new language just clicked, as can be witnessed with any of the text in the running app.

**NOTE:** In the example above, we assumes that this code is included in a React component inside the OLA, and that the `language` state is being passed as a prop to this component. 

### The PageText Data Object
`src/data/pageText.js` is the source of most of the general text for the app - buttons, labels, etc. This file exports a tree object of nested multi-lingual text data which can be accessed to insert text into the app which has multi-lingual functionality.

Having this text stored in a seperate file allows for multiple components to share common text, and also makes it easier to keep up with all the text in the app and the various translations. 

## Educational Content

The purpose of the OLA is displaying the included educational content to users. The OLA has 4 types of built-in content which it currently supports - books, discussions, videos, and experiments. For users, this content can be accessed specifically and individually from the Library view, or as it appears in the curriculum.

The media files associated with the content is mostly located in (`/public/assets/`). In that folder you will find folders labelled `book` and `discussion`. These folders contain 

### Books

As the original type of content which the OLA was built to feature, the books are perhaps the most important feature of the app. The books are all digital versions of real-world books in publication. Accesssing the books as a user in the app is an experience similar to any other sort of e-book outlet with visual pages and optional audio narration (available in spanish as well as English), as well as translated captions that appear when accessing any of the books while the app is in a language other than the books' native language. This section explains the behind-the-scenes programming and media files that make these books readable for a user.

#### Media Assets 

The app's books are made up of:
* Page scans for each page of the book in JPG format 
  * `/public/assets/book/[Book Id]/pages/[Page Number].jpg`
* Narration audio files in MP3 format - one for each page (seperate folders for each language)
  * `/public/assets/book/[Book Id]/audio/[Language]/[Page Number].mp3`
* JavaScript-coded text translations for languages other than English (all books have English text on the page JPGs so not coded text currently exists in English)
  * `/src/data/books/translationsSpa.js` (For Spanish Translations) 

The UI's Read component (`src/views/read/read.js`) references the three aspects of the book listed above and renders them to the user in a way that simulates the experience of having a book read to them. It is important to be aware of all three of these elements, because editing one of these elements will likely put it out of sync with the other two.

It is important to note that while a book can contain and utilize these three types of assets, the app is built to flexible in case a certain book doesn't have audio narration yet (or doesn't have narration in a specific language), or doesn't have translated text yet.

#### The Book Data Model

Every book in the app is coded as a Book data object, which is an instance of the Book class. This class gives every book access to similar properties. The key trait to be aware of for these Books is that when the Book is created, the Book class constructor assembles the data for all its page images, audio, and translations automatically. Because of this, accessing the required assets for each book in the UI components is simple and predictable.

To illustrate how simple the Book data model makes it to create and modify book data, see the following:

```javascript
var myBook = new Book('uniqueId','New Book Title','',18);

return <img src={myBook.pageData[3].img}/>
// Returns an image with the src set to the new book's page 4 (zero-indexed) image
// Assumes there is an image located in: 
// ./public/assets/book/uniqueId/pages/4.jpg
```

The Book data model is looked at `src/data/model/book.js`. 

As you will see, the Book's constructor utilizes some helper functions, namely `assembleBookPages()` and `assembleBookPreloads()` which can both be found at `src/utilities/consructorHelpers.js`. To understand how a book's media assets are getting assembled, take a look at this data model, and these helper functions.  

#### The Books Data Object

While the Book data model defines the shared programming that all Books have in common, the books data object (`src/data/books/books.js`) is where the individual books are all defined. Each book is created as a `new Book()` (Book being a reference to the Book data model), with arguments passed in for the books unique values. 

One thing to be aware of is how the books are linked with their descriptions and translations - these values are not passed in as arguments, instead they are defined in different files (`src/data/books/bookDescriptions.js` & `src/data/books/translationsSpa.js` - soon to come: `src/data/books/translationsFra.js`), and the Book constructor automatically finds this data during the Book's creation because of it's shared content ID (e.g. `commonGround` or `myLight`). These content IDs are a source of much of the data compilation in this app so be careful with them - one typo in a content ID could cause problems in a variety of places in the app.

## Discussions

The "discussions" in the OLA are a less self-explanatory format of content, but they are very simple to understand. The discussions are original content, created specifically for the GWE OLA, and can be simply described as illustrated stories involving the GWE organization's mascot characters (originating from the book _The Global Warming Express_), in which these mascot characters _discuss_ the key concepts presented in the curriculum's books.

As an alternative to unique illustrations on every page of these stories, the discussions utilize reccuring illustrations for each character, so that each page of text is accompanied by a grouping of illustrations of each character from that section of text. 

### Discussion Assets

The assets that make up the discussions are as follows:
* JavaScript-coded text for all languages, which contains the actual text users will read, in a format the app can process, and also the characters whose illustrations will appear on each page
  * `src/data/discussions/discussionPages.js`
  * `src/data/discussions/discussionPagesSpa.js`
  * `src/data/discussions/discussionPagesFra.js`
* Single character illustrations (one for each character - shared across all discussions)
  * `src/data/discussions/discussionCharacters/images/[Character Name].png`
* Narration audio files in MP3 format - one for each page (seperate folders for each language)
  * `public/assets/discussion/[Discussion ID]/audio/[Language]/[Page Number].mp3`
* A specifc image unique to each individual discussion - used as the cover photo and at one point in the discussion
  * `public/assets/discussion/[Discussion ID]/special.png` 
    
### The Discussion Page Text Object

As mentioned above, `discussionPages.js` contains the data for what will be displayed on each page of each discussion. This data object contains a property for each discussion (represented by the discussion ID which MUST correspond to the ID in the `discussions.js` data object where the discussions are intialized).

Under the key for each discussion on this object, there is a key for each page of the discussion, each of which has two properties - text and images. Each of these is explained here:

#### images

This is an array with a list of the images that will be displayed on the page. At first glance, these don't seem to be images, as the value will look something like this: `"sally", "marina", "joanna"`. These names correspond to values on the `discussionCharacters.js` object, which contains the values for the characters' names as they should be displayed to the reader, as well as the image file that will be displayed. If a value in this `images` property matches a value on the `discussionCharacters.js` object, then that character will be displayed - their image and appropriate name.

Another option for a value in this array is `SPECIAL`, in which case the app will display this discussion's unique image (as mentioned above).

In order to display a different image on a dicussion page (other than a character image or a discussion's special image), the URL path of that image can be listed in the images array. Because of how [Webpack](https://webpack.js.org/concepts/) compiled the assets at build time, however, it can be complicated to understand what the file path to an image should be - the simplest way to do so would be to include that image within the same folder as `discussionPages.js` so that the relative path is simple to understand. 

Within `discussionPages.js`, the data is present for which illustrations will be displayed in each page. You will find this data on the `images` property for each page  

#### Other Content Data Models  

Similar to the Book data model, a data model exists for each type of content in the app. While they are all similar enough to not need individual explanations, you should be awre of them and where to find them: all data models can be found in `src/data/model`:
* Discussion data model (`src/data/model/discussion.js`)
* Video data model (`src/data/model/Video.js`)
* Experiment data model (`src/data/model/experiment.js`)

As you will see in the folder, in addition to the three models mentioned above, there are several other data models as well.Many of them representing sub-data which is contained within the different content models. To understand the data models, start with the three models above, and in examing them, the purposes of the others will become more clear.

#### Other Content Data Models

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
