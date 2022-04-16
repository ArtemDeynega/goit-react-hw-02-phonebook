import { Component } from 'react';

export class ContactEditor extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </>
    );
  }
}
