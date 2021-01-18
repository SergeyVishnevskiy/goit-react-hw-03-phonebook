import React from "react";
import OneContact from "../OneContact/OneContact";
import PropTypes from "prop-types";

const AllContacts = ({ contacts, filter, deleteContact }) => {
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filterContacts.map(({ name, number, id }) => (
        <OneContact
          key={id}
          name={name}
          number={number}
          id={id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default AllContacts;

AllContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
