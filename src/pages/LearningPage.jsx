import { useState } from "react";

console.log("LearningPage component rendered");

export default function LearningPage() {
  const whatCards = [
    { title: "Definition", desc: "Understand what the concept means in simple terms." },
    { title: "Real-World Relevance", desc: "Discover how it applies in practical scenarios." },
  ];

  const whyCards = [
    { title: "Importance", desc: "Why should you care about this topic?" },
    { title: "Benefits", desc: "How mastering it helps you in real-life situations or exams." },
  ];

  const conceptModules = [
    { name: "Module A", content: "This is Module A's content." },
    { name: "Module B", content: "This is Module B's content." },
    { name: "Module C", content: "This is Module C's content." },
  ];

  const practiceLevels = ["Level 1", "Level 2", "Level 3"];
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12 space-y-16">
      {/* What Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">What</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {whatCards.map((card, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Why</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {whyCards.map((card, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Concepts Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Concepts</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {conceptModules.map((mod, i) => (
            <button
              key={i}
              onClick={() => setSelectedModule(mod)}
              className={`p-6 rounded-xl text-left border border-white/20 bg-white/10 hover:bg-white/20 transition ${
                selectedModule?.name === mod.name ? "ring-2 ring-orange-400" : ""
              }`}
            >
              <h4 className="font-medium text-lg">{mod.name}</h4>
              <p className="text-sm text-gray-400 mt-2">Click to view content</p>
            </button>
          ))}
        </div>

        {selectedModule && (
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h4 className="text-xl font-semibold mb-2">{selectedModule.name}</h4>
            <p className="text-gray-300">{selectedModule.content}</p>
          </div>
        )}
      </section>

      {/* Practice Questions Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Practice Questions</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {practiceLevels.map((level, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
            >
              <h4 className="text-xl font-bold">{level}</h4>
              <p className="text-gray-400 mt-2">Practice questions for {level} difficulty.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solve With Us Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Solve With Us</h2>
        <div className="bg-orange-500 text-black p-8 rounded-2xl shadow-xl max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Solve with Us!</h3>
          <p className="text-lg">
            Join our live sessions or community challenges and solve questions together in real time.
          </p>
        </div>
      </section>
    </div>
  );
}
