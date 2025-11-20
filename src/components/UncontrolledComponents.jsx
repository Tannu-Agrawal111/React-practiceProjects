import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Name: " + nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>Uncontrolled Form</h2>

      <input type="text" placeholder="Enter Name" ref={nameRef} />
      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;