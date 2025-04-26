document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle functionality
  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links-desktop');
  
  // Simple mobile menu toggle (in a real app, you'd add more sophisticated mobile menu)
  if (menuButton) {
    menuButton.addEventListener('click', function() {
      alert('Mobile menu coming soon!');
    });
  }
  
  // Chat button functionality
  const chatButton = document.querySelector('.chat-button');
  if (chatButton) {
    chatButton.addEventListener('click', function() {
      alert('ChavrutAI Chat feature coming soon!');
    });
  }
  
  // Sign in button functionality
  const signinButton = document.querySelector('.signin-button');
  if (signinButton) {
    signinButton.addEventListener('click', function() {
      alert('Sign in feature coming soon!');
    });
  }
  
  // Settings button functionality
  const settingsButton = document.querySelector('.settings-button');
  if (settingsButton) {
    settingsButton.addEventListener('click', function() {
      alert('Settings feature coming soon!');
    });
  }
  
  // Primary and secondary button functionality
  const primaryButton = document.querySelector('.primary-button');
  if (primaryButton) {
    primaryButton.addEventListener('click', function() {
      alert('Browse Tractates feature coming soon!');
    });
  }
  
  const secondaryButton = document.querySelector('.secondary-button');
  if (secondaryButton) {
    secondaryButton.addEventListener('click', function() {
      alert('Learn More feature coming soon!');
    });
  }
  
  // Accessibility improvement - add focus states for keyboard navigation
  const allButtons = document.querySelectorAll('button');
  allButtons.forEach(button => {
    button.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });
  
  console.log('ChavrutAI website scripts initialized');
});