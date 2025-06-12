import { Rocket, Shield, Users, Heart, ArrowRight,} from "lucide-react";
import { Cloud, Server, GitHub, Zap, Code, Settings , Tool} from 'react-feather';
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white px-6 pt-[7.5rem] pb-[5rem] relative overflow-hidden hero-bg-pattern">
        <div className="absolute inset-0 pointer-events-none mt-8">
          {/* Cloud - only visible on mobile, placed like Code */}
          <Cloud className="absolute bottom-36 left-6 text-black/25 w-14 h-14 block xl:hidden floating-icon" />

          {/* Server - only visible on mobile, placed like Settings */}
          <Server className="absolute bottom-28 right-6 text-black/25 w-12 h-12 block xl:hidden floating-icon-delayed" />

          {/* Other icons - visible only on sm and above */}
          <Cloud className="absolute top-28 sm:left-16 md:left-28 text-black/25 w-16 h-16 hidden xl:block floating-icon" />
          <Server className="absolute top-32 sm:right-14 md:right-20 text-black/25 w-12 h-12 hidden xl:block floating-icon-delayed" />
          <Code className="absolute bottom-36 sm:left-20 md:left-40 text-black/25 w-14 h-14 hidden xl:block floating-icon" />
          <Zap className="absolute top-72 sm:left-14 md:left-20 text-black/25 w-12 h-12 hidden xl:block floating-icon-delayed" />
          <Tool className="absolute top-1/2 sm:right-14 md:right-20 text-black/25 w-16 h-16 hidden xl:block floating-icon-delayed" />
          <Settings className="absolute bottom-28 sm:right-20 md:right-32 text-black/25 w-12 h-12 hidden xl:block floating-icon" />
        </div>


        
        <div className="max-w-6xl mx-auto text-center text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-black">
            Empowering Growth Through<br />
            <div className="text-accent-yellow mt-2">Cloud Innovation</div>
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
            Scalable, secure, and future-ready cloud solutions designed to fuel your business success.
          </h2>
          <p className="text-lg mb-12 text-gray-800 max-w-3xl mx-auto">
            At Harihar Tech, we enable businesses to thrive in the digital age by delivering cutting-edge cloud infrastructure, DevOps automation, and AI-powered solutions. Our expert team transforms complex technical challenges into competitive advantages, ensuring your business stays ahead in an ever-evolving technological landscape.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="/about">
              <button className="bg-accent-yellow text-primary-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-104 pulse-glow shadow-lg">
                Partner With Us
              </button>
            </Link>

            <Link href="/services">
              <button
                className="text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-dark transition-all duration-300 transform hover:scale-104 shadow-md hover:shadow-xl hover:border-4 border-accent-yellow"
                style={{ boxShadow: '0 0 12px rgba(0,0,0,0.15)' }}
              >
                View Our Solutions
              </button>
            </Link>

            <Link href="/about">
              <button
                className="text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-dark transition-all duration-300 transform hover:scale-104 shadow-md hover:shadow-xl hover:border-4 border-accent-yellow"
                style={{ boxShadow: '0 0 12px rgba(0,0,0,0.15)' }}
              >
                Get a free consultation
              </button>
            </Link>
          </div>
        </div>

      </section>

      {/* Highlights Section */}
      <section className="bg-accent-yellow py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-text-gray mb-2">Blazing-Fast Deployments</h3>
              <p className="text-gray-600">Deploy at lightning speed with our optimized CI/CD pipelines</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-text-gray mb-2">Military-Grade Security</h3>
              <p className="text-gray-600">Enterprise-level security with zero-trust architecture</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-text-gray mb-2">Expert Engineering Team</h3>
              <p className="text-gray-600">Seasoned professionals with deep cloud expertise</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-dark h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-text-gray mb-2">Trusted by Growing Businesses</h3>
              <p className="text-gray-600">Empowering businesses across India to reach new heights</p>
            </div>
          </div>
          
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl font-semibold text-text-gray">
              "Built on reliability. Designed for scale. Delivered with heart."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
