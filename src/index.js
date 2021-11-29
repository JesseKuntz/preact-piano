import { useEffect } from 'preact/hooks';

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
      }
    });

    document.addEventListener('keyup', event => {
      const note = KEYS_TO_NOTES[event.key];

      if (note !== undefined) {
        releaseNote(note);
      }
    });
  }, []);

  return (
    <div>
      <h1>Preact Piano</h1>

      <p class="mobile-message">
        It's really meant for desktop, so that you can utilize the keyboard. No
        use in trying on mobile 😔
      </p>

      <div class="piano">
        {WHITE_KEYS.map(key => (
          <Key key={key} note={key} color="white" />
        ))}

        <div class="black-keys">
          {BLACK_KEYS.map(key => (
            <Key key={key} note={key} color="black" />
          ))}
        </div>
      </div>
    </div>
  );
}
