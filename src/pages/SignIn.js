import { Link } from 'react-router-dom';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { LabelEmail, LabelPassword } from '../components/labels';
import eye from '../components/utils/eye.svg';

export const SignIn = () => {
  return (
    <div className="header flex column ai_c">
      <h1>Sign In</h1>
      <form className="signIn row jc_s-a ac_s-a">
        <LabelEmail className="row">
          Email
          <Input placeholder="example@acme.com" type="email" />
        </LabelEmail>
        <LabelPassword className="row">
          Password
          <Input type="password" />
          <img className="watching" src={eye} alt="eye" />
        </LabelPassword>
        <Button>Sign In</Button>
      </form>
      <p>Don’t have an account yet?</p>
      <Link to="/signUp">
        <p>Sign Up</p>
      </Link>
    </div>
  );
};
