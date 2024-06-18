function sendEmail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value
    }

    emailjs.send("service_xto1di7", "template_ewqot38", params).then(alert("Email Sent!!"))
}

