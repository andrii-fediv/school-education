function toggleMenu() {
    document.querySelector('nav').classList.toggle('open');
}

function toggleFaq(item) {
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('active');
        el.querySelector('.toggle').textContent = '+';
    });
    if (!wasActive) {
        item.classList.add('active');
        item.querySelector('.toggle').textContent = '−';
    }
}