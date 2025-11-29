import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Download, Briefcase, Award, Zap, Cpu, ImageDown } from 'lucide-react';

export default function App() {
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        document.title = "Karthik Velu - Product Leader";
    }, []);

    // CV Data Object
    const cvData = {
        name: "Karthik Velu",
        title: "Director of Product Management | Fintech & AI Leader",
        location: "Chennai, India",
        phone: "+91 98843 80113",
        email: "kaartik.velu@gmail.com",
        linkedin: "linkedin.com/in/karthik-velu",
        summary: "Fintech Product Leader with 13+ years of experience driving revenue growth and operational efficiency across Lending, Payments, and Securitisation. Currently leading risk infrastructure innovation at Kaleidofin to solve for underserved segments using alternate data. Expert in transforming legacy systems into scalable SaaS solutions, recently scaling a platform from $2M to $10M ARR.",
        achievements: [
            { title: "New Market Expansion", desc: "Spearheaded Kaleidofin's entry into the East Africa market by launching a risk infrastructure product within just 4 months." },
            { title: "5x Revenue Growth", desc: "Scaled Scienaptic's credit decisioning SaaS platform from $2M to $10M revenue while improving customer retention by 35%." },
            { title: "AI Product Innovation", desc: "Conceived and launched a regulatory-focused GenAI chatbot, achieving 80% client adoption within 3 months." },
            { title: "Securitization Scale", desc: "Drove 8x growth in securitization business at Yubi, onboarding 5 banks and 18 NBFCs with 95% client retention." },
            { title: "Massive Scale Lending", desc: "Enabled INR 7,000 Crore in lending volume at Bank of Baroda by developing new Supply Chain Finance specifications." }
        ],
        coreCompetencies: {
            leadership: "Product Vision & Strategy, Roadmap Execution, Cross-functional Leadership (PM/PMM/Design), Revenue Optimization, PLG.",
            tech: "GenAI/LLM Implementation, Alternate Data Analytics, Credit Decisioning Models, Fraud Detection, Microservices Architecture.",
            domain: "Financial Inclusion, Consumer Lending, SMB Financing, Digital Payments, Securitization, Supply Chain Finance."
        },
        experience: [
            {
                company: "Kaleidofin",
                role: "Director of Product Management",
                period: "May 2025 – Present",
                location: "Chennai",
                details: [
                    "Leading a cross-functional team of 10 (6 PMs, 2 PMMs, 2 Designers).",
                    "Market Expansion: Successfully launched a risk infrastructure product in the East Africa market within 4 months of tenure.",
                    "Financial Inclusion Product: Architecting risk solutions for underserved segments in low traditional data environments using alternate data.",
                    "Strategic Leadership: Orchestrating the product roadmap to bridge the credit gap for informal sector customers."
                ]
            },
            {
                company: "Scienaptic AI",
                role: "Director of Product Management",
                period: "Apr 2023 – Apr 2025",
                location: "Chennai",
                details: [
                    "SaaS Scaling: Orchestrated product strategy that grew revenue 5x ($2M to $10M) and increased revenue-per-client by 50%.",
                    "GenAI Innovation: Spearheaded self-learning AI credit decisioning platform and GenAI regulatory chatbot (72% feature adoption).",
                    "Operational Excellence: Reduced client onboarding time from 90 to 30 days (40% faster Time-to-Value) via self-serve framework."
                ]
            },
            {
                company: "Yubi",
                role: "Senior Product Manager",
                period: "Feb 2022 – Mar 2023",
                location: "Chennai",
                details: [
                    "Transaction Efficiency: Reduced transaction TAT from 80 to 20 days via retail credit assessment modules.",
                    "Deal Velocity: Increased transaction closure rate by 600% via data-driven discovery module (₹500 crore+ transactions).",
                    "Platform Automation: Automated end-to-end securitization process, removing operational friction."
                ]
            },
            {
                company: "Publicis Sapient",
                role: "Senior Product Manager",
                period: "Apr 2021 – Feb 2022",
                location: "Remote",
                details: [
                    "Speed to Market: Implemented comprehensive payment system for Middle Eastern neobank (Wio) in 7 months.",
                    "UX Optimization: Achieved 0.27% drop-off rate in payment workflows.",
                    "Feature Adoption: Drove 20% of active users to utilize utility payment features within first 6 months."
                ]
            },
            {
                company: "Barclays",
                role: "Business Analyst IV",
                period: "Nov 2018 – Mar 2020",
                location: "Chennai",
                details: [
                    "Process Improvement: Reduced loan processing time by 50% and costs by INR 1.5 crore.",
                    "System Modernization: Upgraded 'Zeus' credit appraisal tool for real estate lending compatibility."
                ]
            },
            {
                company: "Bank of Baroda",
                role: "Manager (Product Strategy)",
                period: "May 2014 – Nov 2018",
                location: "Mumbai",
                details: [
                    "Large Scale Impact: Developed Supply Chain Finance specs enabling INR 7,000 crore in lending.",
                    "Workflow Optimization: Reduced loan origination TAT from 35 to 10 days."
                ]
            },
            {
                company: "Home Automation Startup",
                role: "Founder & Entrepreneur",
                period: "Jun 2013 – Apr 2014",

                location: "Chennai",
                details: [
                    "Founded startup focused on smart home solutions; developed IoT integration specifications and customer acquisition strategy."
                ]
            },
            {
                company: "Cognizant",
                role: "Programmer Analyst",
                period: "Jan 2012 – May 2013",
                location: "Chennai",
                details: [
                    "Built foundational expertise in Java, data structures, and enterprise software architecture."
                ]
            }
        ],
        education: [
            { degree: "Master of Business Administration (MBA)", school: "IIM Bangalore", note: "Merit Scholar (Top 5%)" },
            { degree: "B.E. Electronics & Instrumentation", school: "Anna University", note: "" }
        ],
        certifications: [
            "CFA Level 2 Cleared",
            "Azure Data Scientist Associate",
            "SAFe Certified POPM",
            "Microsoft Azure Fundamentals"
        ]
    };

    return (
        <div className="min-h-screen pb-12 bg-slate-50 font-sans text-slate-900">
            {/* Styles for print media */}
            <style>{`
                @media print {
                    @page { margin: 0; }
                    body { background-color: white; color: black; -webkit-print-color-adjust: exact; }
                    .no-print { display: none !important; }
                    .print-only { display: block !important; }
                    a { text-decoration: none; color: black; }
                    .print-grid { display: block !important; }
                    .print-full-width { width: 100% !important; }
                    .print-static { position: static !important; }
                    .print-shadow-none { box-shadow: none !important; }
                    .print-border { border: 1px solid #eee !important; }
                }
            `}</style>

            {/* Navigation / Actions Bar */}
            <nav className="bg-white shadow-sm sticky top-0 z-50 no-print">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="font-bold text-2xl text-slate-900 tracking-tight">Karthik Velu</div>
                        <div className="flex space-x-3">
                            <a 
                                href="/Karthik_Velu_CV.pdf" 
                                download
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Download CV
                            </a>
                            <a 
                                href="/GS240903.jpg" 
                                download="Karthik_Velu_Photo.jpg"
                                className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all shadow-sm"
                            >
                                <ImageDown className="w-4 h-4 mr-2 text-gray-500" />
                                Download Photo
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print-grid">
                    
                    {/* Left Column: Personal Info & Summary (Sticky on Desktop) */}
                    <div className="md:col-span-1 print-full-width">
                        <div className="bg-white rounded-lg shadow-lg p-6 md:sticky md:top-24 print-static print-shadow-none print-border">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-gray-100 shadow-sm relative bg-gray-200">
                                    <img 
                                        src="/GS240903.jpg" 
                                        alt="Karthik Velu" 
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            setImageError(true);
                                        }}
                                    />
                                    {imageError && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                                            <span className="text-4xl font-bold">KV</span>
                                        </div>
                                    )}
                                </div>
                                <h1 className="text-2xl font-bold text-gray-900">{cvData.name}</h1>
                                <p className="text-blue-600 font-medium mt-1">{cvData.title}</p>
                                
                                <div className="w-full mt-6 space-y-3 text-left">
                                    <div className="flex items-center text-gray-600">
                                        <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                                        <span className="text-sm">{cvData.location}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Mail className="w-4 h-4 mr-3 text-gray-400" />
                                        <a href={`mailto:${cvData.email}`} className="text-sm hover:text-blue-600">{cvData.email}</a>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Phone className="w-4 h-4 mr-3 text-gray-400" />
                                        <span className="text-sm">{cvData.phone}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Linkedin className="w-4 h-4 mr-3 text-gray-400" />
                                        <a href={`https://${cvData.linkedin}`} target="_blank" className="text-sm hover:text-blue-600">LinkedIn Profile</a>
                                    </div>
                                </div>

                                <div className="w-full mt-8 pt-6 border-t border-gray-100">
                                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Education</h3>
                                    {cvData.education.map((edu, idx) => (
                                        <div key={idx} className="mb-4 last:mb-0 text-left">
                                            <div className="font-semibold text-gray-800 text-sm">{edu.degree}</div>
                                            <div className="text-gray-600 text-xs">{edu.school}</div>
                                            {edu.note && <div className="text-blue-600 text-xs mt-0.5">{edu.note}</div>}
                                        </div>
                                    ))}
                                </div>

                                <div className="w-full mt-6 pt-6 border-t border-gray-100">
                                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Certifications</h3>
                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                        {cvData.certifications.map((cert, idx) => (
                                            <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-800">
                                                {cert}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Experience & Achievements */}
                    <div className="md:col-span-2 space-y-8 print-full-width">
                        
                        {/* About Section */}
                        <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 print-shadow-none print-border">
                            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                <span className="bg-blue-100 p-2 rounded-lg mr-3 print-shadow-none">
                                    <Briefcase className="w-5 h-5 text-blue-600" />
                                </span>
                                About Me
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {cvData.summary}
                            </p>
                        </section>

                        {/* Key Strategic Achievements */}
                        <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 print-shadow-none print-border">
                            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                                <span className="bg-amber-100 p-2 rounded-lg mr-3 print-shadow-none">
                                    <Award className="w-5 h-5 text-amber-600" />
                                </span>
                                Key Strategic Achievements
                            </h2>
                            <div className="grid gap-4">
                                {cvData.achievements.map((item, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                        </div>
                                        <div className="ml-4">
                                            <span className="block font-semibold text-gray-900 text-sm">{item.title}</span>
                                            <span className="block text-gray-600 text-sm">{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Core Competencies */}
                        <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 print-shadow-none print-border">
                            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                                <span className="bg-purple-100 p-2 rounded-lg mr-3 print-shadow-none">
                                    <Cpu className="w-5 h-5 text-purple-600" />
                                </span>
                                Core Competencies
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 uppercase">Product Leadership</h3>
                                    <p className="text-sm text-gray-600 mt-1">{cvData.coreCompetencies.leadership}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 uppercase">AI & Technology</h3>
                                    <p className="text-sm text-gray-600 mt-1">{cvData.coreCompetencies.tech}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 uppercase">Finance Domain</h3>
                                    <p className="text-sm text-gray-600 mt-1">{cvData.coreCompetencies.domain}</p>
                                </div>
                            </div>
                        </section>

                        {/* Experience Timeline */}
                        <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 print-shadow-none print-border">
                            <h2 className="text-lg font-bold text-gray-900 mb-8 flex items-center">
                                <span className="bg-green-100 p-2 rounded-lg mr-3 print-shadow-none">
                                    <Zap className="w-5 h-5 text-green-600" />
                                </span>
                                Professional Experience
                            </h2>
                            
                            <div className="relative border-l-2 border-gray-200 ml-3 space-y-12">
                                {cvData.experience.map((job, idx) => (
                                    <div key={idx} className="relative pl-8">
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-500"></div>
                                        
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                            <h3 className="text-lg font-bold text-gray-900">{job.role}</h3>
                                            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full mt-1 sm:mt-0 w-fit">
                                                {job.period}
                                            </span>
                                        </div>
                                        
                                        <div className="text-sm font-medium text-gray-700 mb-3">
                                            {job.company} <span className="text-gray-400 mx-1">•</span> {job.location}
                                        </div>
                                        <ul className="list-disc list-outside ml-4 space-y-2">
                                            {job.details.map((detail, dIdx) => (
                                                <li key={dIdx} className="text-sm text-gray-600 pl-1 leading-relaxed">
                                                    <span dangerouslySetInnerHTML={{ __html: detail.replace(/(\b\d+%|\$\d+M|INR \d+,?\d*|80%|5x|40%)/g, '<strong>$1</strong>') }}></span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
