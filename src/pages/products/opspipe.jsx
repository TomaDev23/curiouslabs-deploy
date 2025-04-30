import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer_legacy';

export default function OpsPipe() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A2E] via-[#16213E] to-[#0F172A] text-white">
      <Helmet>
        <title>OpsPipe - Operational Workflow | CuriousLabs</title>
        <meta name="description" content="Streamline your operational workflow with real-time monitoring and intelligent automation. Built with flexibility for enterprise-grade efficiency." />
        <meta property="og:title" content="OpsPipe - Operational Workflow | CuriousLabs" />
        <meta property="og:description" content="Streamline your operational workflow with real-time monitoring and intelligent automation. Built with flexibility for enterprise-grade efficiency." />
        <meta property="og:image" content="/images/logo.svg" />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://curiouslabs.io/products/opspipe" />
      </Helmet>
      
      <NavBar />
      
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section with anchor ID */}
        <section id="overview" className="mb-24 text-center">
          <div className="inline-block mb-4 p-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="bg-[#1A1A2E] rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 22v-4m3 4v-6m3 6v-8" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">OpsPipe</h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Streamline your operational workflow with real-time monitoring and intelligent automation
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/codelab" 
              className="btn px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-700 hover:to-cyan-600 transition duration-300"
            >
              Visit CodeLab
            </Link>
            <a 
              href="#features" 
              className="btn px-8 py-3 rounded-lg bg-transparent border border-blue-500 text-blue-400 font-medium hover:bg-blue-500/10 transition duration-300"
            >
              Explore Features
            </a>
          </div>
        </section>
        
        {/* Product Description */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Chaos into Order</h2>
              <p className="text-gray-300 mb-6">
                OpsPipe is the enterprise-grade solution for automating, monitoring, and optimizing your operational processes. 
                Built with flexibility in mind, OpsPipe integrates seamlessly with your existing infrastructure while providing 
                the tools you need to scale efficiently.
              </p>
              <ul className="space-y-3">
                {['Real-time monitoring dashboard', 'Intelligent alert system', 'Custom automation workflows', 'Comprehensive API'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-400 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-blue-900/30 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-blue-800/50 to-cyan-700/30 rounded-xl p-1">
                <div className="w-full h-full bg-[#0F172A] rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 22v-4m3 4v-6m3 6v-8" />
                      </svg>
                    </div>
                    <p className="text-gray-300">OpsPipe Dashboard Interface</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section with anchor ID */}
        <section id="features" className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-Time Monitoring',
                description: 'Watch task states, inputs, and output flows as they execute.',
                icon: '🚨'
              },
              {
                title: 'Intelligent Automation',
                description: 'Define workflows that adapt based on signal or feedback.',
                icon: '🔁'
              },
              {
                title: 'CLI + Telegram Interface',
                description: 'Ingest documents or triggers via terminal or bot UI.',
                icon: '🧪'
              },
              {
                title: 'Custom Error Handling',
                description: 'Route failures into fallback states powered by Aegis.',
                icon: '🛠️'
              },
              {
                title: 'Output & Export Pipeline',
                description: 'Push to webhooks, dashboards, accounting tools, or folders.',
                icon: '📦'
              },
              {
                title: 'Hardened Trace System',
                description: 'Every action traceable, testable, and auditable.',
                icon: '🔐'
              },
            ].map((feature, index) => (
              <div key={index} className="bg-blue-900/10 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA Section with anchor ID */}
        <section id="cta" className="mb-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 rounded-2xl p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Visit the OpsPipe CodeLab to start building your customized operational workflow solution today.
            </p>
            <Link
              to="/codelab"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-700 hover:to-cyan-600 transition duration-300"
            >
              Get Started with OpsPipe
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 