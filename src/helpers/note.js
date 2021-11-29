function playNote(note) {
  const audio = new Audio(`./assets/notes/${note}.wav`);

  audio.play();

  if (note.length > 2) {
    document.getElementById(note).src = './assets/keys/black_key_pressed.gif';
  } else {
    document.getElementById(note).src = './assets/keys/white_key_pressed.gif';
  }
}

function releaseNote(note) {
  if (note.length > 2) {
    document.getElementById(note).src = './assets/keys/black_key.gif';
  } else {
    document.getElementById(note).src = './assets/keys/white_key.gif';
  }
}

export { playNote, releaseNote };
