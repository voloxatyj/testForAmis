import { Link } from 'react-router-dom';
import { Button } from '../components/button';
import { Input } from '../components/input';
import {
  LabelFN,
  LabelEmail,
  LabelPassword,
  LabelConfirmPassword,
} from '../components/labels';
import eye from '../components/utils/eye.svg';

export const SignUp = () => {
  return (
    <div className="header flex column ai_c">
      <h1>Sign Up</h1>
      <form className="signUp row jc_s-a ac_s-a">
        <LabelFN className="row">
          Full Name
          <Input placeholder="John Doe" type="text" />
        </LabelFN>
        <LabelEmail className="row">
          Email
          <Input placeholder="example@acme.com" type="email" />
        </LabelEmail>
        <LabelPassword className="row">
          Password
          <Input type="password" />
          <img className="watching" src={eye} alt="eye" />
        </LabelPassword>
        <LabelConfirmPassword className="row">
          ConfirmPassword
          <Input type="password" />
          <img className="watching" src={eye} alt="eye" />
        </LabelConfirmPassword>
        <Button>Sign Up</Button>
      </form>
      <p>Already have an account?</p>
      <Link to="/signIn">
        <p>Sign In</p>
      </Link>
    </div>
  );
};
