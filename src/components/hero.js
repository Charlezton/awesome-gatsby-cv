import React from 'react';

export default function Hero(props) {
  return (
    <div style={styles.image}>
      <div style={styles.textContentWrapper}>
        <h1 style={styles.title}>{props.title}</h1>
        <p style={styles.description}>{props.description}</p>
        {/* <button>{props.buttonText}</button> */}
      </div>
    </div>
  );
}

const styles = {
  image: {
    height: '100vh',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1500417148159-68083bd7333a)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  /* Place text in the middle of the image */
  textContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'NineteenNinetySeven',
    color: '#E5E9F0',
    height: '100%',
  },
  title: {
    fontSize: '10vh',
  },
  description: {
    fontSize: '3vh',
  },
};
