import { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Label } from '../components/label';
// SVG Icons
import eye from '../styles/icons/eye.svg';
import not_eye from '../styles/icons/not_eye.svg';
import question from '../styles/icons/question.svg';
import helper from '../styles/icons/helper.svg';

export const SignUp = () => {
  const [show_pass, setShow_pass] = useState(false);
  const [show_confirm, setShow_confirm] = useState(false);
  const [show_helper, setShow_helper] = useState(false);

  const [info, setInfo] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const showPassword = (e) => {
    if (e.target.alt === 'eye') {
      setShow_pass((prev) => !prev);
    } else {
      setShow_confirm((prev) => !prev);
    }
  };

  const changeInfo = (event) => {
    validate(event.target.name, event.target.value);
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const validate = (key, value) => {
    switch (key) {
      case 'fullName':
        const data = value.split(' ');
        if (
          data.length === 1 ||
          data.filter((item) => item.length > 1).length === 1
        ) {
          setErrors({
            ...errors,
            [key]: 'Must be two words, each one minimum 1 symbols',
          });
        } else {
          setErrors({
            ...errors,
            [key]: '',
          });
        }
        break;
      case 'email':
        if (
          !value.includes('@') ||
          !value.includes('.com') ||
          value.length < 8
        ) {
          setErrors({
            ...errors,
            [key]: 'Enter valid email',
          });
        } else {
          setErrors({
            ...errors,
            [key]: '',
          });
        }
        break;
      case 'password':
        const check = /^(?=.*[A-Z]{2})(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        if (!check.test(value)) {
          setErrors({
            ...errors,
            [key]: 'Password not valid',
          });
        } else {
          setErrors({
            ...errors,
            [key]: '',
          });
        }
        break;
      case 'confirmPassword':
        if (value !== info.password) {
          setErrors({
            ...errors,
            [key]: 'Password not match',
          });
        } else {
          setErrors({
            ...errors,
            [key]: '',
          });
        }
        break;
      default:
        break;
    }
  };

  const signUp = () => {
    if (
      Object.values(errors).every((item) => item === '') &&
      Object.values(info).every((item) => item.length > 3)
    ) {
      localStorage.setItem(`${info.email}`, JSON.stringify(info));
    }
  };

  const helperMsg = () => setShow_helper((prev) => !prev);

  return (
    <div className="header flex column ai_c">
      <h1>Sign Up</h1>
      <form className="container sign-up row jc_s-a ac_s-a">
        <Label htmlFor="full-name" className="row">
          Full Name
        </Label>
        <Input
          id="full-name"
          placeholder="John Doe"
          type="text"
          name="fullName"
          value={info.fullName}
          onChange={changeInfo}
          about={errors.fullName}
          className="sign-up"
        />
        {errors.fullName && (
          <small className="full-name">{errors.fullName}</small>
        )}
        <Label htmlFor="email" className="row">
          Email
        </Label>
        <Input
          id="email"
          placeholder="example@acme.com"
          type="text"
          name="email"
          value={info.email}
          onChange={changeInfo}
          about={errors.email}
          className="sign-up"
        />
        {errors.email && <small className="email">{errors.email}</small>}
        {show_helper && <img src={helper} id="helper-info" alt="info" />}
        <img src={question} id="helper" alt="question" onClick={helperMsg} />
        <Label htmlFor="password" className="row">
          Password
        </Label>
        <Input
          id="password"
          type={show_pass ? 'text' : 'password'}
          onChange={changeInfo}
          name="password"
          value={info.password}
          about={errors.password}
          className="sign-up"
        />
        <img
          onClick={showPassword}
          className={show_pass ? 'not-pass' : 'eye-pass'}
          src={show_pass ? not_eye : eye}
          alt="eye"
        />
        {errors.password && (
          <small className="password">{errors.password}</small>
        )}
        <Label htmlFor="confirm-password" className="row">
          ConfirmPassword
        </Label>
        <Input
          id="confirm-password"
          type={show_confirm ? 'text' : 'password'}
          onChange={changeInfo}
          name="confirmPassword"
          value={info.confirmPassword}
          about={errors.confirmPassword}
          className="sign-up"
        />
        <img
          onClick={showPassword}
          className={show_confirm ? 'not-confirm' : 'eye-confirm'}
          src={show_confirm ? not_eye : eye}
          alt="not_eye"
        />
        {errors.confirmPassword && (
          <small className="confirm-password">{errors.confirmPassword}</small>
        )}
        <Button
          type="submit"
          onClick={signUp}
          disabled={
            !Object.values(errors).every((item) => item === '') ||
            !Object.values(info).every((item) => item.length > 3)
          }
        >
          Sign Up
        </Button>
      </form>
      <p>Already have an account?</p>
      <Link to="/signIn">
        <p>Sign In</p>
      </Link>
    </div>
  );
};
