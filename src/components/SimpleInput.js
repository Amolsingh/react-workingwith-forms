import { useRef, useState, useEffect } from "react";


const SimpleInput = (props) => {

  //const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState('');
  //const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);



  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }


  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log('Name input is valid');
  //   }
  // }, [enteredNameIsValid]);

  const nameInputChangedHandler = (event) => {
    setEnteredName(event.target.value);

    if (!enteredNameIsValid) {
      //setEnteredNameIsValid(true);
      return;
    }
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
    // if (enteredName.trim() === '') {
    //   setEnteredNameIsValid(false);
    //   return;
    // }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    //setEnteredNameIsValid(true);
    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;

    // console.log(enteredValue);
  };



  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          //ref={nameInputRef} 
          type='text'
          id='name'
          onChange={nameInputChangedHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
