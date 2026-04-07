const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-20 bg-gradient-to-br from-blue-50 to-white px-6">

      <h1 className="text-3xl md:text-5xl font-semibold text-gray-700">
        Hi, I'm Nandini 👋
      </h1>

      <h2 className="mt-4 text-4xl md:text-6xl font-bold text-gray-800">
        I build clean & interactive <br />
        <span className="text-blue-500">web experiences</span>
      </h2>

      <p className="mt-4 max-w-xl text-gray-600 text-lg">
        Frontend Developer focused on creating responsive and user-friendly web applications using React and modern UI tools.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
};

export default Hero;