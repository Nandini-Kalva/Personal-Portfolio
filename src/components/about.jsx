const Contact = () => {
  return (
    <section className="h-screen text-center bg-gray-200 scroll-mt-20 px-6 py-12" id="Contact">
      <h1 className="text-4xl mb-6 mt-20">Contact Me</h1>

      <p className="text-2xl mb-8">
        I'm open to opportunities and collaborations. Feel free to reach out!
      </p>

      <div className="space-y-6 text-lg">
        <p className="text-2xl mb-10">
          📧 Email : 
          <a href="mailto:nandinikalva2002@gmail.com" className="text-blue-500 underline ml-2">
            nandinikalva2002@gmail.com
          </a>
        </p>

        <p className="text-2xl mb-10">
          🔗 GitHub : 
          <a 
            href="https://github.com/Nandini-Kalva" 
            target="_blank" 
            className="text-blue-500 underline ml-2"
          >
            View Profile
          </a>
        </p>

        <p className="text-2xl mb-10">
          💼 LinkedIn : 
          <a 
            href="https://www.linkedin.com/in/nandini-kalva-55a340267" 
            target="_blank" 
            className="text-blue-500 underline ml-2"
          >
            View Profile
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;