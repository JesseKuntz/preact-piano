import { playNote, releaseNote } from '../helpers/note';

function Key(key) {
  return (
    <img
      src="../assets/keys/white_key.gif"
      id={key}
      // onMouseDown={playNote(key)}
      // onMouseUp={releaseNote(key)}
    />
  );
}

export default Key;
