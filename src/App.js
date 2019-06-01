import React from 'react';
import './App.css';
import AddForm from './AddForm';
import Book from './Book';
import Basket from './Basket';

const dataBook = [
  {id: 1, title: 'Book 1', author: 'Author 1', price: 500},
  {id: 2, title: 'Book 2', author: 'Author 2', price: 1200},
  {id: 3, title: 'Book 3', author: 'Author 3', price: null}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBook: dataBook,
      items: [

      ]
    };
    this.updateBooks = this.updateBooks.bind(this);
    this.addBasket = this.addBasket.bind(this);
    this.removeItemFromBasket = this.removeItemFromBasket.bind(this);
  }

  updateBooks(newBook) {
    const tmp = this.state.dataBook;
    tmp.push(newBook);
    this.setState({
      dataBook: tmp
    });
  }

  addBasket(id) {
    let items = this.state.items.slice(0);
    items[id] = id in items ? ++items[id] : 1;
    this.setState({items: items});
    console.log(items, id);
  }

  removeItemFromBasket(id) {
    let items = this.state.items.slice(0), result = [];
    items[id] = undefined;
    this.setState({
      items: items
    });
  }

  render() {
    let books = dataBook.map(item => {
      return <Book 
        key={item.id} 
        id={item.id} 
        title={item.title} 
        author={item.author}
        price={item.price}
        handleAddBasket={this.addBasket}
        />
    });

    return (
      <div className="App">
        <header className="App-header">
          <AddForm onSubmit={this.updateBooks}/>
          <div className='books'>
            {books}
          </div>
          <Basket 
            items={this.state.items} 
            handleDeleteBasket={this.removeItemFromBasket} 
            dataBook={this.state.dataBook}  
          />
        </header>
      </div>
    );
  }
}



export default App;
