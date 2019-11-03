<!-- Printing and PDF exports -->
var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match( /print-pdf/gi ) ? '../vendor/reveal.js-3.8.0/css/print/pdf.css' : '../vendor/reveal.js-3.8.0/css/print/paper.css';
document.getElementsByTagName( 'head' )[0].appendChild( link );
