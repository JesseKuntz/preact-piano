function playNote(key) {
  console.log(key);
  const audio = new Audio(`./assets/notes/${key}.wav`);
  audio.play();
  if (key.length > 2) {
    document.getElementById(key).src = './assets/keys/black_key_pressed.gif';
  } else {
    document.getElementById(key).src = './assets/keys/white_key_pressed.gif';
  }
}

function releaseNote(key) {
  if (key.length > 2) {
    document.getElementById(key).src = './assets/keys/black_key.gif';
  } else {
    document.getElementById(key).src = './assets/keys/white_key.gif';
  }
}

export { playNote, releaseNote };
