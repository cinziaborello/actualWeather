import React from 'react';

const Today = ():JSX.Element => {
  const newDate:string = new Date().toDateString();
  return (
    <div>
      {newDate}
    </div>
  );
};

export default Today;