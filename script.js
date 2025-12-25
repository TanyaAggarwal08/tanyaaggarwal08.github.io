const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // This stops the redirect!

    // Visual feedback for your "Terminal"
    formStatus.innerHTML = '<span class="terminal-comment">// Executing sendMessage()...</span>';

    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            // 1. Add the classes that trigger the CSS styling and animation
            formStatus.classList.add("show", "success");
            
            // 2. Update the text content
            formStatus.innerHTML = '<span class="terminal-prompt">$</span> // Success: Message delivered to Tanya.';
            
            // 3. Clear the form
            contactForm.reset();

            // 4. (Optional) Hide it again after 5 seconds so the terminal looks clean
            setTimeout(() => {
                formStatus.classList.remove("show");
            }, 5000);
        } else {
            throw new Error();
        }
    } catch (error) {
        // Error state
        formStatus.innerHTML = '<span style="color: #ff0000;">// Error: Protocol failed. Check connection.</span>';
    }
});
