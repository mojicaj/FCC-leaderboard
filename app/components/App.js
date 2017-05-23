/*eslint-env node*/

var React = require('react');
var Board = require('./Board');
var Loading = require('./Loading');
var api = require('../utils/api');


class App extends React.Component {

  constructor () {
    super();

    this.state = {
      recent: null,
      all: null
    };

    this.updateView = this.updateView.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount () {
    this.updateView('recent');
  }

  updateView (view) {
    api.fetchCampers(view)
      .then(function(users) {
        this.setState(function () {
          return { recent: users };
        });
      }.bind(this));
  }

  changeView (id) {
    this.updateView(id.target.id);
  }

  render() {
    return (
			<div>
        <div className='logo fcc'><a href='https://www.freecodecamp.com/' target='_blank'><img src='https://freecodecamp.github.io/design-style-guide/downloads/freeCodeCamp.jpg' /></a></div>
        {!this.state.recent ? <Loading /> : <Board view={this.state.recent} clkHndlr={this.changeView}/>}
      </div>
    );
  }
}

module.exports = App;
