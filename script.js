const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
});

// Set the initial mode based on the user's preference or default to light mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    checkbox.checked = true;
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.add('light-mode');
}
