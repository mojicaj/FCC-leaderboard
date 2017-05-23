/*eslint-env node*/

var React = require('react');

class Board extends React.Component {
  constructor () {
    super();

    this.state = {
      active: 'recent'
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(id) {
    this.setState({active: id.target.id});
    this.props.clkHndlr(id);
  }

  render () {
    return (
      <div className='ldr'>
        <h2>Leaderboard</h2>
        <table className='board'>
          <tbody>
            <tr className='row' id='top'>
              <th>#</th><th>Camper Name</th>
              <th className={this.state.active === 'recent'?'selected':''} id='recent' onClick={this.changeView}>Past 30 Days  </th><th className={this.state.active === 'alltime'?'selected':''} id='alltime' onClick={this.changeView}>All Time  </th>
            </tr>
            {this.props.view.map(function (camper, ind) {
              var profile_link = 'https://www.freecodecamp.com/'+camper.username;
              return (
                <tr key={camper.username} className='row'>
                  <td className='rank'>{ind+1}</td><td><img src={camper.img} /><a href={profile_link} target='_blank'>{camper.username}</a></td><td className='pts'>{camper.recent}</td><td className='pts'>{camper.alltime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

module.exports = Board;
