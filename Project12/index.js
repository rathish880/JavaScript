
const speech=window.speechSynthesis;

const form =document.querySelector('form');
const textInput=document.querySelector('#text-input');
const rateValue=document.querySelector('#rate-value');
const rate=document.querySelector('#rate');
const pitch=document.querySelector('#pitch');
const pitchValue=document.querySelector('#pitch-value');
const voiceSelect=document.querySelector('#voice-select');
const body = document.querySelector('body');

var voices=[];

const voiceOnLoad=()=>{
   //voices= speech.getVoices();
   let i=1;
  voices=speech.getVoices();
  voices.forEach((voice)=>{
    //console.log(voice);
    
    let option=document.createElement('option');
    option.textContent=`${voice.name} + (${voice.lang})`;
    option.setAttribute("data-name",voice.name);
    option.setAttribute("data-lang",voice.lang);
    if(i==2){

        option.setAttribute('selected','selected');
    }
    i++;
    voiceSelect.appendChild(option);
    
  })
}
voiceOnLoad();
if(speech.onvoiceschanged!==undefined){
    speech.onvoiceschanged=voiceOnLoad;
}
// Speak
const speak = () => {
  // Check if speaking
  if (speech.speaking) {
    console.error('Already speaking...');
    return;
  }
  if (textInput.value !== '') {
    // Add background animation
    body.style.background = '#141414 url(https://github.com/bradtraversy/type-n-speak/blob/master/dist/img/wave.gif?raw=true)';
    body.style.backgroundRepeat = 'repeat-x';
    body.style.backgroundSize = '100% 100%';

    // Get speak text
    const speakText = new SpeechSynthesisUtterance(textInput.value);

    // Speak end
    speakText.onend = e => {
      console.log('Done speaking...');
      body.style.background = '#141414';
    };

    // Speak error
    speakText.onerror = e => {
      console.error('Something went wrong');
    };

    // Selected voice
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute(
      'data-name'
    );

    // Loop through voices
    voices.forEach(voice => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });

    // Set pitch and rate
    speakText.rate = rate.value;
    speakText.pitch = pitch.value;
    // Speak
    speech.speak(speakText);
  }
};

// EVENT LISTENERS

// Text form submit
form.addEventListener('submit', e => {
  e.preventDefault();
  speak();
  textInput.blur();
});

// Rate value change
rate.addEventListener('change', e => (rateValue.textContent = rate.value));

// Pitch value change
pitch.addEventListener('change', e => (pitchValue.textContent = pitch.value));

// Voice select change
voiceSelect.addEventListener('change', e => speak());