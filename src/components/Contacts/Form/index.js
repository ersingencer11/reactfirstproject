import {useState, useEffect} from 'react'

const initialFormValues={fullname:"", phone_number:""}

function Form({addContact, contacts}) {
  const [form, setForm] = useState(initialFormValues)
  
  useEffect(()=>{
    setForm(initialFormValues)  
  },[contacts])

  const onChangeInput=(e)=>{
    // console.log(e.target.name)
    // console.log(e.target.value)
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    if(form.fullname===""||form.phone_number===""){
      return false
    }  
    console.log(form)
    addContact([...contacts,form])   
  }
  
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name="fullname" placeholder='Full Name' value={form.fullname} onChange={onChangeInput}></input>
      </div>
      
      <div>
      <input name="phone_number" placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput}></input>
      </div>
      
      <div className='btn'>
        <button>Add</button>
      </div>

    </form>
  )
}

export default Form