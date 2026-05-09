const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const searchInput = document.querySelector('.search-box input');

// ✅ Buksan/isara ang menu
menuBtn.addEventListener('click', () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
        // ✅ Gawing mas buhay ang paglabas
        menu.style.opacity = '0';
        setTimeout(() => { menu.style.opacity = '1'; }, 10);
    }
});

// ✅ Kapag nag-type ka, may mensahe o gawain
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        alert(`Hinanap mo: ${searchInput.value}`);
        // Dito mo pwedeng ilagay ang totoong paghahanap balang araw!
    }
});

// ✅ Magandang epekto sa pagbukas ng pahina
window.onload = () => {
    document.body.style.opacity = '0';
    setTimeout(() => { document.body.style.opacity = '1'; }, 100);
};