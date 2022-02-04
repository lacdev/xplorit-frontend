import PropTypes from 'prop-types'
const Labels =({LabelText=' '}) =>{
const classes={
    wraplabels:'',
    labels:'bg-tagscolor text-sm px-2 p-1 mr-4 my-2 rounded-full'
} 
 
    return (
        <div className={classes.wraplabels} >
     <label className={classes.labels}>{LabelText}</label>
    </div>
    );
} 
Labels.propTypes= {
    LabelText: PropTypes.string,
  }

export {Labels}