
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  formStatus.className = "form-status show";
  formStatus.innerText = "🚀 Sending your message...";

  const payload = {
    content: `
📩 **New Portfolio Contact**

👤 Name: ${form.name.value}
📧 Email: ${form.email.value}
📝 Subject: ${form.subject.value}

💬 Message:
${form.message.value}
`
  };

  try {
    await fetch("PASTE_YOUR_DISCORD_WEBHOOK_URL", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    formStatus.classList.add("success");
    formStatus.innerText = "🎉 Message sent successfully! I’ll get back to you soon.";

    form.reset();
  } catch (error) {
    formStatus.classList.add("error");
    formStatus.innerText = "❌ Something went wrong. Please try again.";
  }
});

