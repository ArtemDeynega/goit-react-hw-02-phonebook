import PropTypes from 'prop-types';
import { Item, ListItem, Button } from './ContactButton.styled';

export const ContactButton = ({ contacts, onDelete }) => {
  return (
    <>
      <Item>
        {contacts.map(({ name, number, id }) => (
          <ListItem key={id}>
            {name}: {number}
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </Item>
    </>
  );
};

ContactButton.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
