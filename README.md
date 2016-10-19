# React Apollo Example

[![Gitter][gitter-img]][gitter-link]

> An example of the app with GraphQL!

[gitter-img]: https://badges.gitter.im/Join%20Chat.svg
[gitter-link]: https://gitter.im/WeLikeGraphQL/react-apollo-example?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge

## Features

 - [GraphQL](http://graphql.org/) for fetching data! The most awesome part of the project!
 - ES6/ES2015 with [Babel](https://babeljs.io/)
 - React data container for the [Apollo Client](http://dev.apollodata.com/react/) 
 - Integrating predictable state container [Redux](http://redux.js.org) with Apollo
 - Hot reloading using [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)
 - Development and production bundling by [Webpack](https://webpack.github.io)
 - [CSSNext](http://cssnext.io/): use of official W3C syntax of the future CSS
 - Transforming styles with JS plugins by [PostCSS](http://postcss.org/)
 - [Wow.js](http://mynameismatthieu.com/WOW/) for CSS animations
 - [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for resolving [layout fatigue](http://blog.karenmenezes.com/2014/apr/13/floats-inline-block-or-display-table-or-flexbox/) and making the app responsive (open the app in desktop, mobile, whatever...). Doesn't work on IE 9, but it should not be a problem nowadays. See [browsers usage](http://caniuse.com/usage-table).
 - [CSS Modules](https://github.com/css-modules/css-modules): say goodbye to global scope in CSS and most of conflicts
 - Linting both JS and CSS, respectively by: [ESLint](http://eslint.org/) and [Stylelint](http://stylelint.io/)
 

 - Production Mode in progress due to [this issue](https://github.com/apollostack/react-apollo/issues/250)
 
## Running the app

### 1. Install Node/npm

Make sure you have Node.js installed (the app has been tested with Node `5.12.0`)

### 2. Clone and install dependencies

```
git clone https://github.com/graphan/react-apollo-example.git
cd react-apollo-example
npm install
```

### 3. Build and run the app

Development mode:
```
npm run dev
```

Production mode: (not works fully due to [this issue](https://github.com/apollostack/react-apollo/issues/250))
```
npm run build
npm run start
```

- Open the client at http://localhost:3000
- You can change ports and other settings in `.env` file

## How to Contribute:

Best way to keep up to date is check the [issues](https://github.com/WeLikeGraphQL/react-apollo-example/issues). We really welcome improvements for **all aspects** of an app.

1. Any suggestions/improvements/bugs can be in the form of Pull Requests, or creating an issue.
2. Coding guidelines: [Airbnb's Style Guide](https://github.com/airbnb/javascript)

I have already applied your hints. I just forked `react-apollo-example` and pushed [this commit](https://github.com/graphan/react-apollo-example/commit/4b0b8394d6eea335119d6d61af4e84295e660cdd). You can see that I use: http://graphql-swapi.parseapp.com. There are no any difference in the project despite the above commit.

When I run: `npm run build` and `npm run start`, then no errors.
However, when I reach `localhost:3000`, then I have the following error in the console:
```console
RENDERING ERROR: { [Error: Network error: Unexpected token <]
  graphQLErrors: null,
  networkError: [SyntaxError: Unexpected token <],
  stack: 'Error\n    at new t (/home/tommyjs/Desktop/WLGQL/copy/react-apollo-example/dist/server.js:7:13556)\n    at /home/tommyjs/Desktop/WLGQL/copy/react-apollo-example/dist/server.js:31:28905\n    at /home/tommyjs/Desktop/WLGQL/copy/react-apollo-example/dist/server.js:32:6321\n    at Array.forEach (native)\n    at /home/tommyjs/Desktop/WLGQL/copy/react-apollo-example/dist/server.js:32:6284\n    at /home/tommyjs/Desktop/WLGQL/copy/react-apollo-example/dist/server.js:38:7557\n    at i (/home/tommyjs/Desktop/WLGQL/copy/react-apollo-example/dist/server.js:38:7325)\n    at m (/home/tommyjs/Desktop/WLGQL/copy/react-apollo-example/dist/server.js:38:8190)\n    at e.broadcastQueries (/home/tommyjs/Desktop/WLGQL/copy/react-apollo-example/dist/server.js:32:6246)\n    at e.broadcastNewStore (/home/tommyjs/Desktop/WLGQL/copy/react-apollo-example/dist/server.js:31:27393)',
  message: 'Network error: Unexpected token <',
  extraInfo: undefined }
```

What might be the root cause?
I use `graphql@0.4.14`. I installed also `graphql@0.7.2`, but the same error.