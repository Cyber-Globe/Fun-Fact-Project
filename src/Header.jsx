import logo from "./assets/react.svg";
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="my logo" />
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
