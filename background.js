/**
 * Created by michaelagnew on 2/25/16.
 */


chrome.app.runtime.onLaunched.addListener(function(){
    chrome.app.window.create('window.html', {
        'outerBounds': {
            'width': 800,
            'height': 400
        }
    });
});