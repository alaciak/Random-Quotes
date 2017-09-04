import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class QuotesGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    }
  }

  insertQuote(response) {
    this.setState({
      quote: '"' + response.quoteText + '"',
      author: '- ' + response.quoteAuthor
    });
  }

  getQuote() {
    $.ajax({url: 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=callback', jsonpCallback: 'callback', dataType: 'jsonp'}).done(response => {
      console.log(response);
      this.insertQuote(response);
    }).fail(error => {
      console.log('error');
    });
  }

  componentDidMount() {
    this.getQuote();
  }

  handleOnClickSearch = event => {
    event.preventDefault();
    this.getQuote();
  }

  render() {
    return <div>
      <div className='quote'>
        <div className='quote-text'>{this.state.quote}</div>
        <div className='quote-author'>{this.state.author}</div>
      </div>
      <div className='button-search'>
        <a href='#' onClick={this.handleOnClickSearch}>Search</a>
      </div>
    </div>
  }
}

module.exports = QuotesGenerator;
