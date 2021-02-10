import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Label } from '../components/label';
import eye from '../styles/icons/eye.svg';
import not_eye from '../styles/icons/not_eye.svg';

export const SignIn = () => {
  const [show_pass, setShow_pass] = useState(false);

  const showPassword = () => setShow_pass((prev) => !prev);

  return (
    <div className="header flex column ai_c">
      <h1>Sign In</h1>
      <form className="container sign-in row jc_s-a ac_s-a">
        <Label htmlFor="email" className="row">
          Email
        </Label>
        <Input id="email" placeholder="example@acme.com" type="email" />
        <Label htmlFor="password" className="row">
          Password
        </Label>
        <Input id="password" type={show_pass ? 'text' : 'password'} />
        <img
          onClick={showPassword}
          className="watching"
          src={show_pass ? not_eye : eye}
          alt="eye"
        />
        <Button>Sign In</Button>
      </form>
      <p>Don’t have an account yet?</p>
      <Link to="/signUp">
        <p>Sign Up</p>
      </Link>
    </div>
  );
};
