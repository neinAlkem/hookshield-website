import { ExternalLink, MessageSquareOffIcon, SquaresIntersectIcon, TimerResetIcon } from "lucide-react";
import bagas from "../assets/team/baghas.jpg";
import byan from "../assets/team/byan.svg";
import farris from "../assets/team/farris.svg";
import irul from "../assets/team/irul.svg";
import yasin from "../assets/team/yasin.svg";

export const navItems = [
    { label: "Features", href: "#" },
    { label: "Team", href: "team" },
    { label: "FAQ", href: "faq" },
  ];

  export const teamItems = [
    {
      name: "BAGHAS RIZALUDDIN",
      position: "Project Manager",
      image: bagas,
      instagram: "https://www.instagram.com/bagasdrizal",
      linkedin: "https://www.linkedin.com/in/baghas-rizaluddin",
      github: "https://github.com/neinAlkem",
    },
    {
      name: "ABYAN RIFQI Z. M.",
      position: "FE Engineer",
      image: byan,
      instagram: "http://instagram.com/abyanrzm",
      linkedin: "http://lindkedin.com/in/abyanrifqi",
      github: "http://github.com/Byannn",
    },
    {
      name: "M RIZQI AL FARRIS",
      position: "QA Engineer",
      image: farris,
      instagram: "",
      linkedin: "",
      github: "",
    },
    {
      name: "AHMAD JAWAHIRUL I.",
      position: "ML / BE Engineer",
      image: irul,
      instagram: "",
      linkedin: "",
      github: "",
    },
    {
      name: "MUHAMMAD YASIN H.",
      position: "ML / BE Engineer",
      image: yasin,
      instagram: "",
      linkedin: "",
      github: "",
    },
  ];

  export const features = [
    {
      icon: <TimerResetIcon />,
      text: "Real-Time Email Phising Detection",
      description:
        "Real-time email scanning instantly analyzes incoming emails for  phishing, and malware attacks.",
    },
    {
      icon: <MessageSquareOffIcon />,
      text: "Notification Report",
      description:
        "Instant notification alerts users immediately when a suspicious email is detected, enabling quick action to prevent potential threats.",
    },
    {
      icon: <SquaresIntersectIcon />,
      text: "User-Friendly Interface",
      description:
        "Hookshield provide an intuitive experience, making it easy for users to navigate and perform tasks without confusion",
    },
    {
      icon: <ExternalLink />,
      text: "Browser Extenstion App",
      description:
        "Hookshield can be accessed through a browser extension, allowing users to use it directly within their web browser.",
    },
  ];

  export const faq = [
    {
      question: "How HookShield works ?",
      answer: "HookShield works by scanning incoming emails in real-time using advanced machine learning algorithms. The extension analyzes various aspects of the email, such as the sender, content, links, and attachments, to detect potential phishing attacks. If any suspicious activity is detected, HookShield will immediately alert you.",
    },
    {
      question: "Who can use HookShield ?",
      answer: "HookShield is highly recommended for anyone who uses email, especially business professionals, corporate employees, or anyone who frequently receives emails from various sources. It is also ideal for financial institutions, healthcare organizations, and entities that store sensitive data.",
    },
  ];
