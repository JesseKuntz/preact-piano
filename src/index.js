import { useState, useEffect } from 'preact/hooks';

import { WHITE_KEYS, BLACK_KEYS, KEYS_TO_NOTES } from './config';
import { playNote, releaseNote } from './helpers/note';

import Key from './components/key';

import './style.css';

export default function App() {
  useEffect(() => {
    document.addEventListener('keypress', event => {
      const note = KEYS_TO_NOTES[event.key];
      if (note !== undefined) {
        playNote(note);
      } else {
        console.log(`'${event.key}' not mapped to a note.`);
      }
    });

    document.addEventListener('keyup', event => {
      const note = KEYS_TO_NOTES[event.key];
      if (note !== undefined) {
        releaseNote(note);
      } else {
        console.log(`'${event.key}' not mapped to a note.`);
      }
    });
  });

  return (
    <div>
      <h1>Preact Piano</h1>

      <p class="mobile-message">
        It's really meant for desktop, so that you can utilize the keyboard. No
        use in trying on mobile 😔
      </p>

      <div class="piano">
        {WHITE_KEYS.map(key => (
          <img
            src="./assets/keys/white_key.gif"
            id={key}
            // onMouseDown={playNote(key)}
            // onMouseUp={releaseNote(key)}
          />
        ))}

        {/* <div class="black-keys">
          {BLACK_KEYS.map(key => (
            <img
              src="./assets/keys/black_key.gif"
              id={key}
              onMouseDown={playNote(key)}
              onMouseUp={releaseNote(key)}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
