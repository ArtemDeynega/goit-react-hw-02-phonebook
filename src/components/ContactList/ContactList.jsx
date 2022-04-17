import PropTypes from 'prop-types';
import { Input, ListItem, Button, Item } from '.';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <Input type="text" />
      <Item>
        {contacts.map(({ name, number, id }) => (
          <ListItem key={id}>
            {name} : {number}
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </Item>
    </>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
