/*
    Noah Interior - Site Configuration
    Version: 4.6.0
*/

const siteConfig = {
    meta: {
        framework: 'V4',
        type: 'page',
        mode: 'live',
        lang: 'ko',
        theme: 'auto'
    },
    api: {
        server: 'provider',
        redirect: './'
    },
    canvas: {
        target: '#home',
        overlay: 'dotted',
        image_type: 'cover',
        image_count: 4,
        image_slide: 6,
        image_path: './section/',
        image_format: 'webp'
    },
    buttons: [
        { name: 'Overview', icon: 'home', url: '#home' },
        { name: 'Portfolio', icon: 'style', url: '#portfolio' },
        { name: 'Location', icon: 'location_on', url: '#location' },
        { name: 'Request', icon: 'edit_note', url: './request' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // V4 Initialization
    if (window.V4) {
        window.V4.init(siteConfig).then(app => {
            console.log('Noah Interior V4 Ready');
        });
    }
});
