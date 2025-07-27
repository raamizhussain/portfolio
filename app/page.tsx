"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Code,
  Database,
  Globe,
  Award,
  Download,
  ExternalLink,
  ChevronUp,
  Sun,
  Moon,
  Menu,
  X,
  Briefcase,
  Trophy,
  MessageSquare,
  Zap,
  Rocket,
  Star,
  Target,
  Brain,
  Cpu,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function FuturisticPortfolio() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { theme, setTheme } = useTheme()
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "education",
        "experience",
        "certifications",
        "achievements",
        "contact",
      ]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/20 via-transparent to-purple-950/20"></div>

        {/* Floating Particles */}
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 20}s`,
              }}
            />
          ))}
        </div>

        {/* Mouse Glow Effect */}
        <div
          className="pointer-events-none fixed w-96 h-96 rounded-full opacity-10 transition-all duration-300 ease-out z-10"
          style={{
            background: "radial-gradient(circle, cyan 0%, transparent 70%)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent glow-text">
              RAAMIZ.H.S
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "education", label: "Education" },
                { id: "experience", label: "Experience" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 hover:glow-text relative ${
                    activeSection === item.id ? "text-cyan-400 glow-text" : "text-slate-300"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 glow-line"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button> */}

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-cyan-500/10 hover:text-cyan-400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-slate-950/95 border-t border-cyan-500/20">
            <div className="px-4 py-2 space-y-1">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "education", label: "Education" },
                { id: "experience", label: "Experience" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-md transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-16 relative z-10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="hero-content">
            {/* Animated Name */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tight">
                <span className="inline-block animate-glow-pulse bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hero-text">
                  RAAMIZ HUSSAIN SHIKOH
                </span>
              </h1>
              <div className="text-base sm:text-lg md:text-2xl text-cyan-300 font-light tracking-wide mb-3 text-center typewriter">
                COMPUTER SCIENCE STUDENT at SRM 
              </div>
              <div className="h-0.5 sm:h-1 w-24 sm:w-32 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto glow-line"></div>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12 max-w-4xl mx-auto leading-snug text-center">
              <span className="text-white">Building </span>
              <span className="text-cyan-400 glow-text">code</span>
              <span className="text-white">. Pushing </span>
              <span className="text-white">boundaries</span>
              <span className="text-white"> with </span>
              <span className="text-purple-400 glow-text">Machine Learning </span>
              <span className="text-white">and </span>
              <span className="text-pink-400 glow-text">Data Science</span>
              <span className="text-white">.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              
              
              <a
                href="https://drive.google.com/file/d/14e4GlQ8wYktSrTfQBgX55IBHAJ8YtOik/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="futuristic-btn futuristic-btn-primary group px-8 py-4 text-lg font-semibold">
                  <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  View Resume
                </Button>
              </a>



              <Button
                onClick={() => scrollToSection("projects")}
                className="futuristic-btn futuristic-btn-secondary group px-8 py-4 text-lg font-semibold"
              >
                <Rocket className="mr-3 h-6 w-6 group-hover:animate-pulse" />Projects
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="futuristic-btn futuristic-btn-accent group px-8 py-4 text-lg font-semibold"
              >
                <MessageSquare className="mr-3 h-6 w-6 group-hover:animate-pulse" />Contact
              </Button>
            </div>

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">
            <Zap className="inline-block mr-4 h-8 w-8" />
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-8">
                <div className="profile-container">
                  <Image
                    src="/images/4.jpg"
                    alt="Raamiz Profile"
                    width={256}
                    height={256}
                    className="rounded-full object-cover profile-image"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-spin-slow"></div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="glass-card p-8">
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  I'm a 3rd-year Computer Science student at SRM University with a focus on Machine Learning and Data Science. I build intelligent systems using NLP, computer vision, and deep learning. I also enjoy crafting full-stack web apps that are clean, responsive, and data-driven.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="info-item">
                    <Calendar className="h-6 w-6 text-cyan-400" />
                    <div>
                      <p className="font-semibold text-white">Date of Birth</p>
                      <p className="text-slate-400">October 31, 2005</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <MapPin className="h-6 w-6 text-purple-400" />
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-slate-400">Chennai, India</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <GraduationCap className="h-6 w-6 text-pink-400" />
                    <div>
                      <p className="font-semibold text-white">CGPA</p>
                      <p className="text-slate-400">9.62/10</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <Brain className="h-6 w-6 text-green-400" />
                    <div>
                      <p className="font-semibold text-white">Interests</p>
                      <p className="text-slate-400">Machine Learning, Data Science and Web Dev</p>
                    </div>
                  </div>
                </div>

                <a
                href="https://drive.google.com/file/d/14e4GlQ8wYktSrTfQBgX55IBHAJ8YtOik/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >

                  <Button className="futuristic-btn futuristic-btn-primary">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>

                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">
            <Cpu className="inline-block mr-4 h-8 w-8" />
            Skills & Technologies
          </h2>

          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="futuristic-tabs mb-12">
              <TabsTrigger value="languages" className="futuristic-tab">
                Languages
              </TabsTrigger>
              <TabsTrigger value="ml" className="futuristic-tab">
                Machine Learning
              </TabsTrigger>

              <TabsTrigger value="tools" className="futuristic-tab">
                Tools
              </TabsTrigger>


            </TabsList>

            <TabsContent value="languages">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { name: "Python", level: 90, color: "from-yellow-400 to-orange-400" },
                  { name: "C++", level: 80, color: "from-blue-400 to-blue-600" },
                  { name: "Javascript", level: 65, color: "from-green-400 to-blue-500" },
                  { name: "C", level: 70, color: "from-red-400 to-orange-500" },
                  { name: "Java", level: 60, color: "from-purple-400 to-pink-500" },
                  { name: "MySQL", level: 70, color: "from-orange-400 to-red-500" },
                  // { name: "SQL", level: 75, color: "from-cyan-400 to-blue-500" },
                  // { name: "Go", level: 70, color: "from-teal-400 to-cyan-500" },
                ].map((skill) => (
                  <div key={skill.name} className="skill-card group">
                    <div className="skill-icon">
                      <Code className="h-8 w-8 text-white group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">{skill.name}</h3>
                    <div className="skill-progress">
                      <div
                        className={`skill-progress-fill bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">{skill.level}%</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ml">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { name: "Tensorflow", level: 80, color: "from-gray-400 to-blue-500" },
                  { name: "Scikit-learn", level: 70, color: "from-slate-400 to-slate-600" },
                  { name: "Numpy", level: 90, color: "from-red-400 to-green-600" },
                  { name: "Pandas", level: 80, color: "from-blue-400 to-orange-600" },
                  { name: "Matplotlib", level: 85, color: "from-green-300 to-pink-500" },
                  { name: "HuggingFace Transformers", level: 60, color: "from-green-600 to-green-800" },
                  { name: "Streamlit", level: 75, color: "from-teal-400 to-orange-500" },
                  // { name: "TailwindCSS", level: 95, color: "from-cyan-300 to-blue-500" },
                ].map((skill) => (
                  <div key={skill.name} className="skill-card group">
                    <div className="skill-icon">
                      <Globe className="h-8 w-8 text-white group-hover:animate-spin" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">{skill.name}</h3>
                    <div className="skill-progress">
                      <div
                        className={`skill-progress-fill bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">{skill.level}%</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            

            <TabsContent value="tools">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { name: "Git/GitHub", level: 80, color: "from-orange-400 to-red-500" },
                  { name: "VS Code", level: 95, color: "from-blue-400 to-blue-600" },
                  { name: "Kaggle", level: 80, color: "from-blue-500 to-cyan-500" },
                  { name: "Jupyter", level: 90, color: "from-blue-600 to-blue-800" },
                  { name: "Google Colab", level: 70, color: "from-yellow-400 to-orange-500" },
                  { name: "Figma", level: 90, color: "from-green-400 to-green-600" },
                  
                  { name: "Excel", level: 75, color: "from-yellow-400 to-red-500" },
                  { name: "Streamlit", level: 75, color: "from-purple-400 to-pink-500" },
                ].map((skill) => (
                  <div key={skill.name} className="skill-card group">
                    <div className="skill-icon">
                      <Database className="h-8 w-8 text-white group-hover:animate-bounce" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">{skill.name}</h3>
                    <div className="skill-progress">
                      <div
                        className={`skill-progress-fill bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">{skill.level}%</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">
            <Rocket className="inline-block mr-4 h-8 w-8" />
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              
              {
                title: "CrowdSafe: AI-Powered Emergency Response & Monitoring Platform",
                description:
                  "An AI-driven platform for real-time crowd monitoring and emergency response, featuring heatmaps, smart alerts, and predictive analytics for safer public events.",
                tech: ["Python", "Computer Vision", "ML/DL", "NLP", "Geospatial AI"],
                category: "Computer Vision",
                featured: true,
                code: "https://github.com/raamizhussain/AI-POWERED-CROWD-MONITORING-EMERGENCY-RESPONSE-PLATFORM-",
              },
              {
                title: "Fake News Detector",
                description:
                  "Detecting fake news using text, images and video with BERT, CNN, and Grad-CAM. Includes explainable predictions and a real-time dashboard.",
                tech: ["Python", "BERT", "CNN", "Streamlit", "Grad-CAM"],
                category: "Multi-modal AI system",
                featured: false,
                code: "https://github.com/raamizhussain/Fake-News-Detector",
              },
              {
                title: "Shirt Colour Detector",
                description:
                  "Advanced computer vision system for analysing shirt colours in images and videos. Supports YOLOv5, YOLOv8, and DETR with clustering, analytics, and a real-time dashboard.",
                tech: ["Python", "YOLOv5/v8", "DETR", "OpenCV", "Streamlit", "K-Means", "Matplotlib"],
                category: "Visual Intelligence",
                featured: false,
                code: "https://github.com/raamizhussain/Shirt-Color-Detector",
              },
              {
                title: "Age and Gender Detector",
                description:
                  "Built a real-time face analysis tool using CNNs to predict age and gender from webcam or uploaded images.",
                tech: ["Python", "TensorFlow", "OpenCV", "Streamlit"],
                category: "Computer Vision",
                featured: false,
                code: "https://github.com/raamizhussain/Age-Gender-Detector",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`group rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between min-h-[320px] ${
                  project.featured ? "border-yellow-400" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    {/* Gradient Category Badge */}
                    <Badge className="text-xs">{project.category}</Badge>


                    {project.featured && <Star className="h-5 w-5 text-yellow-400" />}
                  </div>

                  <h3 className="text-base font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 🔥 Tighter gap to button row */}
                <div className="mt-3 flex gap-2">
                  <a href={project.code} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="flex items-center gap-1 text-white bg-[#2ea043] hover:bg-[#27963e]"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </a>

                  {/* Live button still commented out for later use */}
                  {/*
                  <Button
                    size="sm"
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </Button>
                  */}
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>




      {/* Education Section */}
      <section id="education" className="py-32 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">
            <GraduationCap className="inline-block mr-4 h-8 w-8" />
            Education Journey
          </h2>

          <div className="timeline">
            {[
              {
                degree: "Bachelor of Technology - Computer Science Engineering",
                institution: "SRM Institute of Science and Technology",
                duration: "2023 - 2027",
                grade: "CGPA: 9.63/10",
                description:
                  "Specializing in Machine Learning and Data Science, with a strong focus on real-world AI applications. Continuously learning and building through personal projects.",
                current: true,
              },
              {
                degree: "Higher Secondary Certificate (12th) - CBSE",
                institution: "Kendriya Vidyalaya Hebbal, Bangalore",
                duration: "2022 - 2023",
                grade: "82%",
                description: "Completed 12th in Science stream. Participated in KVS Nationals at Delhi for Badminton representing Bangalore region.",
                current: false,
              },
              {
                degree: "Secondary School Certificate (10th) - CBSE",
                institution: "Kendriya Vidyalaya Hebbal, Bangalore",
                duration: "2020 - 2021",
                grade: "93.8%",
                description: "All-rounder student with excellence in academics and extracurricular activities.",
                current: false,
              },
            ].map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className={`timeline-dot ${edu.current ? "current" : ""}`}>
                    <GraduationCap className="h-6 w-6" />
                  </div>
                </div>
                <div className="timeline-content">
                  <div className="glass-card p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`education-badge ${edu.current ? "current" : ""}`}>
                        {edu.current ? "Current" : "Completed"}
                      </Badge>
                      <span className="text-slate-400 text-sm">{edu.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-cyan-400 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-purple-400 font-medium mb-3">{edu.grade}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">
            <Briefcase className="inline-block mr-4 h-8 w-8" />
            Experience & Internships
          </h2>

          <div className="space-y-8">
            {[
              {
                role: "Machine Learning Intern  ",
                // company: "TechStart Solutions",
                duration: "June 2025 - July 2025",
                type: " Internship ",
                responsibilities: [
                  "Fine-tuned a pre-trained CNN (VGGFace) on the IMDB-WIKI dataset for accurate age prediction",
                  "Built a logic-based gender classifier that dynamically adapts based on hair length and age range (20–30), with a custom GUI",
                  "Developed a computer vision model to detect car colours, count vehicles, and identify people at traffic signals",
                  "Designed interactive GUIs for all models to support real-time testing and visualization of predictions",
                ],
              },
              
            ].map((exp, index) => (
              <div key={index} className="experience-card group">
                <div className="experience-header">
                  <div className="experience-icon">
                    <Briefcase className="h-8 w-8 text-white group-hover:animate-pulse" />
                  </div>
                  <div className="experience-info">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <Badge className="experience-type-badge">{exp.type}</Badge>
                    </div>
                    {/* <p className="text-cyan-400 font-semibold text-lg mb-1">{exp.company}</p> */}
                    <p className="text-slate-400">{exp.duration}</p>
                  </div>
                </div>
                <div className="experience-content">
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="experience-item">
                        <Target className="h-4 w-4 text-cyan-400 mt-1 flex-shrink-0" />
                        <span className="text-slate-300">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">
            <Award className="inline-block mr-4 h-8 w-8" />
            Certifications & Achievements
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cloud Computing Fundamentals",
                platform: "NPTEL",
                date: "2025",
                color: "from-blue-400 to-cyan-400",
              },
              {
                title: "DataBase Management Systems",
                platform: "NPTEL",
                date: "2025",
                color: "from-orange-400 to-yellow-400",
              },
              {
                title: "Full Stack Web Development",
                platform: "Udemy",
                date: "2025",
                color: "from-green-400 to-emerald-400",
              },
              {
                title: "Java Programming",
                platform: "NPTEL",
                date: "2024",
                color: "from-purple-400 to-pink-400",
              },
              {
                title: "Advanced Python Programming",
                platform: "Udemy",
                date: "2024",
                color: "from-yellow-400 to-orange-400",
              },
              // {
              //   title: "Google Cloud Associate",
              //   platform: "Google Cloud",
              //   date: "2024",
              //   color: "from-red-400 to-pink-400",
              // },
            ].map((cert, index) => (
              <div key={index} className="certification-card group">
                <div className={`certification-icon bg-gradient-to-br ${cert.color}`}>
                  <Award className="h-8 w-8 text-white group-hover:animate-spin" />
                </div>
                <div className="certification-content">
                  <h3 className="certification-title">{cert.title}</h3>
                  <p className="certification-platform">{cert.platform}</p>
                  <p className="certification-date">{cert.date}</p>
                  {/* <Button className="certification-btn">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">
            <Trophy className="inline-block mr-4 h-8 w-8" />
            Achievements & Hackathons
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              // {
              //   title: "Smart India Hackathon 2024",
              //   award: "🏆 Winner",
              //   year: "2024",
              //   description: "Developed an AI-powered solution for traffic management in smart cities.",
              //   color: "from-yellow-400 to-orange-400",
              // },
              // {
              //   title: "SRM Hackathon",
              //   award: "🥈 2nd Place",
              //   year: "2024",
              //   description: "Created a sustainable energy monitoring system for residential buildings.",
              //   color: "from-gray-300 to-gray-500",
              // },
              // {
              //   title: "CodeChef Monthly Contest",
              //   award: "⭐ 3-Star Rating",
              //   year: "2023",
              //   description: "Achieved 3-star rating with consistent performance in competitive programming.",
              //   color: "from-purple-400 to-pink-400",
              // },
              // {
              //   title: "Google Developer Student Club",
              //   award: "👑 Core Team Member",
              //   year: "2023-2024",
              //   description: "Led workshops on web development and organized tech events for 200+ students.",
              //   color: "from-blue-400 to-cyan-400",
              // },
              {
                title: "Hack-n-droid VIT Hackathon",
                award: "🎯 Top 20",
                year: "2025",
                description: "Ranked in the top 20 out of 100+ teams for developing 'LexIntellect' — a Legal AI platform designed for contract analysis, clause extraction, and legal outcome prediction using NLP and BERT-based models.",
                color: "from-green-400 to-emerald-400",
              },
              {
                title: "ACM Club SRM Hackathon",
                award: "🎯 Top 10",
                year: "2024",
                description: "Ranked in the top 10 out of 70+ teams for building a Personal Medical Record platform with chatbot integration for seamless doctor access.",
                color: "from-orange-400 to-red-400",
              },
            ].map((achievement, index) => (
              <div key={index} className="achievement-card group">
                <div className={`achievement-icon bg-gradient-to-br ${achievement.color}`}>
                  <Trophy className="h-8 w-8 text-white group-hover:animate-bounce" />
                </div>
                <div className="achievement-content">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <Badge className="achievement-year">{achievement.year}</Badge>
                  </div>
                  <p className="achievement-award">{achievement.award}</p>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">
            <MessageSquare className="inline-block mr-4 h-8 w-8" />
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="contact-info">
              <h3 className="text-3xl font-bold text-white mb-6">Let's Build Something Amazing Together!</h3>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, or just chat about the latest in
                tech. Drop me a message and let's create something extraordinary!
              </p>

              <div className="space-y-6">
                <div className="contact-item">
                  <div className="contact-icon bg-gradient-to-br from-cyan-400 to-blue-500">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="contact-label">Email</p>
                    <p className="contact-value">raamizhs@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon bg-gradient-to-br from-green-400 to-emerald-500">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="contact-label">Phone</p>
                    <p className="contact-value">+91 93536 45710</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon bg-gradient-to-br from-purple-400 to-pink-500">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="contact-label">Location</p>
                    <p className="contact-value">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                {/* <a href="https://linkedin.com/in/raamiz" target="_blank" rel="noopener noreferrer">
                  <Button className="social-btn linkedin">
                    <Linkedin className="h-6 w-6" />
                  </Button>
                </a>

                <a href="https://github.com/raamizhussain" target="_blank" rel="noopener noreferrer">
                  <Button className="social-btn github">
                    <Github className="h-6 w-6" />
                  </Button>
                </a>

                <a href="mailto:raamizhs@gmail.com">
                  <Button className="social-btn email">
                    <Mail className="h-6 w-6" />
                  </Button>
                </a> */}

              </div>
            </div>

            <div className="contact-form-container">
              <form
                className="contact-form"
                action="https://formspree.io/f/xqabvvna"
                method="POST"
              >
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <Input
                    className="futuristic-input"
                    placeholder="Your awesome name"
                    name="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <Input
                    type="email"
                    className="futuristic-input"
                    placeholder="your.email@example.com"
                    name="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <Textarea
                    className="futuristic-textarea"
                    placeholder="Tell me about your amazing project idea..."
                    rows={6}
                    name="message"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="futuristic-btn futuristic-btn-primary w-full text-lg py-4"
                >
                  <Rocket className="mr-3 h-6 w-6" />
                  Launch Message 🚀
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 relative z-10 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent glow-text mb-4">
                RAAMIZ
              </h3>
              <p className="text-slate-400 text-lg">Building the future, one line of code at a time.</p>
            </div>

            <div className="flex space-x-4 mt-8">
                <a href="https://linkedin.com/in/raamiz" target="_blank" rel="noopener noreferrer">
                  <Button className="social-btn linkedin">
                    <Linkedin className="h-6 w-6" />
                  </Button>
                </a>

                <a href="https://github.com/raamizhussain" target="_blank" rel="noopener noreferrer">
                  <Button
                    className="social-btn github text-white"
                    style={{ backgroundColor: "#2ea44f" }}
                  >
                    <Github className="h-6 w-6" />
                  </Button>
                </a>


                {/* <a href="mailto:raamizhs@gmail.com">
                  <Button className="social-btn email">
                    <Mail className="h-6 w-6" />
                  </Button>
                </a> */}

              </div>
          </div>

          <div className="border-t border-cyan-500/20 mt-12 pt-8 text-center">
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent glow-line mb-6"></div>
            <p className="text-slate-400 text-lg">© 2025 Raamiz. All rights reserved. </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 futuristic-btn futuristic-btn-primary p-4 rounded-full"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
