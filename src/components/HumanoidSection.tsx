import React from "react";

const WhyStacktioSection = () => {
  const points = [
    "Outcome\u2011Obsessed \u2013 Every engagement is governed by clear KPIs tied directly to business value.",
    "Cloud\u2011Native DNA \u2013 Kubernetes, serverless, data pipelines\u2014built\u2011in, not bolted on.",
    "Cost Conscious \u2013 FinOps rigor is integrated from day one to protect your bottom line.",
    "Inclusive Perspective \u2013 Diversity of thought drives more innovative, resilient solutions.",
    "Right\u2011Sized Teams \u2013 Senior\u2011only specialists who move quickly and integrate seamlessly with yours."
  ];
  return (
    <section id="why-stacktio" className="py-12 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-8">
          <div className="pulse-chip mb-4"><span>Why Stacktio</span></div>
          <h2 className="section-title">Why Stacktio</h2>
        </div>
        <ul className="max-w-3xl mx-auto space-y-4 text-left">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-4 h-4 mt-1 bg-pulse-500 rounded-full"></div>
              <span className="text-gray-700">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyStacktioSection;
