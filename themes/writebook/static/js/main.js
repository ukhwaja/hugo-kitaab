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
    const container = document.getElementById('chapter-container');

    // Check saved view
    const savedView = localStorage.getItem('view');
    if (savedView && container) {
        container.setAttribute('data-view', savedView); // Apply to container for CSS targeting
        // But wait, my CSS logic uses [data-view] on the container or parent? 
        // Let's check style.css: [data-view="grid"] .chapter-list
        // So I should put it on the container or a parent wrapper.
        // Actually, looking at style.css, I wrote selectors like: [data-view="grid"] .chapter-list
        // This implies the attribute should be on a parent of .chapter-list or .chapter-list itself?
        // Let's put it on the main wrapper or body for simplicity, or the container itself if the CSS matches.
        // In style.css: [data-view="grid"] is the selector. If I put it on #chapter-container which HAS class .chapter-list,
        // then the selector [data-view="grid"].chapter-list works.
        // But my CSS has [data-view="grid"] .chapter-list (descendant). 
        // Let's adjust JS to put it on the main content panel or just the container and fix CSS if needed.
        // Actually simplest is to toggle a class or attribute on the container.
        // Let's use the attribute on the container and ensure CSS matches.
        // CSS: [data-view="grid"] .chapter-list  --> This expects data-view on a PARENT.
        // Let's put data-view on the main.content-panel.
        document.querySelector('.content-panel').setAttribute('data-view', savedView);
    }

    if (viewToggle) {
        viewToggle.addEventListener('click', () => {
            const panel = document.querySelector('.content-panel');
            const currentView = panel.getAttribute('data-view');
            const newView = currentView === 'grid' ? 'list' : 'grid';

            panel.setAttribute('data-view', newView);
            localStorage.setItem('view', newView);
        });
    }
});
