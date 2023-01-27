import logoImage from "/public/GoodFood.png";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="Logo image" src={logoImage} />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
