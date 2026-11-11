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
  title: "Dissertation : Playing a Hidden-Role Game Without a Trusted Dealer",
  category: "Cryptography & Secure Multi-Party Computation",
  problem:
    "Traditional hidden-role games rely on a trusted moderator or server that knows players' secret roles ",
  action:
    "Developed a Python game using a dealerless encrypted-deck protocol , Paillier-based secure AND checks , and Shamir Secret Sharing with BGW-inspired computation . ",
  outcome:
    "Built a playable privacy-preserving prototype that reduces the server's access to game decisions. Demonstrated how cryptographic protocols can support collaborative gameplay without requiring a fully trusted moderator, while identifying limitations and opportunities for stronger security.",
  tools: [
    "Python",
    "Secure Multi-Party Computation (MPC)",
    "Shamir Secret Sharing",
    "Paillier Encryption",
    "BGW-Inspired Computation",
    "Socket Programming",
    "Cryptographic Protocol Design"
  ],
  links: {
    report: "#",
    github: "#"
  }
},

  
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
  
];
