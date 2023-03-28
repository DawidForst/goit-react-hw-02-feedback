import PropTypes from "prop-types";

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Section(props) {
  const { title, children } = props;

  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
