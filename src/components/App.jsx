import React, { Component } from 'react';
import { FindContacts } from './FindContacts/FindContacts';
import { FormPhonebook } from './FormPhonebook/FormPhonebook';
import { ContactsPhonebook } from './ContactsPhonebook/ContactsPhonebook';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    this.state.contacts.forEach(element => {
      if (element.name === name) {
        alert(`${name} is alredy in contacts`);
        return;
      }
    });
    const objData = {
      name: name,
      number: number,
      id: nanoid(),
    };

    this.setState({
      contacts: [objData, ...this.state.contacts],
    });
  };

  findName = data => {
    console.log(this.state.filter);
    this.setState({ filter: data });
  };

  filteredName = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <FormPhonebook onSubmit={this.formSubmitHandler} />
        <FindContacts onInput={this.findName} />
        <h2>Contacts</h2>
        <ContactsPhonebook
          data={this.filteredName}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
