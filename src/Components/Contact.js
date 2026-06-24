import React, { useState } from 'react';

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger mailto link
    window.location.href = `mailto:ogbajijulian@gmail.com?subject=Contact Form&body=Message from ${e.target.name.value} (${e.target.email.value}): ${e.target.message.value}`;

    // Show notification
    setSent(true);

    // Clear form fields
    e.target.reset();

    // Auto-close notification after 3 seconds
    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>

      {sent && (
        <div className="notification">
          ✅ Your message has been sent!
        </div>
      )}
    </section>
  );
}

export default Contact;
