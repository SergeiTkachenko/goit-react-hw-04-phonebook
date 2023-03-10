import PropTypes from 'prop-types';
import { Item } from './ContactItem.styled';

export const ContactItem = ({ item: { id, name, number }, onDelete }) => {
  return (
    <Item>
      {name}
      <br></br>
      {number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </Item>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
