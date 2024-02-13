const answers = ["No", "wawa yakin?", "beneran yakin?", "ga pilih yes aja?", "pencet yes dong please", "ihh pencet yes", "klo wawa ga pencet yes, nanda sedih loh", "sedih banget banget", "sedih banget banget banget banget", "oke, nanda berhenti nanya ini deh", "bercanda wlee, PENCET YES DONG!!!", "nnti nanda sedih banget banget banget banget loh", "dahlah sakit ati nanda :("];

const image = document.getElementById('gif');
const heading = document.getElementById('headline');
const YES = document.getElementById('yes');
const NO = document.getElementById('no');
const buttons = document.getElementsByClassName('button-container')[0].classList;
console.log(buttons);

const w_factor = 4;
const h_factor = 3;
const audio = new Audio("./static/meme.mp3");

let counter = 1;

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}

function Answer(answer) {
  const style = window.getComputedStyle(YES);
  let width = style.getPropertyValue("width");
  let height = style.getPropertyValue("height");

  width = parseInt(width.replace('px', ''));
  height = parseInt(height.replace('px', ''));

  if (counter > 12) {
    counter = 0;
  }

  if (answer) {
    image.src = './static/bearkiss.gif';
    buttons.add('hidden');
    heading.innerHTML = "timakacii bnyk cayangku yang cantik bangettttt!!!!!!. Happy valentine's day untuk wawa yang manis, imut, dan cantik. Maaf ya gabisa beliin kamu coklat";
  }
  else {
    playAudio();
    width += w_factor;
    height += h_factor;
    YES.style.width = width + "px";
    YES.style.height = height + "px";
    NO.innerHTML = answers[counter];
    counter += 1;
  }
}