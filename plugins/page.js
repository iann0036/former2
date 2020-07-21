/*
Draw.io custom plugin
*/

// Enable fullscreen toggle
setTimeout(function(){
    document.querySelector('a[title="Fullscreen"]').addEventListener('click', () => {
        var parent = window.opener || window.parent;
        parent.postMessage(JSON.stringify({event: 'toggleFullscreen'}), '*'); 
    });
}, 5000);
