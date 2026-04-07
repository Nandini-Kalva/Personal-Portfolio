const Stats = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">

        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-lg transition">
          <h2 className="text-4xl font-bold text-blue-500">2+</h2>
          <p className="mt-2 text-gray-600">Projects Built</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-lg transition">
          <h2 className="text-4xl font-bold text-blue-500">React</h2>
          <p className="mt-2 text-gray-600">Developer</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-lg transition">
          <h2 className="text-4xl font-bold text-blue-500">Clean UI</h2>
          <p className="mt-2 text-gray-600">Focused</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;