const siteConfig = {
    meta: {
        framework: 'V4',
        type: 'page',
        mode: 'live',
        lang: 'ko'
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
    api: {
        server: 'damso',
        turnstile: '0x4AAAAAACJQlCjpqGMqegcx'
    },
    buttons: [
        { name: 'Overview', icon: 'home', url: '#home' },
        { name: 'Portfolio', icon: 'style', url: '#portfolio' },
        { name: 'Location', icon: 'location_on', url: '#location' },
        { name: 'Request', icon: 'post_add', url: './request' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    if (window.V4) {
        window.V4.init(siteConfig);
    }
});