import { playNote, releaseNote } from '../helpers/note';

function Key({ note, color }) {
  return (
    <img
      src={`../assets/keys/${color}_key.gif`}
      id={note}
      onMouseDown={() => playNote(note)}
      onMouseUp={() => releaseNote(note)}
    />
  );
}

export default Key;
