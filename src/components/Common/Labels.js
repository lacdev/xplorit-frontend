import PropTypes from 'prop-types'
const Labels = ({ LabelText = ' ' }) => {
  const classes = {
    wraplabels: 'm-2',
    labels:
      'bg-tagscolor text-xxs sm:text-xxs px-2 py-1 sm:mr-1 rounded-full cursor-pointer',
  }

  return (
    <div className={classes.wraplabels}>
      <label className={classes.labels}>{LabelText}</label>
    </div>
  )
}
Labels.propTypes = {
  LabelText: PropTypes.string,
}

export { Labels }
