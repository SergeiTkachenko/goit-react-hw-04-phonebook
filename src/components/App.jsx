import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { AddForm } from './Form/Form';
import { ContactList } from './ContactsList/ContactList';
import { ContactFilter } from './ContactsFilter/ContactFilter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      ],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (newName, number) => {
    const isNotUnique = this.state.contacts.some(
      ({ name }) => name === newName
    );
    if (isNotUnique) {
      return alert(`${newName} is already in contacts.`);
    }
    const newContact = {
      id: nanoid(),
      name: newName,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = ContactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== ContactId),
      };
    });
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    const { filter } = this.state;
    return (
      <Layout>
        <AddForm onSubmit={this.addContact} />
        <ContactFilter value={filter} onChange={this.changeFilter} />
        <ContactList items={visibleContacts} onDelete={this.deleteContact} />
        <GlobalStyle />
      </Layout>
    );
  }
}
