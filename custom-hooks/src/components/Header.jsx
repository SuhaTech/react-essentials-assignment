import { FaWallet } from "react-icons/fa";

function Header() {
  return (
    <header className="header card">
      <div className="logo">
        <FaWallet className="logo-icon" />
        <div>
          <h1>Personal Expense Tracker</h1>
          <p>Track your daily expenses with ease</p>
        </div>
      </div>
    </header>
  );
}

export default Header;