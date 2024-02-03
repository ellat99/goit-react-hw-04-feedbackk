import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ label, callback }) {
  return (
    <button className={styles.btn} onClick={callback}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Button;
