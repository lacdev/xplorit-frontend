import React from 'react';

function Award({width, height}) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34 30.4899V44.234C34 44.4109 33.9531 44.5847 33.8641 44.7375C33.775 44.8904 33.647 45.0169 33.493 45.1042C33.3391 45.1914 33.1648 45.2362 32.9879 45.2341C32.8109 45.2319 32.6378 45.1829 32.486 45.0919L24 40L15.514 45.0919C15.3621 45.183 15.1887 45.232 15.0116 45.2341C14.8345 45.2362 14.6601 45.1911 14.5061 45.1037C14.3521 45.0162 14.2241 44.8894 14.1352 44.7362C14.0463 44.5831 13.9996 44.409 14 44.2319V30.4919C11.4123 28.4201 9.53198 25.5957 8.61892 22.409C7.70585 19.2223 7.80511 15.8307 8.90298 12.7029C10.0009 9.57506 12.0431 6.86545 14.7476 4.94851C17.452 3.03157 20.6851 2.00195 24 2.00195C27.3149 2.00195 30.548 3.03157 33.2524 4.94851C35.9569 6.86545 37.9991 9.57506 39.097 12.7029C40.1949 15.8307 40.2941 19.2223 39.3811 22.409C38.468 25.5957 36.5877 28.4201 34 30.4919V30.4899ZM24 29.9999C27.1826 29.9999 30.2348 28.7357 32.4853 26.4852C34.7357 24.2348 36 21.1825 36 17.9999C36 14.8174 34.7357 11.7651 32.4853 9.51467C30.2348 7.26423 27.1826 5.99995 24 5.99995C20.8174 5.99995 17.7652 7.26423 15.5147 9.51467C13.2643 11.7651 12 14.8174 12 17.9999C12 21.1825 13.2643 24.2348 15.5147 26.4852C17.7652 28.7357 20.8174 29.9999 24 29.9999ZM24 25.9999C21.8783 25.9999 19.8434 25.1571 18.3431 23.6568C16.8429 22.1565 16 20.1217 16 17.9999C16 15.8782 16.8429 13.8434 18.3431 12.3431C19.8434 10.8428 21.8783 9.99995 24 9.99995C26.1217 9.99995 28.1566 10.8428 29.6569 12.3431C31.1571 13.8434 32 15.8782 32 17.9999C32 20.1217 31.1571 22.1565 29.6569 23.6568C28.1566 25.1571 26.1217 25.9999 24 25.9999Z"
          fill="#FFD233"
        />
      </svg>
    </>
  );
}

export default Award;
