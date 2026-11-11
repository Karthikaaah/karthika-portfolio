export type Project = {
  title: string;
  category: string;
  problem: string;
  action: string;
  outcome: string;
  tools: string[];
  links?: {
    github?: string;
    report?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  
  {
    title: "Network Traffic Analysis Lab",
    category: "Blue Team",
    problem:
      "Suspicious network behaviour needed to be investigated using packet-level evidence.",
    action:
      "Analysed packet captures, identified unusual connections, and documented findings in an analyst-style report.",
    outcome:
      "Produced a clear investigation summary with indicators, evidence, and defensive recommendations.",
    tools: ["Wireshark", "TCP/IP", "DNS", "HTTP", "Incident Analysis"],
    links: {
      report: "#",
    },
  },
  {
    title: "Web Application Security Assessment",
    category: "Offensive Security",
    problem:
      "A vulnerable training web application required assessment against common OWASP-style risks.",
    action:
      "Performed controlled testing in a legal lab environment and documented issues with remediation advice.",
    outcome:
      "Created a structured security assessment report suitable for a junior penetration testing portfolio.",
    tools: ["Burp Suite", "OWASP Top 10", "Linux", "Reporting"],
    links: {
      report: "#",
    },
  },
];
