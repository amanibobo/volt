import {
  GitHubLogo,
    LinkedInLogo,
  } from "../components/ui/icons";
  
  export const footerSections = [
    {
      title: "Company",
      links: [
        {
          text: "About Us",
          href: "/about",
        },
        {
          text: "Privacy Policy",
          href: "/privacy",
        },
        {
          text: "App Privacy Policy",
          href: "/privacy-app",
        },
        {
          text: "Terms of Service",
          href: "/terms-of-service",
        },
      ],
    },
    {
      title: "Product",
      links: [
        {
          text: "Documentation",
          href: "/docs",
        },
        {
          text: "Pricing",
          href: "/pricing",
        },
        {
          text: "Blog",
          href: "/blog",
        },
  
        {
          text: "Changelog",
          href: "/changelog",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          text: "FAQ",
          href: "/faq",
        },
        {
          text: "Email",
          href: "mailto:pear@trypear.ai",
        },
        {
          text: "Discord",
          href: "https://discord.gg/7QMraJUsQt",
          target: "_blank",
        },
      ],
    },
  ];
  
  

export const socialMediaLinks = [
    {
      icon: LinkedInLogo,
      link: "https://www.linkedin.com/company/voltient/posts/?feedView=all",
    },
    {
      icon: GitHubLogo,
      link: "/"
    },
  ];