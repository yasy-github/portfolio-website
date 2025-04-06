import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendSkills = [
        "Owl", "Bootstrap", "React", "TailwindCSS"
    ]
    const backendSkills = [
        "Python", "Odoo", "PostgreSQL", "RESTful APIs"
    ]

    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

                    <div className="roundedd-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I'm an experienced Odoo developer specializing in ERP customizations and integrations to fit unique business needs across Sales, Purchase, Inventory, and POS Shop/Restaurant. I enjoy solving complex business problems and focus on delivering scalable and efficient business applications through clean, modular code.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h4 className="text-xl font-bold mb-4"> Education </h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> B.E. Telecom & Electronics</strong> - Royal University of Phnom Penh (2019 - 2023)
                                </li>
                                <li>
                                    <strong> Relevant Coursework: <br/>C, Java, Python, Data Structures and Algorithms</strong>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h4 className="text-xl font-bold mb-4"> Work Experience </h4>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold"> Odoo Developer </h4>
                                    <h4> at ERP CAMBODIA (2020 - Present)</h4>
                                </div>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Developed and maintained custom modules for Odoo ERP System.</li>
                                    <li>Integrated third-party APIs and created automated workflows for client operations.</li>
                                    <li>Collaborated with cross-functional teams to gather requirements and deliver robust solutions.</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};