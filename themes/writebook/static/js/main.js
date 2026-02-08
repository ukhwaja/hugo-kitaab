document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleSingle = document.getElementById('theme-toggle-single');
    const body = document.body;

    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.setAttribute('data-theme', 'dark');
    }

    function toggleTheme() {
        if (body.getAttribute('data-theme') === 'dark') {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (themeToggleSingle) themeToggleSingle.addEventListener('click', toggleTheme);


    // View Toggle (List vs Grid)
    const viewToggle = document.getElementById('view-toggle');
    const panel = document.querySelector('.content-panel');

    function initView() {
        if (panel) {
            const savedView = localStorage.getItem('view') || 'grid';
            panel.setAttribute('data-view', savedView);
        }
    }

    initView();
    window.addEventListener('pageshow', initView);

    if (viewToggle && panel) {
        viewToggle.addEventListener('click', () => {
            const currentView = panel.getAttribute('data-view');
            const newView = currentView === 'grid' ? 'list' : 'grid';
            panel.setAttribute('data-view', newView);
            localStorage.setItem('view', newView);
        });
    }
});


