/*
When an event happens in the browser—like clicking a link or submitting a form—the browser automatically performs its own default behavior:
 * Submitting a form reloads or navigates to a new page.
 * Clicking a link (<a>) navigates to the URL in href.
 * Pressing a key in an input box types the character into the field.
 * Right-clicking opens the context menu.
event.preventDefault() tells the browser: "Stop! Don't do your built-in action. I'll handle this with my own code."
*/

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the page from refreshing
  
  // Now you can handle the submission with JavaScript
  fetch('/api/login', { method: 'POST', body: new FormData(form) });
});



// Add validation, handle the submission, and update the UI without a page refresh
const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  // 1. Stop the browser's full-page reload immediately
  event.preventDefault(); 
  
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');

  // 2. WHERE VALIDATION HAPPENS (before sending the request)
  if (!emailInput.value.includes('@')) {
    alert('Please enter a valid email.');
    return; // Stop execution; do NOT send fetch request
  }

  if (passwordInput.value.length < 8) {
    alert('Password must be at least 8 characters long.');
    return; // Stop execution
  }

  // 3. HOW IT IS SUBMITTED
  try {
    const response = await fetch('/api/login', { 
      method: 'POST', 
      body: new FormData(form) 
    });

    const data = await response.json();

    if (response.ok) {
      // 4. WHAT HAPPENS INSTEAD OF A RELOAD
      // You manually update the UI (e.g., redirect or show success)
      window.location.href = '/dashboard'; // Manual redirect IF desired
    } else {
      alert(data.error || 'Login failed!');
    }
  } catch (error) {
    console.error('Network error:', error);
  }
});