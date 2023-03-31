import css from "./ContactListItem.module.css";
import PropTypes from "prop-types";


function ContactListItem({ name, number, onDelete }) {
  return (
    <li className={css.contactItem}>
      {name}: {number}
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};