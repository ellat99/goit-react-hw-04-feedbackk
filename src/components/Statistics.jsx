import Votes from './Votes.jsx';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.statistics}>
      <Votes label="Good" value={good} />
      <Votes label="Neutral" value={neutral} />
      <Votes label="Bad" value={bad} />
      <Votes label="Total" value={total} />
      <Votes label="Positive feedback" value={positivePercentage + '%'} />
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
