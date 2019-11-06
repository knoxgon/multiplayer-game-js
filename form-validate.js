/**
 * Form Validator
 * 
 * Upon entering the name, it will be applied to playable character
 * Entering empty will pop error message
 */

const form = document.forms.playerForm;
const error = document.getElementById('error-message');

form.onsubmit = submit;

function submit(e) {
  const playerName = form.playerName.value;
  //Check whether the input is valid (No advanced check)
  if((playerName == null || playerName == "")) {
    error.removeAttribute('hidden');
    return false;
  }

  document.getElementById("myCanvas").style.visibility = "visible";

  let game = document.createElement('script');
  game.src = 'script.js';
  document.body.appendChild(game);

  form.setAttribute('hidden', '');
  e.preventDefault();
}
