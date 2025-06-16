import React from "react";

const ApproachSection = () => {
  const steps = [
    { title: "Discover", desc: "Immersive workshops clarify objectives, risks, and success metrics." },
    { title: "Design", desc: "Lean, hypothesis-driven design sprints turn insights into actionable roadmaps." },
    { title: "Deliver", desc: "Cross-functional squads ship value in iterative increments." },
    { title: "Optimize", desc: "Continuous telemetry and cost controls keep solutions performant and efficient." }
  ];
  return (
    <section id="our-approach" className="py-12 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-8">
          <div className="pulse-chip mb-4"><span>Our Approach</span></div>
          <h2 className="section-title">Our Approach</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-elegant">
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-700 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
