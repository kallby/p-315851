import React from "react";

const ImpactSection = () => {
  const stats = [
    "40% average reduction in monthly cloud spend for optimization clients",
    "60% faster release cycles after adopting our automated CI/CD blueprints",
    "3\u00D7 boost in developer productivity via infrastructure-as-code and self-service platforms"
  ];
  return (
    <section id="impact" className="py-12 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-8">
          <div className="pulse-chip mb-4"><span>Impact Snapshot</span></div>
          <h2 className="section-title">Impact Snapshot</h2>
        </div>
        <ul className="max-w-2xl mx-auto space-y-4 text-left">
          {stats.map((s, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-4 h-4 mt-1 bg-pulse-500 rounded-full" />
              <span className="text-gray-700">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ImpactSection;
