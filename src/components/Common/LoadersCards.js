import React from 'react'

const classes = {
    backgroundContainer: 'flex flex-col rounded-lg w-full p-2 animate-pulse shadow bg-white',
    backgroundGradient: 'bg-gradient-to-r from-tagscolor to-secondary',
    infoContainer: 'flex flex-col',
    cardContainer:'flex flex-col mt-2 ml-4 h-auto items-center',
    card:'w-2/4 h-loaderCard max-w-sm rounded-lg mb-2',
}
function LoadersCards() {
  return (
    <div className={classes.backgroundContainer}>
      
      {/* //Starts cards container */}
      <div className={classes.infoContainer}>
        {/* //card container starts */}
        <div className={classes.cardContainer}>
          <div
            className={`${classes.backgroundGradient} ${classes.card}`}
          ></div>
        </div>
        {/* //card container end */}
      </div>
      {/* //End cards container */}
    </div>
  )
}

export default LoadersCards