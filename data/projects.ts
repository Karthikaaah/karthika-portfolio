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
    "Built a playable privacy-preserving prototype that reduces the server's access to game decisions.",
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
    github: ""
  }
},

  
 
{
  title: "Advanced SSH Monitor: Intrusion Detection & DFIR",
  category: "Blue Team",
  problem:
    "SSH authentication logs require continuous monitoring to detect brute-force attacks, suspicious login patterns, and potential account compromises.",
  action:
    " Python-based SSH intrusion detection tool , map threats to MITRE ATT&CK, and automate security alerts and forensic evidence collection.",
  outcome:
    "Automated monitoring solution with SQLite event storage, SIEM-compatible alerts, duplicate-alert suppression, SHA-256 evidence integrity verification, and 46 automated tests.",
  tools: [
    "Python",
    "Linux",
    "SQLite",
    "MITRE ATT&CK",
    "Splunk HEC",
    "Digital Forensics",
    "Pytest"
  ],
  links: {
    github: "https://github.com/Karthikaaah/ssh-monitor",
  },
},

  
];
