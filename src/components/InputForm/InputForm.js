import React, { useState } from "react";

export default function NameForm(props) {
  const [name, setName] = useState("");
  
  const [counter, setCounter] = useState(0);

  const handleSubmit = (e) => {
      e.preventDefault();
      setCounter(counter+1);
      console.log(`Submit ${name}`, e.target);
      // alert(`Submitting Name ${name}`)
  }

  return (
    <>
    <form className='bg-[#0C134F]' onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <div className='text-gray-700'>
      The number of submissions is {counter}
    </div>
    </>
  );
}