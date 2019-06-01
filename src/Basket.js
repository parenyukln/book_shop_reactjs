import React from 'react';

function formatPrice(price) {
  return price ? <strong>{price}</strong> : <del>&nbsp;</del>
}

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.deleteBasketItem = this.deleteBasketItem.bind(this);
    this.getIndexById = this.getIndexById.bind(this);
}

  deleteBasketItem(e) {
    e.preventDefault();
    this.props.handleDeleteBasket(e.target.id);

  }

  getIndexById(id) {
    for (let p in this.props.dataBook)
    if (this.props.dataBook[p]['id'] == id)
    return p
  }

  render() {
    let items = [], j, sum = 0;

    for(let i in this.props.items) {
        if ( !this.props.items[i] ) continue;
        j = this.getIndexById(i);
        sum += this.props.items[i] * this.props.dataBook[j]['price'];
        items.push(
            <div className='basket-item'>
                <a href='#'>«{this.props.dataBook[j]['title']}»</a>
                <span>{this.props.items[i]}шт.</span>
                <span>{this.props.dataBook[j]['price']}руб.</span>
                <a href='#' onClick={this.deleteBasketItem} id={i}>Удалить</a>
            </div>
        );
    }

    

    return (
      <div className="basket">
        <h3>Корзина</h3>
        {items}
        <div className='basket-item'>
            <span>Всего: <b>{sum}руб.</b></span>
        </div>
      </div>
    );
  }
}



export default Basket;
