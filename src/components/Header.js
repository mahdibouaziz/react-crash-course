import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onClick, showTask }) => {
  return (
    <div className="header">
      <h1 style={headingStyle}> {title}</h1>
      <Button
        text={showTask ? "CLose" : "Add"}
        color={showTask ? "red" : "green"}
        onClick={onClick}
      />
    </div>
  );
};

// define a type for your props
Header.propTypes = {
  title: PropTypes.string,
};

//define default props if you have to expect ones
Header.defaultProps = {
  title: "Task Tracker",
};

// CSS inside React
const headingStyle = {
  color: "red",
};

export default Header;
