
const Labels =() =>{
const classes={
    wraplabels:'flex flex-wrap',
    labels:'bg-tagscolor text-sm px-2 p-1 mr-2 my-2 rounded-full'
} 
 
    return (
        <div className={classes.wraplabels} >
     <label className={classes.labels}></label>
    </div>
    );
} 

export {Labels}