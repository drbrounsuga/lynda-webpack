var React = require('react');
var ReactDOM = require('react-dom');

class About extends React.Component{
  render(){
    return <div>About Us</div>
  }
}

ReactDOM.render(<About />, document.getElementById('react-container'));