import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.jsx';
import QuotesGenerator from './QuotesGenerator.jsx';
import '../../scss/style.scss';


class App extends React.Component {

  render() {
    return <div className='col-12'>
      <Nav />
      <QuotesGenerator />
    </div>
  }
}

document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    <App/>, document.querySelector('#app'));
});
