import React, { Component }  from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import Filter from './components/Filter/Filter'
import styles from './components/ContactForm/ContactForm.module.css'
class App extends Component {
  state = {
    contacts: [ ],
    filter: '',
   }
  componentDidMount(){
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts){
    this.setState({ contacts: parsedContacts});
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts)) 
    }
  }
  changeFilter = element => {
   this.setState({filter: element.currentTarget.value});
  };
    deleteContacts = contactId =>{
    this.setState(prevState =>({
      contacts: prevState.contacts.filter(contact =>contact.id !==contactId)
    }));
  }
  formSubmitHandler = ({ id, name, number }) => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name === name)) {
      alert(
        `${name
          .split(' ')
          .map(string => string.charAt(0).toUpperCase() + string.slice(1))
          .join(
            ' ',
          )} is already in contacts.`,
      );
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };
  visibleContacts = () => {
      const { filter, contacts } = this.state;
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
  };
  render(){
    const { filter } = this.state;
    const visibleContacts = this.visibleContacts();
  return (
  <div className={styles.phonebook}>
  <h1>Phonebook</h1>
  <ContactForm
   onSubmit={this.formSubmitHandler}
    />
  <h2>Contacts</h2>
  <Filter value={filter} onChange={this.changeFilter} />
  <ContactList
     contacts={visibleContacts}
     onChange={this.changeFilter}
     onDelete={this.deleteContacts} /> 
    </div>
  );
 }
}

export default App;
