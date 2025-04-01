function handleSubmit(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    document.getElementById('contactForm').reset();

    alert('Thank you '+ name + '! for your message, We will get back to you soon.');
}


