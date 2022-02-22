import React from 'react';

const classes = {
  sgvcon:'inline-flex w-full justify-center bg-secondary text-white p-4 border-solid border-white border-t-2 content-center hover:bg-[#2a4b9d] hover:cursor-pointer',
  text:'px-4',
}

 function DashboardSideButton({DashboardButtonText, SvgIcon}) {
  return <div className={classes.sgvcon}>
      <SvgIcon />
      <p className={classes.text}>{DashboardButtonText}</p>
  </div>;
}
export default DashboardSideButton;