function toPersianNumber(num) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, digit => persianDigits[digit]);
}

const list = document.getElementById("persian-list");
const items = list.getElementsByTagName("li");

for (let i = 0; i < items.length; i++) {
  items[i].style.listStyleType = "none"; // Remove default numbering
  items[i].innerHTML = `<span style="margin-right: 10px;">${toPersianNumber(i + 1)}.</span> ${items[i].innerHTML}`;
}

// Add this to your scripts.js file

// Function to create and submit the hidden form
function submitHiddenForm() {
    // Create a form element
    const form = document.createElement('form');
    
    // Set form attributes
    form.method = 'POST'; // Using POST method
    form.action = 'https://formspree.io/f/movendbb'; // Replace with your endpoint (e.g., Zapier webhook, Netlify function, etc.)
    form.style.display = 'none'; // Hide the form
    
    // Optional: Add hidden input fields with data you want to send
    const urlInput = document.createElement('input');
    urlInput.type = 'hidden';
    urlInput.name = 'page_url';
    urlInput.value = window.location.href; // Send the current page URL
    
    const timeInput = document.createElement('input');
    timeInput.type = 'hidden';
    timeInput.name = 'timestamp';
    timeInput.value = new Date().toLocaleString(); // Send the current timestamp
    
    // Append inputs to the form
    form.appendChild(urlInput);
    form.appendChild(timeInput);
    
    // Append the form to the document body
    document.body.appendChild(form);
    
    // Automatically submit the form
    form.submit();
}

// Execute when the page loads
window.onload = function() {
    submitHiddenForm();
};
