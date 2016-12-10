// @flow
var React = require("react");

// This is really simple React Component.
// It has its own name (HelloWorld) it will be used for things like error display.
//
// Task: Render HTML span with "Hello World" text.

class OneTimeClickLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {clicked: false};
    this.linkClicked = this.linkClicked.bind(this);
  }

  linkClicked(event) {
    this.setState({clicked: true})
  }

  render() {
    if(this.state.clicked === false) {
      return (
        <a href="#" onClick={this.linkClicked} id="click">Click me</a>
      )
    } else {
      return (
        <span>You clicked the link</span>
      )
    }
  }
}

class HelloWorld extends React.Component {
  // All components *must* have a `render` method defined.
  //
  // To define a component's render method, we use syntax called JSX. As you
  // can see it looks similar to HTML. You can use normal JavaScript too, but
  // JSX is much more popular, so we will stick to it. JSX gets converted to
  // JavaScript code. It is here just for readability purposes.
  //
  // Note: You can read about `render` syntax here:
  // https://facebook.github.io/react/docs/displaying-data.html
  //
  // Warning! JSX is not HTML - in the following lessons you will notice the differences.
  //
  // React delivers a big set of standard HTML elements like `div`, `p`,
  // `canvas` etc. Here you can see usage of a `div` element.

  constructor (props) {
    super(props);
  }

  render() {
    return (<h1>{this.props.name}</h1>);
  }
}

class HelloWorldApp extends React.Component {
  render() {
    return(
      <div id="two-tags">
        <HelloWorld name="Hello Nikola!"/>
        <OneTimeClickLink/>
      </div>
    )
  }
}

// Note:
// You can use the official Google Chrome extension to browse all ReactJS
// components rendered on a single page. See the description here:
// https://facebook.github.io/react/blog/2014/01/02/react-chrome-developer-tools.html

export default HelloWorldApp;
