import React from 'react'

const StagedForm = () => {
    let [formMode, setFormMode] = React.useState(1);
    let [name, setName] = React.useState("");
    let [email, setEmail] = React.useState("");

    const inputHandler = (event, id) => {
        id === "email" && setEmail(event.target.value)
        id === "name" && setName(event.target.value)
        console.log(email)
        console.log(name)
    }

  return (
    <>
    {formMode === 1 && <div style={{textAlign: 'center', margin: "5em"}}>
      <input type="text" placeholder="name" value={name} onChange={(e) => inputHandler(e, "name")} />
    </div>}

    {formMode === 2 && <div style={{textAlign: 'center', margin: "5em"}}>
      <input type="text" placeholder="email" value={email} onChange={(e) => inputHandler(e, "email")} />
    </div>}

    <div style={{textAlign: 'center'}}>
        <button onClick={() => setFormMode(1)}>previous</button>
        <button onClick={() => setFormMode(2)}>next</button>
    </div>
    </>
  )
}

export default StagedForm;