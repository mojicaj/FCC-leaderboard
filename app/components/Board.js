/*eslint-env node*/

var React = require('react');

class Board extends React.Component {

  render () {
    return (
      <div className='ldr'>
        <h2>Leaderboard</h2>
        <table className='board'>
          <tbody>
            <tr className='row'>
              <th>#</th><th>Camper Name</th>
              <th>Past 30 Days</th><th>All Time</th>
            </tr>
            {this.props.view.map(function (camper, ind) {
              var profile_link = 'https://www.freecodecamp.com/'+camper.username;
              return (
                <tr key={camper.username} className='row'>
                  <td>{ind+1}</td><td><img src={camper.img} /><a href={profile_link} target='_blank'>{camper.username}</a></td><td className='pts'>{camper.recent}</td><td className='pts'>{camper.alltime}</td>
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
