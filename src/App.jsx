// src/App.jsx

import { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import Cursor from "./components/Cursor";
import profile from "./assets/profile.jpg";
import iotImg from "./assets/iot_seminar.png";
import techDayImg from "./assets/tech_day.png";
import aiSeminarImg from "./assets/ai_seminar.jpg";
import outreachImg from "./assets/outreach.jpg";
import cyberHackathonImg from "./assets/cyber_hackathon.jpg";

import nptelLogo from "./assets/nptel_logo.png";
import scalerLogo from "./assets/scaler_logo.png";
import vbitLogo from "./assets/vbit_logo.png";
import aicteLogo from "./assets/aicte_logo.png";

import {
    SiPython,
    SiJavascript,
    SiHtml5,
    SiTailwindcss,
    SiFigma,
    SiBurpsuite,
    SiWireshark,
    SiGit,
    SiGithub,
    SiTensorflow,
    SiKeras,
    SiPandas,
    SiNumpy,
    SiOpenai,
    SiFlutter,
    SiNodedotjs,
    SiSpringboot,
    SiMysql,
    SiMongodb,
    SiFirebase,
    SiArduino,
    SiRaspberrypi,
    SiDocker,
    SiC,
    SiGoogle,
    SiCisco,
} from "react-icons/si";

import { 
    FaJava, 
    FaArrowUp, 
    FaGraduationCap, 
    FaTrophy, 
    FaCertificate, 
    FaMicrochip, 
    FaMicrosoft, 
    FaUniversity,
    FaBook,
    FaLaptopCode,
    FaSchool,
    FaLinkedin,
    FaMapMarkerAlt,
    FaEnvelope,
    FaUser,
    FaShieldAlt,
    FaAward,
    FaTerminal
} from "react-icons/fa";

import { HiOutlineArrowUp } from "react-icons/hi";

export default function App() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const { scrollYProgress } = useScroll();
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });
        
        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            lenis.destroy();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        lenisRef.current?.scrollTo(0);
    };

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            lenisRef.current?.scrollTo(element, {
                offset: -100,
                duration: 1.5
            });
        }
    };

    const projects = [
        {
            title: "AI Audio Transcription",
            description: "Developed a multilingual speech-to-text application using OpenAI Whisper and Streamlit. Features include subtitle generation and export in TXT, PDF, and SRT formats with a responsive real-time interface.",
            tech: ["Python", "Streamlit", "OpenAI Whisper", "FFmpeg"],
            link: "https://github.com/Akhilan9/GenAI_Audio_Transcription"
        },
        {
            title: "Healthcare Risk Prediction",
            description: "A machine learning-based healthcare prediction platform for disease risk analysis. Integrates predictive models and data processing pipelines into a scalable architecture for real-time health assessments.",
            tech: ["Python", "Machine Learning"],
            link: "https://github.com/Akhilan9/Multiple-Disease-Prediction"
        },
        {
            title: "Smart IoT Shopping Cart",
            description: "An IoT-enabled smart shopping cart using RFID technology for automated billing. Combines Arduino Nano, RFID scanners, and dynamic price calculation to streamline the retail checkout process.",
            tech: ["Arduino Nano", "RFID", "Embedded Systems", "IoT"],
            link: "https://github.com/Akhilan9/Smart-Shopping-Cart"
        }
    ];

    const [formStatus, setFormStatus] = useState("");

    const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.2,
            },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Sending...");
        
        const formData = new FormData(e.target);
        
        // IMPORTANT: Replace this with your Web3Forms Access Key
        // You can get one for free at https://web3forms.com/
        formData.append("access_key", "955439da-119d-4f73-afa4-7a5c356aa041"); 

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setFormStatus("Message sent successfully!");
                e.target.reset();
            } else {
                console.error("Error", data);
                setFormStatus(data.message || "Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error", error);
            setFormStatus("Something went wrong. Please try again later.");
        }

        setTimeout(() => setFormStatus(""), 5000);
    };

    const skills = [
        // LANGUAGES
        { name: "Java", icon: <FaJava className="text-[#007396]" />, cat: "Lang" },
        { name: "Python", icon: <SiPython className="text-[#3776AB]" />, cat: "Lang" },
        { name: "C", icon: <SiC className="text-[#A8B9CC]" />, cat: "Lang" },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, cat: "Lang" },
        
        // AI/ML
        { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" />, cat: "AI" },
        { name: "Keras", icon: <SiKeras className="text-[#D00000]" />, cat: "AI" },
        { name: "Pandas", icon: <SiPandas className="text-[#150458]" />, cat: "AI" },
        { name: "NumPy", icon: <SiNumpy className="text-[#013243]" />, cat: "AI" },
        { name: "Whisper", icon: <SiOpenai className="text-[#412991]" />, cat: "AI" },

        // WEB & BACKEND
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" />, cat: "Web" },
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, cat: "Web" },
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" />, cat: "Web" },
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" />, cat: "Web" },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" />, cat: "Web" },

        // DATABASES
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, cat: "DB" },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, cat: "DB" },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" />, cat: "DB" },

        // CYBERSECURITY
        { name: "Wireshark", icon: <SiWireshark className="text-[#1679A7]" />, cat: "Cyber" },
        { name: "Burp Suite", icon: <SiBurpsuite className="text-[#FF6633]" />, cat: "Cyber" },

        // IOT
        { name: "Arduino", icon: <SiArduino className="text-[#00979D]" />, cat: "IoT" },
        { name: "Raspberry Pi", icon: <SiRaspberrypi className="text-[#C51A4A]" />, cat: "IoT" },
        { name: "NodeMCU", icon: <FaMicrochip className="text-[#000000]" />, cat: "IoT" },

        // TOOLS
        { name: "Git", icon: <SiGit className="text-[#F05032]" />, cat: "Tools" },
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" />, cat: "Tools" },
    ];

    const education = [
        {
            school: "Vignana Bharathi Institute of Technology",
            location: "Hyderabad, India",
            degree: "Bachelor of Technology in Information Technology",
            stats: "CGPA: 9.05",
            duration: "2023 – Present"
        },
        {
            school: "Narayana Junior College",
            location: "Hyderabad, India",
            degree: "Intermediate Education (MPC)",
            stats: "Percentage: 93.6%",
            duration: "2021 – 2023"
        },
        {
            school: "The Mother’s Integral School",
            location: "Hyderabad, India",
            degree: "Secondary School Certificate (SSC)",
            stats: "CGPA: 10",
            duration: "2020 – 2021"
        }
    ];

    const achievements = [
        "Secured 1st Prize in Cybersecurity CTF Competition",
        "Maintained 9.05 CGPA in B. Tech Information Technology",
        "Selected for Cyber Security Internship | Supraja Technologies",
        "AI Developer Intern | Summer of AI 2025 (VISWAM.AI & IIIT Hyderabad)"
    ];

    const certificates = [
        {
            name: "DATABASE MANAGEMENT SYSTEMS",
            issuer: "NPTEL",
            logo: nptelLogo,
            link: "https://github.com/Akhilan9/Certificates/blob/main/Data%20Base%20Management%20System.pdf",
            desc: "Comprehensive certification covering relational databases, SQL optimization, and advanced database management principles through the NPTEL platform."
        },
        {
            name: "JAVASCRIPT ESSENTIALS",
            issuer: "Cisco Networking Academy",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
            link: "https://github.com/Akhilan9/Certificates/blob/main/JavaScript_Essentials_2_certificate_23p61a12c4-vbithyd-ac-in_0fc8bd26-0e0f-40f0-b120-efcadd383ef4.pdf",
            desc: "Certified in core JavaScript programming, DOM manipulation, and asynchronous logic through the Cisco Networking Academy program."
        },
        {
            name: "KERAS AND TENSORFLOW",
            issuer: "Scaler",
            logo: scalerLogo,
            link: "https://www.linkedin.com/posts/akhilanvengala_deeplearning-tensorflow-keras-activity-7431325268218363904-dSMh",
            desc: "Advanced training in building and deploying deep learning models using Keras and TensorFlow frameworks for real-world AI applications."
        },
        {
            name: "AI & GENERATIVE AI BASICS",
            issuer: "Microsoft",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            link: "https://www.linkedin.com/posts/akhilanvengala_microsoftlearn-ai-generativeai-activity-7428675309811539968-QPDR",
            desc: "Foundational certification in Artificial Intelligence and Generative AI concepts, exploring the future of intelligent systems with Microsoft."
        },
        {
            name: "GOOGLE CROWDSOURCE HACKATHON",
            issuer: "Google",
            logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
            link: "https://www.linkedin.com/posts/akhilanvengala_hackathon-googlecrowdsource-buildathon2k26-activity-7428745043210932224-qFlr",
            desc: "Successfully participated and completed the AI/ML certification program by GDSC, gaining hands-on experience in building machine learning models."
        },
        {
            name: "GETTING STARTED WITH AI",
            issuer: "IBM SkillsBuild",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
            link: "https://www.linkedin.com/posts/akhilanvengala_artificialintelligence-ibm-ibmskillsbuild-activity-7428740905215447040-uw5Q",
            desc: "Introductory program to artificial intelligence, machine learning, and its ethical implications, certified by IBM SkillsBuild."
        },
        {
            name: "CYBERSECURITY HACKATHON",
            issuer: "VBIT",
            logo: vbitLogo,
            link: "https://www.linkedin.com/posts/akhilanvengala_cybersecurity-hackathonwinner-1stprize-activity-7431326376869294080-dwxe",
            desc: "Participated in intensive cybersecurity challenges involving network forensics and vulnerability exploitation at the VBIT hackathon."
        },
        {
            name: "JAVA PROGRAMMING",
            issuer: "Infosys Springboard",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
            link: "https://github.com/Akhilan9/Certificates/blob/main/Java%20Certificate.pdf",
            desc: "Certified in advanced Java programming and software development lifecycles through the Infosys Springboard digital learning platform."
        },
        {
            name: "PYTHON FULL STACK DEVELOPER",
            issuer: "AICTE - EduSkills",
            logo: aicteLogo,
            link: "https://www.linkedin.com/posts/akhilanvengala_python-fullstackdevelopment-webdevelopment-activity-7428674092834222081-XXm0",
            desc: "Completed a virtual internship in Python Full Stack development, building scalable web applications with modern backend architectures."
        }
    ];

    const speakingEngagements = [
        {
            title: "Seminar on IoT with Raspberry Pi",
            description: "Conducted a technical session for seniors demonstrating IoT architecture and real-time cloud data collection using Raspberry Pi.",
            details: "Fundamentals of IoT architecture, sensor integration, and cloud platform syncing were demonstrated to simplify complex connected systems.",
            image: iotImg
        },
        {
            title: "National Technology Day Anchor",
            description: "Served as the official host for the National Technology Day celebrations, coordinating technical segments and guest interactions.",
            details: "Managed event flow for a large audience, strengthening leadership and public speaking skills while celebrating national innovations.",
            image: techDayImg
        },
        {
            title: "AI & ML Seminar at DPS",
            description: "Introduced Artificial Intelligence and Machine Learning to young minds at Delhi Public School, simplifying advanced tech concepts.",
            details: "Covered basics of model training, real-world AI applications like self-driving cars, and the future impact of emerging technologies.",
            image: aiSeminarImg
        },
        {
            title: "Student Outreach Program",
            description: "Led an outreach session at HRD School of Excellence to inspire students through interactive tech demonstrations and knowledge sharing.",
            details: "Engaged with students in Ibrahimpatnam to discuss the future of technology, fostering a community of young innovators through meaningful discussions.",
            image: outreachImg
        },
        {
            title: "Cybersecurity Hackathon 1st Prize",
            description: "Secured the top spot in the Cybersecurity Hackathon organized by the Department of IT, VBIT.",
            details: "Demonstrated exceptional problem-solving skills in network security and vulnerability assessments, winning 1st prize among competitive teams.",
            image: cyberHackathonImg
        }
    ];

    const spokenLanguages = ["English", "Telugu", "Hindi"];

    return (
        <>
            <Cursor />
            
            {/* NOISE GRAIN OVERLAY */}
            <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>

            <main className="bg-[#e8e6df] text-black min-h-screen">
                {/* NAVBAR */}
                <nav className="fixed top-0 left-0 w-full z-50 bg-[#e8e6df]/90 backdrop-blur-md border-b border-black/10">
                    <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
                        <h1
                            onClick={() => window.location.reload()}
                            className="text-3xl sm:text-5xl font-black uppercase tracking-tight hover-target cursor-pointer"
                        >
                            AKHILAN
                        </h1>

                        <p className="hidden lg:block text-sm font-medium tracking-wide">
                            Engineering Intelligent Systems For The Future.
                        </p>

                        <div className="hidden md:flex gap-10 text-sm font-semibold uppercase tracking-widest">
                            <a 
                                href="#projects" 
                                onClick={(e) => scrollToSection(e, "#projects")}
                                className="hover-target relative group py-1"
                            >
                                Projects
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>

                            <a 
                                href="#skills" 
                                onClick={(e) => scrollToSection(e, "#skills")}
                                className="hover-target relative group py-1"
                            >
                                Skills
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>

                            <a 
                                href="#outreach" 
                                onClick={(e) => scrollToSection(e, "#outreach")}
                                className="hover-target relative group py-1"
                            >
                                Outreach
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>

                            <a 
                                href="#contact" 
                                onClick={(e) => scrollToSection(e, "#contact")}
                                className="hover-target relative group py-1"
                            >
                                Contact
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </div>
                    </div>
                </nav>

                {/* HERO TOP: NAME & PHOTO */}
                <section className="pt-32 pb-16 px-8 max-w-7xl mx-auto min-h-[90vh] flex items-center">
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-20">
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex-1 text-center lg:text-left"
                        >
                            <h1 className="text-[12vw] lg:text-[140px] font-black leading-[0.8] tracking-tighter uppercase text-black lg:whitespace-nowrap">
                                {"AKHILAN".split("").map((letter, i) => (
                                    <motion.span 
                                        key={i} 
                                        variants={itemVariants}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </h1>
                            <motion.p 
                                variants={itemVariants}
                                className="mt-8 text-xl md:text-2xl font-medium text-black/60 max-w-[500px] mx-auto lg:mx-0"
                            >
                                Engineering Intelligent Systems For The Future.
                            </motion.p>
                        </motion.div>

                        <div className="flex-1 relative">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                                whileHover={{ rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="relative z-10 w-full max-w-[450px] aspect-[4/5] rounded-[40px] overflow-hidden border-8 border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] hover-target"
                            >
                                <img src={profile} className="w-full h-full object-cover" alt="Akhilan" />
                            </motion.div>
                            {/* Decorative background shape */}
                            <div className="absolute -top-10 -right-10 w-full h-full bg-black/5 rounded-[40px] -z-10 rotate-6"></div>
                        </div>
                    </div>
                </section>

                {/* HERO BOTTOM: STATS & BIO */}
                <section className="py-16 px-8 max-w-7xl mx-auto border-t border-black/10">
                    <div className="grid lg:grid-cols-2 gap-32 items-start">
                        {/* LEFT: STATS */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-24 flex flex-col items-center text-center"
                        >
                            <div className="group text-center">
                                <h3 className="text-6xl md:text-8xl font-black tracking-tighter group-hover:text-black transition-colors">9.05</h3>
                                <p className="text-xl font-bold uppercase tracking-widest text-black/40 mt-2">
                                    Current CGPA
                                </p>
                            </div>

                            <div className="group text-center">
                                <h3 className="text-6xl md:text-8xl font-black tracking-tighter group-hover:text-black transition-colors">1st</h3>
                                <p className="text-xl font-bold uppercase tracking-widest text-black/40 mt-2">
                                    Prize Winner - Cybersecurity CTF
                                </p>
                            </div>
                        </motion.div>

                        {/* RIGHT: BIO & LINKS */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <p className="text-4xl leading-tight font-medium text-black">
                                AI Engineer, Cybersecurity Enthusiast, and Full
                                Stack Developer focused on building scalable
                                intelligent systems, solving complex problems, and
                                creating impactful digital experiences.
                            </p>

                            <div className="flex flex-col md:flex-row flex-wrap gap-6">
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover-target bg-black text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition duration-300 text-center"
                                >
                                    Resume
                                </a>

                                <a
                                    href="https://github.com/akhilan9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover-target border-2 border-black px-12 py-6 rounded-full font-bold text-xl hover:bg-black hover:text-white hover:scale-105 transition duration-300 text-center"
                                >
                                    GitHub
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/akhilanvengala"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover-target border-2 border-black px-12 py-6 rounded-full font-bold text-xl hover:bg-black hover:text-white hover:scale-105 transition duration-300 text-center"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* PROJECTS - DARK SECTION */}
                <div className="bg-black text-white py-32 w-full mt-20">
                    <motion.section 
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="px-8 max-w-7xl mx-auto"
                    >
                        <motion.h2 
                            id="projects"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl font-black uppercase mb-20 tracking-tight scroll-mt-32 text-white"
                        >
                            Projects
                        </motion.h2>

                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-10"
                        >
                            {projects.map((project, index) => (
                                <motion.div 
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ 
                                        y: -10,
                                        rotateX: 2,
                                        rotateY: -2,
                                        scale: 1.02
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="group border border-white/20 p-10 rounded-[30px] hover:bg-white hover:text-black transition-all duration-500 hover-target flex flex-col perspective-1000 shadow-sm hover:shadow-2xl bg-white/5"
                                >
                                    <h3 className="text-3xl font-black mb-4 uppercase">{project.title}</h3>
                                    <p className="text-lg opacity-60 mb-8 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-10">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-4 py-2 border border-white/20 rounded-full text-sm font-bold uppercase tracking-wider group-hover:border-black/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-lg font-bold border-b-2 border-white group-hover:border-black pb-1 w-max group-hover:scale-105 transition-transform">
                                        View Project ↗
                                    </a>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.section>
                </div>

                {/* EDUCATION & EXPERIENCE */}
                <motion.section 
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-16 px-8 max-w-7xl mx-auto border-t border-black/10 mt-10"
                >
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div>
                            <div className="flex items-center gap-4 mb-12">
                                <FaGraduationCap size={32} className="md:w-10 md:h-10" />
                                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">Education</h2>
                            </div>
                            <div className="space-y-12">
                                {education.map((edu, index) => (
                                    <div key={index} className="border-l-4 border-black pl-8 relative">
                                        <div className="absolute w-4 h-4 bg-black rounded-full -left-[10px] top-2"></div>
                                        <h3 className="text-xl sm:text-2xl font-bold uppercase break-words">{edu.school}</h3>
                                        <p className="text-base sm:text-lg font-medium opacity-60 mb-2">{edu.degree} | {edu.location}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-bold uppercase">{edu.duration}</span>
                                            <span className="text-xl font-black">{edu.stats}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-6 mb-12">
                                <FaShieldAlt size={32} className="md:w-12 md:h-12" />
                                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">Cyber Experience</h2>
                            </div>
                            <div className="space-y-8 text-xl leading-relaxed opacity-80">
                                <div className="p-8 bg-black/5 rounded-[30px] border border-black/5">
                                    <p className="mb-6 font-medium text-lg leading-relaxed">Actively participated in cybersecurity challenges involving hidden data extraction, network traffic analysis, and web application security testing.</p>
                                    <ul className="space-y-4 list-disc pl-6 text-lg">
                                        <li>Solved steganography-based challenges involving hidden data embedded in images and files</li>
                                        <li>Performed packet analysis to identify network activity and potential vulnerabilities</li>
                                        <li>Practiced web application security testing and request interception</li>
                                        <li>Applied cryptographic tools to encrypt, decrypt, and analyze secured data</li>
                                    </ul>
                                    <div className="mt-8 pt-8 border-t border-black/10">
                                        <p className="text-sm font-black uppercase mb-2 tracking-widest">Tools Used:</p>
                                        <p className="text-lg opacity-70">Wireshark, Burp Suite, CryptoForge, Snow</p>
                                    </div>
                                    <div className="mt-6">
                                        <p className="text-sm font-black uppercase mb-2 tracking-widest">Skills Developed:</p>
                                        <p className="text-lg opacity-70 italic">Network traffic analysis, vulnerability testing, cryptographic analysis, digital forensics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ACHIEVEMENTS & ACTIVITIES - DARK SECTION */}
                <div className="bg-black text-white py-32 w-full mt-20">
                    <motion.section 
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="px-8 max-w-7xl mx-auto"
                    >
                        <div className="grid lg:grid-cols-2 gap-20">
                            {/* LEFT: ACHIEVEMENTS */}
                            <div>
                                <div className="flex items-center gap-6 mb-12">
                                    <FaTrophy size={32} className="text-white md:w-12 md:h-12" />
                                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">Achievements</h2>
                                </div>
                                <div className="grid gap-6">
                                    {achievements.map((ach, i) => (
                                        <div key={i} className="flex items-center gap-6 p-6 sm:p-8 bg-white/5 rounded-[30px] border border-white/10 hover:bg-white hover:text-black transition-all duration-500 hover-target">
                                            <div className="w-3 h-3 bg-white rounded-full shrink-0"></div>
                                            <p className="text-lg sm:text-xl font-bold uppercase tracking-tight break-words">{ach}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT: TECHNICAL ACTIVITIES */}
                            <div>
                                <div className="flex items-center gap-6 mb-12">
                                    <FaLaptopCode size={32} className="text-white md:w-12 md:h-12" />
                                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">Activities</h2>
                                </div>
                                <div className="p-10 bg-white/5 rounded-[40px] border border-white/10">
                                    <ul className="space-y-6 text-xl opacity-80 list-disc pl-8 font-medium">
                                        <li>Presented "AI Powered E-waste Management System" at the 10th National Techno Exhibition 2026, Bengaluru.</li>
                                        <li>Participated in HACKFUSION 2026 - International Level Hackathon & Project Expo (JNTUH).</li>
                                        <li>Participated in cybersecurity CTF challenges and secured 1st prize.</li>
                                        <li>Exploring machine learning frameworks such as TensorFlow and Keras.</li>
                                        <li>Demonstrated IoT and software projects to school students.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>

                {/* CERTIFICATES */}
                <motion.section 
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-16 px-8 max-w-7xl mx-auto border-t border-black/10 mt-10"
                >
                    <div className="flex items-center gap-6 mb-16">
                        <FaAward size={48} className="text-black md:w-16 md:h-16" />
                        <h2 className="text-3xl sm:text-6xl font-black uppercase tracking-tight">Certificates</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {certificates.map((cert, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ y: -10 }}
                                className="p-8 md:p-12 bg-white rounded-[40px] border border-black/5 flex flex-col items-start text-left hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-10 p-4 border border-black/5 group-hover:scale-110 transition-transform duration-500">
                                    <img src={cert.logo} alt={cert.issuer} className="max-w-full max-h-full object-contain" />
                                </div>
                                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
                                    {cert.desc}
                                </p>
                                <h3 className="text-3xl font-black uppercase tracking-tight mb-2">{cert.name}</h3>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-8">{cert.issuer}</p>
                                <a 
                                    href={cert.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="mt-auto inline-block text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:scale-105 transition-transform hover-target"
                                >
                                    View Certificate ↗
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* SPEAKING & SEMINARS */}
                <motion.section 
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-20 md:py-32 px-8 max-w-7xl mx-auto border-t border-black/10"
                >
                    <div className="flex items-center gap-6 mb-24">
                        <FaLaptopCode size={48} className="text-black md:w-16 md:h-16" />
                        <h2 id="outreach" className="text-4xl md:text-6xl font-black uppercase tracking-tight scroll-mt-32">Impact & Outreach</h2>
                    </div>

                    <div className="space-y-40">
                        {speakingEngagements.map((event, index) => (
                            <motion.div 
                                key={index}
                                variants={itemVariants}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
                            >
                                <div className="flex-1 w-full">
                                    <div className="relative group overflow-hidden rounded-[50px] border-8 border-white shadow-2xl hover-target">
                                        <img 
                                            src={event.image} 
                                            alt={event.title} 
                                            className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                </div>
                                <div className="flex-1 space-y-8 text-left">
                                    <div className="inline-block px-8 py-2 bg-black text-white rounded-full text-sm font-black uppercase tracking-widest">
                                        Leadership & Impact
                                    </div>
                                    <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] break-words">
                                        {event.title}
                                    </h3>
                                    <p className="text-xl md:text-2xl font-bold leading-tight text-black/80">
                                        {event.description}
                                    </p>
                                    <p className="text-lg leading-relaxed opacity-60 font-medium">
                                        {event.details}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* SKILLS - DARK SECTION */}
                <div className="bg-black text-white py-32 w-full mt-20">
                    <motion.section 
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="px-8 max-w-7xl mx-auto"
                    >
                        <div className="flex items-center gap-6 mb-20">
                            <FaTerminal size={48} className="text-white md:w-16 md:h-16" />
                            <motion.h2
                                id="skills"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-5xl font-black uppercase tracking-tight scroll-mt-32 text-white"
                            >
                                Tech Stack
                            </motion.h2>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    className="group hover-target bg-white/5 rounded-[40px] p-8 h-[240px] flex flex-col justify-center items-center border border-white/10 hover:border-white/40 hover:shadow-[0_30px_60px_-15px_rgba(255,255,255,0.05)] transition-all duration-500"
                                >
                                    <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100">
                                        {skill.icon}
                                    </div>

                                    <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 group-hover:text-white transition-colors duration-500 text-center">
                                        {skill.name}
                                    </h3>
                                    <span className="mt-2 text-[10px] font-black uppercase opacity-20 group-hover:opacity-100 transition-opacity px-3 py-1 border border-white/20 rounded-full">
                                        {skill.cat}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.section>
                </div>

                <motion.section 
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="py-20 md:py-32 px-8 max-w-7xl mx-auto"
                >
                    <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
                        {/* LEFT: INFO */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-40 space-y-12">
                                <h2 id="contact" className="text-4xl md:text-6xl font-black uppercase tracking-tighter scroll-mt-40">Let's <br /> Connect</h2>
                                <div className="space-y-12">
                                    <div className="flex items-start gap-6">
                                        <div className="mt-1 text-2xl opacity-40"><FaMapMarkerAlt /></div>
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Location:</p>
                                            <p className="text-lg font-bold">Hyderabad, Telangana</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="mt-1 text-2xl opacity-40"><FaEnvelope /></div>
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Email Me:</p>
                                            <p className="text-lg font-bold">akhilanvengala9@gmail.com</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Socials</p>
                                        <div className="flex gap-6">
                                            <a href="https://linkedin.com/in/akhilanvengala" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all text-xl">
                                                <FaLinkedin />
                                            </a>
                                            <a href="https://github.com/akhilan9" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all text-xl">
                                                <SiGithub />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-black/5">
                                        <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Spoken Languages</p>
                                        <div className="flex flex-wrap gap-3">
                                            {spokenLanguages.map((lang, i) => (
                                                <span key={i} className="px-4 py-2 bg-black/5 rounded-full text-[10px] font-black uppercase tracking-widest">{lang}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: FORM */}
                        <div className="lg:w-2/3 bg-white p-12 rounded-[50px] shadow-sm border border-black/5">
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Full Name</label>
                                        <div className="relative">
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Your Name" 
                                                required 
                                                className="w-full bg-black/5 border border-black/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-black transition-colors"
                                            />
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-30 text-xl"><FaUser /></div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Email Address</label>
                                        <div className="relative">
                                            <input 
                                                type="email" 
                                                name="email" 
                                                placeholder="your@email.com" 
                                                required 
                                                className="w-full bg-black/5 border border-black/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-black transition-colors"
                                            />
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-30 text-xl"><FaEnvelope /></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Subject</label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            name="subject" 
                                            placeholder="Your Subject" 
                                            required 
                                            className="w-full bg-black/5 border border-black/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-black transition-colors"
                                        />
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-30 text-xl"><FaUser /></div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Your Message</label>
                                    <textarea 
                                        name="message" 
                                        placeholder="Write your message here..." 
                                        required 
                                        rows="6"
                                        className="w-full bg-black/5 border border-black/10 rounded-3xl px-6 py-6 focus:outline-none focus:border-black transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    className="bg-black text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-4 group"
                                >
                                    Send Me Message 
                                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </button>
                                
                                {formStatus && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: 10 }} 
                                        animate={{ opacity: 1, y: 0 }} 
                                        className="text-sm font-bold uppercase tracking-widest text-center mt-4"
                                    >
                                        {formStatus}
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </div>
                </motion.section>

                {/* FINAL CTA - DARK */}
                <div className="bg-black text-white w-full">
                    <section className="py-40 flex flex-col items-center justify-center border-t border-white/10">
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl font-medium mb-8 text-white/60"
                        >
                            Wanna work together?
                        </motion.p>
                        <motion.a 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            href="mailto:akhilanvengala9@gmail.com"
                            className="text-[15vw] lg:text-[240px] font-black uppercase tracking-tighter leading-none hover:scale-105 transition-transform duration-700 hover-target inline-block text-white"
                        >
                            HIRE ME!
                        </motion.a>
                    </section>
                </div>
            </main>

            {/* SCROLL TO TOP BUTTON WITH PROGRESS */}
            {showScrollTop && (
                <div className="fixed bottom-10 right-10 z-[100] flex items-center justify-center">
                    <svg className="w-16 h-16 transform -rotate-90">
                        <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="transparent"
                            className="text-black/5"
                        />
                        <motion.circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="transparent"
                            className="text-black"
                            style={{ pathLength: scrollYProgress }}
                        />
                    </svg>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={scrollToTop}
                        className="absolute text-black hover:scale-125 transition-all duration-300 hover-target"
                    >
                        <HiOutlineArrowUp size={24} />
                    </motion.button>
                </div>
            )}
        </>
    );
}
