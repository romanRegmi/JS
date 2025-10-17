/* Local Storage 
 - data persists even after closing browser
 - available across all tabs/windows
 - storage : 5-10MB per domain
 - No expiration
 - Accessible by JS
 - Use Case : Storing user preferences, settings, etc.
 - Storage location : Browser
*/
localStorage.setItem('Name', 'John');
localStorage.setItem('Age', '25');

// window.localStorage - browser console

let name = localStorage.getItem('Name')
console.log(name)
localStorage.removeItem('Name')

let impArray = ['John', '25'];
localStorage.setItem('Person', JSON.stringify(impArray)); // JSON.stringify - array to string
let person = JSON.parse(localStorage.getItem('Person')); // JSON.parse - string to array
console.log(person)

/* Session Storage - browser console 
 - data is lost once the tab or browser is closed
 - only available within the same tab/window
 - storage : 5-10MB per domain
 - No expiration (until tab is closed)
 - Accessible by JS
 - Use Case : Storing session-specific data, e.g., form states
 - Storage location : Browser
*/
sessionStorage.setItem('Name', 'Roman');
sessionStorage.setItem('Age', '24');
sessionStorage.setItem('Person', JSON.stringify(impArray));

/* Cookies : helps websites/apps remember you and your preferences and helps in state persistence
 - sessionId is stored in cookies
 - data can persist until expiry (set by user)
 - available across all tabs and windows (for the same domain)
 - storage : 4KB per cookie
 - expiry date can be set
 - Accessible by JS and sent with HTTP requests
 - Use Case : Storing authentication tokens, tracking data
 - Storage location : Browser and server
*/
document.cookie = 'name=Kyle; expires=' + new Date(9999, 0, 1).toUTCString();
document.cookie = 'lastName=Smith; expires=' + new Date(9999, 0, 1).toUTCString();
console.log(document.cookie);