import { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Label } from '../components/label';
import { Error } from '../components/error';
// SVG Icons
import eye from '../styles/icons/eye.svg';
import not_eye from '../styles/icons/not_eye.svg';
import close from '../styles/icons/close.svg';

export const SignIn = () => {
  const [show_pass, setShow_pass] = useState(false);
  const [data, setData] = useState({});

  const [info, setInfo] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const changeInfo = (event) =>
    setInfo({ ...info, [event.target.name]: event.target.value });

  const showPassword = () => setShow_pass((prev) => !prev);

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
      window.location.href = '/main';
    }
  };

  return (
    <div className="header flex column ai_c">
      <h1>Sign In</h1>
      <form className="container sign-in row jc_s-a ac_s-a">
        <Label htmlFor="email" className="row">
          Email
        </Label>
        <Input
          className="sign-in"
          onChange={changeInfo}
          id="email"
          placeholder="example@acme.com"
          type="text"
          name="email"
          about={errors.email}
        />
        <Label htmlFor="password" className="row">
          Password
        </Label>
        <Input
          className="sign-in"
          onChange={changeInfo}
          id="password"
          type={show_pass ? 'text' : 'password'}
          name="password"
          about={errors.password}
        />
        <img
          onClick={showPassword}
          className={show_pass ? 'not-pass' : 'eye-pass'}
          src={show_pass ? not_eye : eye}
          alt="eye"
        />
        <Button type="submit" onClick={signIn} disabled={!errors}>
          Sign In
        </Button>
      </form>
      <p>Don’t have an account yet?</p>
      <Link to="/signUp">
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
