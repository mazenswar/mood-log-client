import React, { useRef, useEffect } from 'react';

export default function Error({ message, show }) {
  const errorRef = useRef();

  useEffect(() => {
    show
      ? (errorRef.current.style.top = '0')
      : (errorRef.current.style.top = '-30vh');
  }, [show]);

  return (
    <div ref={errorRef} style={hiddenStyle}>
      <p>{message}</p>
    </div>
  );
}

const hiddenStyle = {
  textAlign: 'center',
  height: '15vh',
  position: 'fixed',
  top: '-30vh',
  left: '45%',
  zIndex: '100',
  backgroundColor: 'red',
  color: 'white',
  overflow: 'hidden',
  transition: '0.7s',
  padding: '20px',
  borderRadius: '0  0 50px 50px'
};
