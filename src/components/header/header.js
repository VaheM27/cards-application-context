import { useContext } from "react";
import MyContext from "../../Context";
import "../header/header.css";
const Header = () => {
  const { createCard, sortCard } = useContext(MyContext);

  return (
    <div className="header">
      <button className="button" onClick={createCard}>
        Add Block
      </button>
      <button className="button" onClick={sortCard}>
        Sort Block
      </button>
    </div>
  );
};
export default Header;
