import { useRef } from "react";

function EmailForm() {

    const emailRef = useRef();
  
    function submitFormHandler(event) {
  
    event.preventDefault();
  
    const enteredEmail = emailRef.current.value;
    console.log(enteredEmail);git
    // could send enteredEmail to a backend server
  
    }
  
    return (
        <form  onSubmit={submitFormHandler}>

    <label htmlFor="email">Your email</label>

    <input

      ref={emailRef}

      type="email"

      id="email"

    />

    <button>Save</button>

  </form>

  )};

  export default EmailForm;
