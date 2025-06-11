document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            // Show selected tab content
            document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
        });
    });

    // Theme switching
    const themeSelect = document.querySelector('.select');
    themeSelect.addEventListener('change', function() {
        const selectedTheme = this.value;
        updateTheme(selectedTheme);
    });

    // UI Size slider
    const sizeSlider = document.querySelector('.slider');
    sizeSlider.addEventListener('input', function() {
        const size = this.value;
        document.documentElement.style.setProperty('--width', `${size}px`);
    });

    // Update theme function
    function updateTheme(theme) {
        const themes = {
            'dark': {
                '--primary-color': '#651FFF',
                '--secondary-color': '#404040',
                '--background-color': '#202225',
                '--text-color': '#FFFFFF',
                '--border-color': '#303235',
                '--hover-color': '#36393F'
            },
            'darker': {
                '--primary-color': '#8865F2',
                '--secondary-color': '#323232',
                '--background-color': '#252525',
                '--text-color': '#F3F3F3',
                '--border-color': '#404040',
                '--hover-color': '#454545'
            },
            'purple': {
                '--primary-color': '#9400D3',
                '--secondary-color': '#303030',
                '--background-color': '#272530',
                '--text-color': '#F0F0F0',
                '--border-color': '#403040',
                '--hover-color': '#453545'
            }
        };

        const themeVars = themes[theme];
        if (themeVars) {
            Object.entries(themeVars).forEach(([property, value]) => {
                document.documentElement.style.setProperty(property, value);
            });
        }
    }
});
