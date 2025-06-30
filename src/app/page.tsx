export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <section
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-extrabold mb-4">Frontend School</h1>
          <p className="text-xl mb-8">Learn modern web development with hands-on projects and expert guidance.</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Join Now
          </button>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What You&#39;ll Learn</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "HTML & CSS",
                desc: "Master the building blocks of the web. Responsive layouts, Flexbox, and Grid.",
              },
              {
                title: "JavaScript & TypeScript",
                desc: "Learn programming fundamentals and modern ES6+ syntax with confidence.",
              },
              {
                title: "React & Next.js",
                desc: "Build production-ready apps using the most popular frontend frameworks.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="mb-6">No experience required. We&#39;ll teach you everything step-by-step.</p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm">
        &copy; {new Date().getFullYear()} Frontend School. All rights reserved.
      </footer>
    </main>
  );
}
