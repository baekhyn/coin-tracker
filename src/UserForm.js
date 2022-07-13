import { useRef } from 'react';
import CoinSelect from './CoinSelect';

const UserForm = (props) => {
  const usdRef = useRef();
  const coinRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const usdResult = usdRef.current.value;
    const coinResult = coinRef.current.value;
    console.log(usdRef.current.value);

    props.formHandler(usdResult, coinResult);

    usdRef.current.value = '';
    coinRef.current.value = '';
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='USD'>USD: </label>
      <input id='USD' type='number' placeholder='$USD' ref={usdRef} />
      <CoinSelect coins={props.data} coinRef={coinRef} />
      <button type='submit'>Convert</button>
    </form>
  );
};

export default UserForm;
