export default function Content() {
  return (
    <main className="container my-5 text-center">
      <section id="about" className="mb-5">
        <h3>About</h3>
        <p>This is the about section of the website.</p>
      </section>

      <section id="contact" className="mb-5">
        <h3>Contact</h3>
        <p>
          For any inquiries, please contact us at{" "}
          <a href="mailto:example@example.com">example@example.com</a>.
        </p>
      </section>
    </main>
  );
}
