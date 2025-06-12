import { useState } from "react";

export default function Training() {
  const trainingData = [
    {
      title: "Cloud + DevOps",
      type: "Cohort-based",
      category: "Cloud",
      description: "Master CI/CD pipelines, cloud infrastructure, and deployment automation with expert-led training.",
    },
    {
      title: "MLOps",
      type: "Pre-recorded",
      category: "AI & ML",
      description: "Integrate ML models into production with MLOps tools and best practices for automation and monitoring.",
    },
    {
      title: "AIOps",
      type: "Cohort-based",
      category: "AI & ML",
      description: "Harness AI for IT operations to automate incident detection, root cause analysis, and resolution.",
    },
    {
      title: "MERN Stack",
      type: "Pre-recorded",
      category: "Full Stack",
      description: "Build powerful full-stack apps using MongoDB, Express, React, and Node.js.",
    },
  ];

  const categories = ["All", "Cloud", "DevOps", "AI & ML", "Full Stack"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTraining = selectedCategory === "All"
    ? trainingData
    : trainingData.filter(item => item.category === selectedCategory || item.title.includes(selectedCategory));

  const getTypeColor = (type) => {
    return type === "Cohort-based" ? "bg-[#FFB200]" : "bg-green-400";
  };

  return (
    <div>
      <section className="bg-white px-6 pt-[7rem] pb-[5rem] font-sans">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Discover, learn, and grow your <br /> Tech career
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            <span className="text-[#FFB200] font-semibold">Training & courses</span> in Cloud, MLOps, AIOps, and Full-Stack development.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Design and developed by <span className="text-black font-semibold">Harihar Tech Technologies</span>
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm border transition ${selectedCategory === cat
                    ? "bg-[#FFB200] text-white font-semibold border-transparent"
                    : "border-gray-300 text-gray-600 font-semibold hover:bg-gray-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Training Cards */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {filteredTraining.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow relative"
              >
                <div className="flex justify-between items-start">
                  <span className={`w-3 h-3 rounded-full ${getTypeColor(item.type)}`}></span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-black">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 w-full bg-accent-yellow py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Meet Your Instructor
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto mb-10">
            Learn directly from an industry expert with hands-on experience in building scalable tech solutions.
            Our instructor brings real-world insights, best practices, and mentorship to guide your professional growth.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <img
              src="/assets/instructor.png"
              alt="Instructor"
              className="w-48 h-48 rounded-full object-cover shadow-md"
            />
            <div className="text-left max-w-md">
              <h3 className="text-2xl font-semibold text-black">Somesh G. Sondhiya</h3>
              <p className="text-sm font-medium text-white bg-black inline-block px-2 py-0.5 rounded mb-2">
                Devops Architect | DataOps | Azure MLOps
              </p>
              <p className="text-black text-sm leading-relaxed">
                Almost 8+years of rich Experinece in IT project Management/ Azure Devops/2+years with Javascript Automation such as Cypress.IO.Webdriver.IO.Suite.st,BDD. PageObject model. Robot Framework python.3+ years with Core Devops Jenkins, Docker, kubernetes, Argocd, Terraform.Azure-Devops.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
