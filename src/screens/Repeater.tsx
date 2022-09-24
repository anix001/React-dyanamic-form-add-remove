import { Radio, TextInput } from '@mantine/core'
import React, { useState } from 'react'

const Repeater = () => {
  const[formFields, setFormFields] = useState([
    {title:'', grade:''},
  ])

  const [btn, setBtn] = useState('')
  
  const handleFormChange = (event:any, index:number) =>{
   let data:any[] = [...formFields];
   data[index][event?.target?.name] = event.target.value;
   setFormFields(data);
  } 

  const addField = () => {
    const object  = {
      title:'',
      grade:'',
    };
    setFormFields([...formFields, object]);
  }

  const removeField = (index:number)=>{
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  }

  return (
    <form>
      {
        formFields?.map((form:any, index:number)=>{
          return(
            <div key={index}> 
              <TextInput 
                name='title' 
                label="Title" 
                value={form.title}
                onChange={event => handleFormChange(event,index)}
                />
              <Radio.Group
                name='grade'
                label="Grade"
                value={btn}
                onChange={setBtn}
              >
                <Radio value="react" label="React" />
                <Radio value="svelte" label="Svelte" />
                <Radio value="ng" label="Angular" />
                <Radio value="vue" label="Vue" />
              </Radio.Group>
            <button type='button' onClick={()=>removeField(index)}>remove</button>
            </div>
          )
        })
      }
      <button type='button' onClick={addField}>Add</button>
    </form>
  )
}

export default Repeater