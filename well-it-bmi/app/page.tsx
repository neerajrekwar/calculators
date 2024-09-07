import { BackgroundBeamsWithCollisionDemo } from "../@/components/backBeamsWithcoll";

export default function Home() {
  return (
    <main>
      <section id="home" className="min-h-screen text-tPrimary bg-secondary">
        <BackgroundBeamsWithCollisionDemo />
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>
          Information about your company, mission, and values. Include any
          important background or history.
        </p>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <article>
          <h3>Service One</h3>
          <p>
            Details about the first service you offer. Describe what it entails
            and its benefits.
          </p>
        </article>
        <article>
          <h3>Service Two</h3>
          <p>
            Details about the second service you offer. Describe what it entails
            and its benefits.
          </p>
        </article>
        {/* Add more service articles as needed */}
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <address>
          <p>
            Email: <a href="mailto:info@example.com">info@example.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+1 234 567 890</a>
          </p>
          <p>Address: 123 Your Street, Your City, Your Country</p>
        </address>
        <form action="/submit" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}
