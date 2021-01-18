import styles from "./App.module.css";
import React, { useState, useEffect } from "react";
import AddContact from "./AddContact/AddContact";
import AllContacts from "./AllContacts/AllContacts";
import FilterContacts from "./FilterContacts/FilterContacts";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const inputFilter = ({ target }) => {
    setFilter(target.value.toLowerCase());
  };

  const deleteContact = (id) => {
    setContacts((state) => state.filter((item) => item.id !== id));
    const localArr = JSON.parse(localStorage.getItem("localContacts"));
    const newArr = localArr.filter((item) => item.id !== id);
    localStorage.setItem("localContacts", JSON.stringify(newArr));
  };

  useEffect(() => {
    if (!localStorage.getItem("localContacts")) {
      localStorage.setItem("localContacts", JSON.stringify([]));
    }
    if (
      JSON.parse(localStorage.getItem("localContacts")).length !==
      contacts.length
    ) {
      setContacts((state) => JSON.parse(localStorage.getItem("localContacts")));
    }
    //  [contacts.length];
  });
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.titlePhonebook}>Phonebook</h1>
      <AddContact setContacts={setContacts} contacts={contacts} />

      <h2 className={styles.titleContacts}>Contacts</h2>
      <FilterContacts inputFilter={inputFilter} />
      <AllContacts
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
