import React from 'react'
const classes = {
    container: 'flex flex-col min-w-dashloaderside max-w-md pt-5 mt-4',
    containerAnimate: 'flex flex-col w-full px-3 animate-pulse',
    backgroundContainer: 'flex flex-col rounded-lg w-full p-2 drop-shadow-testimonialShadow bg-white',
    imageContainer: 'flex flex-col w-full h-full justify-center',
    imageBackground:
      'w-full h-48 bg-gradient-to-r from-tagscolor to-secondary rounded-lg',
    infoContainer: 'flex flex-col',
    avatarParentContainer: 'flex gap-2 mt-3',
    avatarContainer: 'w-1/6 ml-3',
    backgroundGradient: 'bg-gradient-to-r from-tagscolor to-secondary',
    tags: 'w-12 h-4 rounded mb-2',
    comments: 'w-24 h-6 rounded mb-2',
    image: '',
  }
function DashboardSideLoader() {
  return (
    <div className={classes.container}>
     <div className={classes.containerAnimate}>
      <div className={classes.backgroundContainer}>
        {/* //Starts avatar info container */}
        <div className={classes.infoContainer}>
          <div className={classes.avatarParentContainer}>
            <div className={classes.avatarContainer}>
              {/* //Avatar image */}
              <div
                className={`${classes.backgroundGradient} rounded-full w-16 h-16`}
              ></div>
            </div>
          </div>
          {/* //title container starts */}
          <div className="flex flex-col mt-8">
            <div
              className={`${classes.backgroundGradient} w-80 h-6  rounded mb-2`}
            ></div>
            <div
              className={`${classes.backgroundGradient} w-80 h-6 rounded mb-2`}
            ></div>
            <div
              className={`${classes.backgroundGradient} w-80 h-6  rounded mb-2`}
            ></div>
            <div
              className={`${classes.backgroundGradient} w-80 h-6 rounded mb-2`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DashboardSideLoader