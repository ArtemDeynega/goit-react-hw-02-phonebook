import { Component } from 'react';
import { Form, Label, Input, Button } from '.';

export class ContactEditor extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form autoComplete="off" onSubmit={this.handleSubmit}>
          <Label htmlFor={name}>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor={number}>
            Number
            <Input
              type="tel"
              name="number"
              value={number}
              placeholder="Phone"
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Отправить</Button>
        </Form>
      </>
    );
  }
}
