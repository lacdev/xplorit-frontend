import React from 'react';

const classes = {
  bodycon:'text-center',
  text:'text-white text-xl font-semibold',
}
 function ProfileUsername({username}) {
  return <div className={classes.bodycon}>
      <p className={classes.text}>{username}</p>
  </div>
}
export default ProfileUsername;