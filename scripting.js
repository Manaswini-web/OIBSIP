// Simulate a simple in-memory user store
const users = JSON.parse(localStorage.getItem('users')) || [];

// Handle registration
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users.find(user => user.username === username)) {
        alert('Username already exists');
    } else {
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful');
        window.location.href = 'login.html';
    }
});

// Handle login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'secure.html';
    } else {
        alert('Invalid username or password');
    }
});

// Handle secure page access
window.addEventListener('load', function() {
    if (document.title === 'Secure Page') {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (!loggedInUser) {
            window.location.href = 'login.html';
        }
    }
});

// Handle logout
document.getElementById('logout')?.addEventListener('click', function() {
    localStorage.removeItem('loggedInUser');
});
