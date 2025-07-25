import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import {
  Github,
  ExternalLink,
  Mail,
  MapPin,
  Calendar,
  Award,
  Code,
  GraduationCap,
  Trophy,
  User,
  Briefcase,
  Moon,
  Sun,
} from "lucide-react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const projects = [
    {
      title: "CodeGeekCentral - An Ultimate Blogging Platform",
      description:
        "Built dedicated CMS (Content Management System) with pagination, indexing on database to enhance user experience. Handcrafted 4 endpoint APIs for user & one special endpoint to upload files using Multer. Used JWT authentication for server Independence and reduce server load for fast API transactions.",
      technologies: [
        "Next.js",
        "MERN Stack",
        "JWT",
        "Multer",
        "Tailwind",
        "TypeScript",
      ],
      github: "#",
    },
    {
      title: "CraftHaven - An Online Shopping Destination",
      description:
        "Developed caching feature to store API data and cart value in offline. Implemented algorithm to assign 'Best Seller' placeholder to seller with average max rating. Created dynamic routes for products using React-Router.",
      technologies: [
        "React.js",
        "React-Router",
        "Sass",
        "Firebase",
        "TypeScript",
      ],
      github: "#",
    },
    {
      title: "Memory Card",
      description:
        "Developed card-matching logic with dynamic difficulty levels and score tracking. Integrated PokeAPI for Pokémon data and optimized performance using Vite. Designed responsive UI with animations, modals, and interactive gameplay elements.",
      technologies: [
        "React.js",
        "React-Router",
        "Sass",
        "Firebase",
        "TypeScript",
      ],
      github: "#",
    },
  ];

  const skills = {
    languages: ["C/C++", "JavaScript", "TypeScript"],
    frameworks: ["React.js", "Next.js", "Node.js", "Express.js"],
    styling: ["CSS", "Sass", "Tailwind"],
    technologies: ["RESTful API", "SQL", "JWT auth"],
    tools: [
      "VS Code",
      "Git",
      "Postman",
      "CI/CD",
      "Firebase",
      "Webpack",
      "MongoDB",
    ],
  };

  const education = [
    {
      institution: "National Institute of Technology",
      location: "Raipur",
      degree: "B.Tech in Computer Science",
      duration: "Nov 2022 – May 2026",
      grade: "CGPA: 8.08",
    },
    {
      institution: "Shiva Public School",
      degree: "XII Class",
      duration: "Apr 2019 – Mar 2022",
      grade: "Percentage: 84.5%",
    },
    {
      institution: "Kendriya Vidyalaya",
      degree: "X Class",
      duration: "Apr 2009 – Mar 2019",
      grade: "Percentage: 97.1%",
    },
  ];

  const achievements = [
    "Maintained peak fitness & discipline through rigorous training, led cadets as a squad leader, resolving conflicts & delegating tasks efficiently",
    "Ranked among top 1.5% nationwide (KVS) in AISSCE 2019 with 97.1%, securing state topper position in Chhattisgarh",
    "Solved 500+ questions on LeetCode & other platforms",
    "Remark Skill Technical Workshop Certification on Python Programming held at IIT Roorkee between 12-13 August, 2023",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarFallback>SS</AvatarFallback>
            </Avatar>
            <span className="font-bold text-xl">Sakshi Sahu</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#about"
                className="text-sm hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-sm hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-sm hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#education"
                className="text-sm hover:text-primary transition-colors"
              >
                Education
              </a>
              <a
                href="#achievements"
                className="text-sm hover:text-primary transition-colors"
              >
                Achievements
              </a>
              <a
                href="#contact"
                className="text-sm hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                checked={isDarkMode}
                onCheckedChange={toggleTheme}
                aria-label="Toggle dark mode"
              />
              <Moon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Avatar className="w-32 h-32 mx-auto mb-8">
            <AvatarFallback className="text-4xl">SS</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Sakshi Sahu</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full Stack Developer | Computer Science Student at NIT Raipur |
            Passionate about building scalable web applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <User className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate Computer Science student at NIT Raipur with a
                strong foundation in full-stack development. I love creating
                efficient, scalable web applications and have experience working
                with modern technologies like React, Next.js, Node.js, and
                various databases.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Beyond coding, I maintain peak fitness through rigorous training
                and have leadership experience as a squad leader. I'm constantly
                learning and have solved 500+ problems on coding platforms to
                sharpen my problem-solving skills.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Raipur, Chhattisgarh, India</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    500+
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Problems Solved
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    8.08
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">CGPA at NIT</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    3+
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Major Projects
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    97.1%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Class X Score</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Styling</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.styling.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technologies.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">
                        {edu.institution}
                      </CardTitle>
                      <CardDescription className="text-base mt-1">
                        {edu.degree} {edu.location && `• ${edu.location}`}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4" />
                        {edu.duration}
                      </div>
                      <Badge variant="secondary">{edu.grade}</Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Trophy className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Achievements</h2>
          </div>
          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-base leading-relaxed">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center gap-3 justify-center mb-12">
            <Mail className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Get In Touch</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology. Feel free to
              reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg">
                <a href="mailto:your.email@example.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://leetcode.com/sahu-sakshi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="h-4 w-4 mr-2" />
                  LeetCode
                </a>
              </Button>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href="https://sakshisahu.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Portfolio
              </a>
              <a
                href="https://leetcode.com/sahu-sakshi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Code className="h-4 w-4" />
                LeetCode Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Sakshi Sahu. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
