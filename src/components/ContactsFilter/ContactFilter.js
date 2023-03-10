import PropTypes from 'prop-types';
import { Filter } from './ContactFilter.styled';

export const ContactFilter = ({ value, onChange }) => {
  return (
    <Filter>
      <h3>Contacts</h3>
      Find contact by name
      <input type="text" value={value} onChange={onChange} />
    </Filter>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
