import { Component } from 'react';
import { GlobalStyles } from 'GlobalStyles/GlobalStyles';
// import { ContactEditor } from 'components/ContactEditor';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { value } = evt.target;
    this.setState({ name: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state.name);

    this.props.onSubmit({ ...this.state });
  };
  render() {
    const { name, number } = this.state;
    console.log('Это рендер: ', this.state);

    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Отправить</button>
        </form>
        <GlobalStyles />
      </>
    );
  }
}
