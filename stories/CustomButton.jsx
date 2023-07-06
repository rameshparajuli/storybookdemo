import PropTypes from "prop-types";

/**
 * Primary UI CustomButton component for user interaction
 */
function CustomButton({
  label,
  backgroundColor = "red",
  size = "md",
  handleClick,
  color = "white",
}) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  if (size === "ex-lg") scale = 2;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    color,
  };
  return (
    <button onClick={handleClick} style={{ ...style, color }}>
      {label}
    </button>
  );
}

CustomButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "ex-lg"]),
  handleClick: PropTypes.func,
  color: PropTypes.string,
};

export default CustomButton;
