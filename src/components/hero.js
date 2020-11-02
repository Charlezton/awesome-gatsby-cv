import React from 'react';
import tech from '../images/tech.jpg';

export default function Hero(props) {
  return (
    <div style={styles.hero}>
      <div style={styles.textContentWrapper}>
        <h1 style={styles.title}>{props.title}</h1>
        <p style={styles.description}>{props.description}</p>
        {/* <button>{props.buttonText}</button> */}
      </div>
      <img style={styles.image} src={tech} alt="keyboard" />
    </div>
  );
}

const styles = {
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'NineteenNinetySeven',
    color: '#E5E9F0',
    position: 'absolute',
  },
  title: {
    fontSize: '5em',
  },
  description: {
    fontSize: '2em',
  },
  image: {
    height: '100vh',
    width: '100%',
  },
};
