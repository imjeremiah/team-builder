import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Member from './components/Member';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
};

function App() {

  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {

    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    setTeamMembers([...teamMembers, newMember]);
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <Form values={formValues} update={updateForm} submit={submitForm}/>

      {
        teamMembers.map(member => {
          return(
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
