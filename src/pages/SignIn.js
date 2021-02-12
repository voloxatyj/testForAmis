import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useContextData } from '../context/context';
import { SET_NAME } from '../context/types';
// Components
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Label } from '../components/label';
import { Error } from '../components/error';
import { InputContainer } from '../components/div';
// SVG Icons
import eye from '../styles/icons/eye.svg';
import not_eye from '../styles/icons/not_eye.svg';
import close from '../styles/icons/close.svg';

export const SignIn = () => {
  const [show_pass, setShow_pass] = useState(false);
  const [state, dispatch] = useContextData();
  const history = useHistory();

  const [info, setInfo] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (state.name !== null) {
      history.push('/main');
    } else return;
  }, [state]);

  const changeInfo = (event) =>
    setInfo({ ...info, [event.target.name]: event.target.value });

  const showPassword = () => setShow_pass((prev) => !prev);

  const clearForm = () => setInfo('');

  const signIn = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem(`${info.email}`)) || undefined;
    if (!info.email && !info.password) {
      setErrors({
        email: 'Wrong email or password',
        password: 'Wrong email or password',
      });
    } else if (info.email !== data?.email || !info.email) {
      setErrors({ password: '', email: 'Wrong email or password' });
    } else if (info.password !== data?.password || !info.password) {
      setErrors({ email: '', password: 'Wrong email or password' });
    } else {
      setErrors('');
      dispatch({ type: SET_NAME, payload: data.fullName });
    }
  };

  return (
    <div className="header flex column ai_c">
      <h1>Sign In</h1>
      <form className="container sign-in row jc_s-a ac_s-a">
        <InputContainer about={errors.email} className="sign-in">
          <div className="input-wrapper flex">
            <Label htmlFor="email" className="label">
              Email
            </Label>
            <Input
              onChange={changeInfo}
              id="email"
              placeholder="example@acme.com"
              type="text"
              name="email"
            />
          </div>
        </InputContainer>
        <InputContainer about={errors.password} className="sign-in">
          <div className="input-wrapper flex">
            <Label className="label" htmlFor="password">
              Password
            </Label>
            <Input
              onChange={changeInfo}
              id="password"
              type={show_pass ? 'text' : 'password'}
              name="password"
            />
          </div>
          <div className="input-group-btn flex">
            <img
              onClick={showPassword}
              className="eye-pass"
              src={show_pass ? not_eye : eye}
              alt="eye"
            />
          </div>
        </InputContainer>
        <Button type="submit" onClick={signIn} disabled={!errors}>
          Sign In
        </Button>
      </form>
      <p>Don’t have an account yet?</p>
      <Link to="/signUp" onClick={clearForm}>
        <p>Sign Up</p>
      </Link>
      {(errors.email || errors.password) && (
        <Error className="inline jc_s-e ai_c">
          Wrong email or password
          <img src={close} alt="close" />
        </Error>
      )}
    </div>
  );
};
