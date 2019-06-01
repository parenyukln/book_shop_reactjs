import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'id': '',
      'title': '',
      'author': '',
      'price': null
    }
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      'id': '',
      'title': '',
      'author': '',
      'price': ''
    });
    
  }

  render() {
    return (
      <div className='addForm'>
          <form action='' onSubmit={this.submit}>
            <label htmlFor='id'>Id</label>
            <input id='id' type='text' name='id' value={this.state.id} onChange={this.change}/>
            <label htmlFor='title'>Title</label>
            <input id='title' type='text' name='title' value={this.state.title} onChange={this.change}/>
            <label htmlFor='author'>Author</label>
            <input id='author' type='text' name='author' value={this.state.author} onChange={this.change}/>
            <label htmlFor='price'>Price</label>
            <input id='price' type='text' name='price' value={this.state.price} onChange={this.change}/>
            <input type='submit' value='Add'/>
          </form> 
      </div>
    );
  }
}



export default AddForm;
