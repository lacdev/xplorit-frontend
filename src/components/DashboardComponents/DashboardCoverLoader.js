import React from 'react'

const classes = {
    container: 'flex flex-col max-w-full pt-5 mt-4',
    containerAnimate: 'flex flex-col w-full px-3 animate-pulse',
    backgroundContainer: 'flex flex-col rounded-lg w-full p-2 drop-shadow-testimonialShadow bg-white',
    imageContainer: 'flex flex-col w-full h-full justify-center',
    imageBackground:
      'w-full h-48 bg-gradient-to-r from-tagscolor to-secondary rounded-lg',
    infoContainer: 'flex flex-col',
    avatarParentContainer: 'flex flex-col gap-2 mt-3',
    avatarContainer: 'w-1/6 ml-3',
    backgroundGradient: 'bg-gradient-to-r from-tagscolor to-secondary',
    tags: 'w-12 h-4 rounded mb-2',
    comments: 'w-24 h-6 rounded mb-2',
    image: '',
  }
function DashboardCoverLoader() {
  return (
    <div className={classes.container}>
     <div className={classes.containerAnimate}>
       <div className={classes.backgroundContainer}>
         {/* //Starts image  */}
         <div className={classes.imageContainer}>
           <div className={classes.imageBackground}></div>
         </div>
        {/* //Ends image  */}
          </div>
        </div>
     </div>
  )
}

export default DashboardCoverLoader;