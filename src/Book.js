import React from 'react';

function formatPrice(price) {
  return price ? <strong>{price}</strong> : <del>&nbsp;</del>
}

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.addBasketBook = this.addBasketBook.bind(this);
  }

  addBasketBook(e) {
    e.preventDefault();
    this.props.handleAddBasket(this.props.id);
  }

  render() {
    return (
      <div className="book">
        <div>{this.props.title}</div>
        <div>{this.props.author}</div>
        <div>{formatPrice(this.props.price)}</div>
        <a href='#' onClick={this.addBasketBook}>В корзину</a>
      </div>
    );
  }
}



export default Book;
