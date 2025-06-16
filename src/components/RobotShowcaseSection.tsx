import React from "react";

const tech = {
  "Cloud Platforms": ["AWS", "Microsoft Azure", "Google Cloud", "Oracle Cloud"],
  "Infrastructure as Code": ["Terraform", "Pulumi", "Ansible", "Bicep"],
  "Containers & Orchestration": ["Docker", "Kubernetes", "Helm", "Argo CD"],
  "CI/CD Tooling": ["GitLab CI", "GitHub Actions", "Azure DevOps", "Jenkins"],
  "Observability": ["Prometheus", "Grafana", "Datadog", "OpenTelemetry"],
  "Security & Policy": ["HashiCorp Vault", "OPA/Gatekeeper", "Snyk", "Trivy"],
  "Data & Analytics": ["Snowflake", "Databricks", "PostgreSQL", "Kafka"],
  "AI & ML": ["TensorFlow", "PyTorch", "Hugging Face", "LangChain", "OpenAI"],
  Languages: ["Python", "Go", "TypeScript", "PowerShell"]
} as const;

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-12 bg-gray-100">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-8">
          <div className="pulse-chip mb-4"><span>Technologies</span></div>
          <h2 className="section-title">Technologies We Work With</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {Object.entries(tech).map(([domain, items]) => (
            <div key={domain} className="bg-white p-6 rounded-xl shadow-elegant">
              <h3 className="font-semibold mb-2">{domain}</h3>
              <p className="text-gray-700 text-sm">{items.join(" \u00B7 ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
