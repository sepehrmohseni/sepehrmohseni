import * as React from 'react';

import ReactTypingEffect, { ReactTypingEffectProps } from 'react-typing-effect';
import { grey, indigo, deepOrange, cyan } from '@mui/material/colors';

interface TypingEffectProps extends ReactTypingEffectProps {}
// style
import styles from '../../styles/TypingEffect.module.css';

const TypingEffect: React.FunctionComponent<TypingEffectProps> = (props) => {
  const {
    eraseDelay = 2000,
    eraseSpeed = 100,
    speed = 200,
    typingDelay = 150,
    ...otherProps
  } = props;

  return (
    <ReactTypingEffect
      className={styles.text}
      eraseDelay={eraseDelay}
      eraseSpeed={eraseSpeed}
      speed={speed}
      typingDelay={typingDelay}
      {...otherProps}
      displayTextRenderer={(text, i) => {
        return (
          <span>
            {text.split('').map((char, i) => {
              const key = `${i}`;
              return (
                <span
                  key={key}
                  style={
                    i % 2 === 0
                      ? {
                          color: indigo[400],
                          fontWeight: 'bold',
                        }
                      : { color: cyan[500], fontWeight: 'bold' }
                  }
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      }}
    />
  );
};

export default TypingEffect;
