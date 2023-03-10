// import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContsctItem';

export const ContactList = ({ items, onDelete }) => {
  return (
    <div>
      {items.map(item => (
        <ul key={item.id}>
          <ContactItem item={item} onDelete={onDelete} />
        </ul>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDelete: PropTypes.func.isRequired,
};
