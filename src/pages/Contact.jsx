const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        We&apos;d love to hear from you! Fill out the form below to get in
        touch:
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Enter your name"
            aria-label="Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Enter your email"
            aria-label="Email"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Your message"
            aria-label="Message"
          ></textarea>
        </div>
        <button type="submit" aria-label="Send your message to us">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
