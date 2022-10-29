import {useState, useEffect} from 'react'

import Form from "./Form/index"
import List from "./List/index"
import "./style.css"


function Contacts() {
  const [contacts, setContacts]=useState([
    {
      fullname:"mehmet",
      phone_number:"31232"
    },
    {
      fullname: "aslı",
      phone_number:"21231"
    },
    {
      fullname:"bugra",
      phone_number:"9183281"
    }
  ])

  useEffect(()=>{
    console.log(contacts)
  },[contacts])
  
    return (
    <div id='container'>
      <h1>Contacts</h1>    
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
        
    </div>
  )
}

export default Contacts