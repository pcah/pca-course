Reveal.initialize({
    progress: true,
    history: true,
    center: true,
    controls: true,
    fragments: true,

    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [{
        src: '../vendor/reveal.js-3.8.0/lib/js/classList.js',
        condition: function () {
            return !document.body.classList;
        }
    }, {
        src: '../vendor/reveal.js-3.8.0/plugin/markdown/marked.js',
        condition: function () {
            return !!document.querySelector('[data-markdown]');
        }
    }, {
        src: '../vendor/reveal.js-3.8.0/plugin/markdown/markdown.js',
        condition: function () {
            return !!document.querySelector('[data-markdown]');
        }
    }, {
        src: '../vendor/reveal.js-3.8.0/plugin/highlight/highlight.js',
        async: true,
        condition: function () {
            return !!document.querySelector('pre code');
        },
        callback: function () {
            hljs.initHighlightingOnLoad();
        }
    }, {
        src: '../vendor/reveal.js-3.8.0/plugin/zoom-js/zoom.js',
        async: true
    }, {
        src: '../vendor/reveal.js-3.8.0/plugin/notes/notes.js',
        async: true
    }]
});

$(document).ready(function () {
    $('video').attr('loop','loop');
})
