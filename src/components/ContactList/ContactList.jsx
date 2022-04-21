import PropTypes from 'prop-types';
import { InputLabel, InputFilter } from '.';

export const ContactList = ({ value, onChangeFiter, children }) => {
  return (
    <>
      <InputLabel>
        Find contacts by name
        <InputFilter
          type="text"
          value={value}
          onChange={onChangeFiter}
          placeholder="Enter name"
        />
      </InputLabel>
      {children}
    </>
  );
};
ContactList.propTypes = {
  value: PropTypes.string.isRequired,

  onChangeFiter: PropTypes.func,
};
