import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div>
      <h1 style={headingStyle}> {title}</h1>
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
