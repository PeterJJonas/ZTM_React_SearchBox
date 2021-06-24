import React from 'react';

const StayPut = (props) => {
  return (
    <div style={{
      position: 'sticky',
      top: '0',
      zIndex: '1',
      backgroundColor: 'rgba(0, 166, 204, 0.8)'
    }}>
    {props.children}
    </div>
  )
}

export default StayPut;
