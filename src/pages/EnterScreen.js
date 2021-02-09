import { Link } from 'react-router-dom';

export const EnterScreen = () => {
  return (
    <div className="enter">
      <div className="header flex column ai_c">
        <h1>Ready for a great User experience?</h1>
        <p>Bring your media to the next level!</p>
      </div>
      <div className="btn-group inline jc_c">
        <button className="btn-main">Sign Up</button>
        <Link to="/signUp">
          <div className="arrow-right flex jc_c ai_c">
            <i className="fas fa-arrow-right fa-lg"></i>
          </div>
        </Link>
      </div>
    </div>
  );
};
