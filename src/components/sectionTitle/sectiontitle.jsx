import PropTypes from 'prop-types';
import css from './section.module.css';

export const Section = ({ title, children }) => (
  <section>
    <p className={css.feedback_title}>{title}</p>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
