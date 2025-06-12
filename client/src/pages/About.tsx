import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", contactNo: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div>
      <section className="bg-white pt-[10rem] pb-[5rem] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-bold text-black mb-12">
            "We're not just a service provider — we're your cloud partner."
          </blockquote>

          <p className="text-lg text-gray-700 mb-16 leading-relaxed">
            Our team's passion for cloud engineering drives us to create tailored, secure solutions that form the foundation of long-term partnerships. We believe in empowering businesses through technology, not just implementing it. Every solution we architect is designed with your growth, security, and success in mind.
          </p>

          <div className="bg-white rounded-xl p-8 shadow-xl max-w-md mx-auto" style={{ boxShadow: '0 0 12px rgba(0,0,0,0.15)' }}>
            <h3 className="text-2xl font-bold text-text-gray mb-6">Get In Touch</h3>

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-left font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-left font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contactNo" className="block text-left font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNo"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
                  placeholder="+91 1234567890"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-dark text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200"
              >
                Submit
              </button>

              {submitted && (
                <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              {errorMessage && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                  {errorMessage}
                </div>
              )}
            </form>

            <div className="space-y-4 text-left border-t pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-accent-yellow w-10 h-10 rounded-full flex items-center justify-center">
                  <Mail className="text-primary-dark h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-text-gray">Email</p>
                  <p className="text-gray-600">contact@yourcompany.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-accent-yellow w-10 h-10 rounded-full flex items-center justify-center">
                  <Phone className="text-primary-dark h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-text-gray">Phone</p>
                  <p className="text-gray-600">+91 8767937077</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-accent-yellow w-10 h-10 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary-dark h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-text-gray">Location</p>
                  <p className="text-gray-600">Nagpur, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent-yellow py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-text-gray">
            "We don't just implement technology — we empower businesses to lead with it."
          </blockquote>
        </div>
      </section>
    </div>
  );
}
