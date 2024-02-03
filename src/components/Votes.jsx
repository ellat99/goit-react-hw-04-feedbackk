import PropTypes from 'prop-types';
import styles from './Votes.module.css';

function Votes({ label, value }) {
  return (
    <p className={styles.votes}>
      {label}: {value}
      {label === 'Positive feedback' && typeof value === 'number' ? '%' : ''}
    </p>
  );
}

Votes.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Votes;
