import css from "./Filter.module.css";
import PropTypes from "prop-types";

function Filter({ value, onChange }) {
  return (
    <label className={css.filter}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};



export default Filter;
