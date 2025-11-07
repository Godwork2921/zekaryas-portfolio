
        function toggleMenu() {
            const navbar = document.getElementById('navbar');
            navbar.classList.toggle('active');
        }

        function toggleMode() {
            const body = document.body;
            const navbar = document.getElementById('navbar');
            const sections = document.querySelectorAll('section');
            const modeToggle = document.getElementById('modeToggle');

            body.classList.toggle('dark-mode');
            navbar.classList.toggle('dark-mode');
            sections.forEach(section => section.classList.toggle('dark-mode'));

            
            if (body.classList.contains('dark-mode')) {
                modeToggle.innerHTML = '🌞'; 
            } else {
                modeToggle.innerHTML = '🌙'; 
            }
        }

       
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < 100) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').substring(1) === section.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    