const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementById("submit");


submit.addEventListener("click", function (e) {
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    if (!isValidEmail) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!email.value.trim() || !message.value.trim()) {
        alert("Please fill in all required fields.");
        return;
    }
    const templateParams = {
        name: firstName.value.trim() + " " + lastName.value.trim(),
        email: email.value.trim(),
        message: message.value.trim()
    };
    emailjs.send('service_bh7b4ah', 'template_c08259e', templateParams)
        .then((response) => {
            alert('✅ Email sent successfully!', response.status, response.text);

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
        })
        .catch((error) => {
            alert('❌ Failed to send email:', error);
            
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
        });
});

const download = document.getElementById("download-btn")

download.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "assets/files/Aditi-Bajpai.pdf";  // Path to your file
    link.download = "Aditi-Bajpai-Resume.pdf";    // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
