let clickCount = 0;

document.getElementById('whatsappButton').addEventListener('click', function() {
    clickCount++;
    document.getElementById('clickCount').innerText = `Click count: ${clickCount}/5`;

    if (clickCount === 5) {
        document.getElementById('submitButton').disabled = false;
        alert("Sharing complete. Please continue.");
    }

    const message = "Hey Buddy, Join Tech For Girls Community";
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (clickCount < 5) {
        alert("Please complete the sharing before submitting.");
        return;
    }

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const college = document.getElementById('college').value;
    const screenshot = document.getElementById('screenshot').files[0];

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('college', college);
    formData.append('screenshot', screenshot);

    fetch('https://script.google.com/macros/s/AKfycbxrH6gbvr_Rg-fRPlErLn8vFNF0BPls6GcUhjvpSt5M-SMl2DmI5oprU5Zo0Gkod21U/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('submissionMessage').innerText = "🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!";
        document.getElementById('registrationForm').reset();
        document.getElementById('registrationForm').querySelectorAll('input, button').forEach(input => input.disabled = true);
        localStorage.setItem('submitted', 'true');
    })
    .catch(error => console.error('Error:', error));
});

// Disable form if already submitted
if (localStorage.getItem('submitted')) {
    document.getElementById('registrationForm').querySelectorAll('input, button').forEach(input => input.disabled = true);
}
