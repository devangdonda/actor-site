function sendEmail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value
    }

    emailjs.send("service_xto1di7", "template_ewqot38", params).then(alert("Email Sent!!"))
}

const audio = document.getElementById('backgroundMusic');
    const playPauseButton = document.getElementById('playPauseButton');

    // Set the initial volume to a lower level
    audio.volume = 0.2;

    // Add an event listener to the button to control playback
    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    });
  
