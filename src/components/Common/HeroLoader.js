import React from 'react'

const classes = {
    backgroundContainer: 'flex flex-col rounded-lg w-full p-2 animate-pulse shadow bg-white',
    imageContainer: 'flex flex-col w-full h-screen justify-center',
    imageBackground:'w-full h-[700px] bg-gradient-to-r from-tagscolor to-secondary rounded-lg',
    infoContainer: 'flex flex-col',
    titleParentContainer: 'flex items-center gap-2 mt-3',
    titleContainer:'w-full pl-1 flex justify-center',
    title:'w-1/4 h-3 rounded-lg mb-2 py-3',
    backgroundGradient: 'bg-gradient-to-r from-tagscolor to-secondary',
    cardContainer:'flex flex-col mt-2 ml-4 h-auto items-center',
    card:'w-2/4 h-loaderCard max-w-sm rounded-lg mb-2',
    buttonsContainer:'flex gap-2 mt-3 ml-4 justify-center',
    btn: 'w-24 h-6 rounded-full px-16 py-4 mb-2',
    image: '',
  }
function HeroLoader() {
  return (
    <div className={classes.backgroundContainer}>
      {/* //Starts image  */}
      <div className={classes.imageContainer}>
        <div className={classes.imageBackground}>
        </div>
      </div>
      {/* //Ends image  */}
      {/* //End cards container */}
    </div>
  )
}

export default HeroLoader