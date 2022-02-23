
const classes = {
    container: 'flex flex-col max-w-full pt-5 mt-4',
    containerAnimate: 'w-full px-3 animate-pulse drop-shadow-testimonialShadow',
    backgroundContainer: 'rounded-lg w-full p-2 mb-8 shadow-testimonialShadow bg-white',
    imageContainer: 'flex flex-col w-full h-full justify-center',
    imageBackground:
      'w-full h-48 bg-gradient-to-r from-tagscolor to-secondary rounded-lg',
    infoContainer: 'flex',
    avatarParentContainer: 'flex items-center gap-2 mt-3',
    avatarContainer: 'mr-3',
    backgroundGradient: 'bg-gradient-to-r from-tagscolor to-secondary',
    tags: 'w-12 h-4 rounded-full mb-2',
    comments: 'w-full h-6 rounded mb-2',
    image: '',
  }

function DashboardLoaderCards() {
    
      return (
       
          <div className={classes.containerAnimate}>
            <div className={classes.backgroundContainer}>
              {/* //Starts img info container */}
              <div className={classes.infoContainer}>
                <div className={classes.avatarParentContainer}>
                  <div className={classes.avatarContainer}>
                    {/* //Img */}
                    <div
                      className={`${classes.backgroundGradient} w-56 h-44`}
                    ></div>
                  </div>
                </div>
                <div className= 'flex flex-col  flex-wrap'>
                  <div className="flex mt-2">
                    <div
                      className={`${classes.backgroundGradient} ${classes.comments}`}
                    ></div>
                  </div>
                   {/* //Tags container starts */}
                   <div className="flex flex-wrap gap-2 mt-3">
                      <div
                       className={`${classes.backgroundGradient} ${classes.tags}`}
                       ></div>
                       <div
                         className={`${classes.backgroundGradient} ${classes.tags}`}
                      ></div>
                     <div
                       className={`${classes.backgroundGradient} ${classes.tags}`}
                     ></div>
                      <div
                       className={`${classes.backgroundGradient} ${classes.tags}`}
                     ></div>
                  </div>
                </div> 
              </div>
            </div>
            <div className={classes.backgroundContainer}>
              {/* //Starts img info container */}
              <div className={classes.infoContainer}>
                <div className={classes.avatarParentContainer}>
                  <div className={classes.avatarContainer}>
                    {/* //Img */}
                    <div
                      className={`${classes.backgroundGradient} w-56 h-44`}
                    ></div>
                  </div>
                </div>
                <div className= 'flex flex-col  flex-wrap'>
                  <div className="flex mt-2">
                    <div
                      className={`${classes.backgroundGradient} ${classes.comments}`}
                    ></div>
                  </div>
                   {/* //Tags container starts */}
                   <div className="flex flex-wrap gap-2 mt-3">
                      <div
                       className={`${classes.backgroundGradient} ${classes.tags}`}
                       ></div>
                       <div
                         className={`${classes.backgroundGradient} ${classes.tags}`}
                      ></div>
                     <div
                       className={`${classes.backgroundGradient} ${classes.tags}`}
                     ></div>
                      <div
                       className={`${classes.backgroundGradient} ${classes.tags}`}
                     ></div>
                  </div>
                </div> 
              </div>
            </div>
            <div className={classes.backgroundContainer}>
              {/* //Starts img info container */}
              <div className={classes.infoContainer}>
                <div className={classes.avatarParentContainer}>
                  <div className={classes.avatarContainer}>
                    {/* //Img */}
                    <div
                      className={`${classes.backgroundGradient} w-56 h-44`}
                    ></div>
                  </div>
                </div>
                <div className= 'flex flex-col  flex-wrap'>
                  <div className="flex mt-2">
                    <div
                      className={`${classes.backgroundGradient} ${classes.comments}`}
                    ></div>
                  </div>
                   {/* //Tags container starts */}
                   <div className="flex flex-wrap gap-2 mt-3">
                      <div
                       className={`${classes.backgroundGradient} ${classes.tags}`}
                       ></div>
                       <div
                         className={`${classes.backgroundGradient} ${classes.tags}`}
                      ></div>
                     <div
                       className={`${classes.backgroundGradient} ${classes.tags}`}
                     ></div>
                      <div
                       className={`${classes.backgroundGradient} ${classes.tags}`}
                     ></div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        
      )
}

export default DashboardLoaderCards