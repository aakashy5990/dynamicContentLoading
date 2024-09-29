class Navbar {
    constructor() {
        this.render();
    }

    render() {
        document.getElementById('navbar').innerHTML = `
            <nav class="navbar">
                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/contact/sub/contact.html">Contact</a></li>
                </ul>
            </nav>
        `;
    }
}

class Footer {
    constructor() {
        this.render();
    }

    render() {
        document.getElementById('footer').innerHTML = `
            <footer class="footer">
                <p>&copy; 2024 Your Company</p>
            </footer>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new Navbar();
    new Footer();
});
