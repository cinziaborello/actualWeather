import React from 'react';

const Today: React.FC = () => {
  const newDate:string = new Date().toDateString();
  return (
    <div>
      {newDate}
    </div>
  );
};

export default Today;