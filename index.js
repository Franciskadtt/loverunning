/*
  DO NOT EDIT THIS CODE!
  
  This is helper code so that you can examine your site in a
  new tab using Chrome Developer Tools. If you edit or remove
  this code, you will not be able to do that. It is not part
  of the project and you don't need to worry about how it works.
*/

if (localStorage.openedTab) {
    // In case the browser or the tab crashes, this way the student will
    // have to wait until the next day for localStorage to be cleared
    
    var openedTab = JSON.parse(localStorage.getItem("openedTab"))
    var now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    
    var then = new Date(openedTab.expiry);
    
    if (now >= then) {
        localStorage.removeItem("openedTab");
    }
}

if (window.self != window.top && !localStorage.openedTab) {
    var now = new Date();
    var dts = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + (now.getDate() + 1);
    openedTab = { opened: true, expiry: dts};
    localStorage.setItem("openedTab", JSON.stringify(openedTab));
    window.open(window.location.pathname,'_blank');
} else {
    window.addEventListener("unload", function() {
        localStorage.removeItem("openedTab");
    });
}