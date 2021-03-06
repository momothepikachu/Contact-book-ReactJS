import React, { Component } from 'react'
import ListContacts from './ListContacts'
import {BrowserRouter, Route} from 'react-router-dom'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
	state = {
		contacts: []
	}
	componentDidMount(){
		ContactsAPI.getAll().then((contacts) => {
			this.setState({
				contacts: contacts
			})
		})
	}
	removeContact = (contact)=>{
		this.setState((state)=>({
			contacts: state.contacts.filter((c)=> c.id !== contact.id)
		}))
	}

	createContact(contact){
		this.setState(state => ({
			contacts: state.contacts.concat([contact])
		}))
	}

    render() {
        return (
        	<BrowserRouter basename={process.env.PUBLIC_URL}>
	        <div>
	        <Route exact path="/" render={() => (
	          <ListContacts 
	          onDeleteContact={this.removeContact} 
	          contacts={this.state.contacts}/>
	        )} />
	        <Route path="/create" render={({history}) => (
	        	<CreateContact 
	        		onCreateContact={(contact)=>{
	        			this.createContact(contact)
	        			history.push('/')
	        		}}
	        	/>
	        )}/>
	        </div>
	        </BrowserRouter>
        )    
  }
}

export default App