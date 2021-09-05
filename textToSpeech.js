let speech = new SpeechSynthesisUtterance;
speech.lang = 'en';

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    let voiceSelect = document.querySelector("#voices");
    voices.forEach((voice, i) => ( voiceSelect.options[i] = new Option(voice.name, i)));
};

document.querySelector("#rate").addEventListener("input", () => {
    // Get rate value from the input
    const rate = document.querySelector("#rate").value;

    //setting the rate prperty of the speechSynthesisUtterance
    speech.rate = rate;

    // updating the rate label
    document.querySelector("#rate-label").innerHTML = rate;
});

document.querySelector("#volume").addEventListener("input", () => {
    // Get volume value from the input
    const volume = document.querySelector("#volume").value;

    // Setting the volume property of the speechSynthesisUtterance
    speech.volume = volume;

    //updating the volume label
    document.querySelector("#volume-label").innerHTML = volume;
});

document.querySelector("#pitch").addEventListener("input", () => {
    // Get the pitch value from input
    const pitch = document.querySelector("#pitch").value;

    // Setting the pitch property of the speechSynthesisUtterance
    speech.pitch = pitch;

    // Updating the pitch label
    document.querySelector("#pitch-label").innerHTML = pitch;
});

document.querySelector("#voices").addEventListener("change", () => {
    // getting the voice property of the speechSynthesisUtterance from array of voices
    speech.voice = voices[document.querySelector("#voices").value];
});


// Click the start button to play the speech
document.querySelector("#start").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

document.querySelector("#pause").addEventListener("click", () => {
    window.speechSynthesis.pause();

});

document.querySelector("#resume").addEventListener("click", () => {
    window.speechSynthesis.resume();
});

document.querySelector("#cancel").addEventListener("click", () => {
    window.speechSynthesis.cancel();
    document.querySelector("textarea").value = "";
});
