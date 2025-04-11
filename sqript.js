
    function showSection(section) {
        
        document.querySelectorAll('.section').forEach((el) => {
            el.style.display = 'none';
        });

        
        document.getElementById(section).style.display = 'block';

        
        const genresSection = document.getElementById('genres');
        if (genresSection) {
            genresSection.style.display = section === 'home' ? 'block' : 'none';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        showSection('home');
    });

