document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleSingle = document.getElementById('theme-toggle-single');
    const root = document.documentElement;

    function toggleTheme() {
        if (root.getAttribute('data-theme') === 'dark') {
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            root.setAttribute('data-theme', 'dark');
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
    // Sidebar Toggle (Mobile)
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    if (sidebarToggle && sidebar && sidebarOverlay) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            sidebarOverlay.classList.toggle('active');
        });

        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
        });

        // Close sidebar when clicking a link on mobile
        const sidebarLinks = sidebar.querySelectorAll('a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                    sidebarOverlay.classList.remove('active');
                }
            });
        });
    }
});


