export const roles = [
  { id: 'ai', title: 'AI Infrastructure Engineer', label: 'AI infrastructure', number: '01',
    description: 'Cloud foundations for AI applications, containerized services, and RAG systems.',
    proof: 'SPARK · QGPT · Amazon Bedrock', projects: ['spark', 'qgpt', 'privaitect'], stack: ['Kubernetes', 'AWS', 'Docker', 'Python'] },
  { id: 'platform', title: 'Platform Engineer', label: 'Platform engineering', number: '02',
    description: 'Infrastructure as code, repeatable delivery, and cost-conscious cloud operations.',
    proof: 'Sidecoach Sports · Zycus · Azure SaaS Blueprint', projects: ['azure-saas-blueprint', 'zycus'], stack: ['Terraform', 'Azure', 'Git', 'CI/CD'] },
  { id: 'security', title: 'Cybersecurity Engineer', label: 'Cybersecurity', number: '03',
    description: 'Defense in depth across cloud, identity, networks, and application platforms.',
    proof: 'Sidecoach Sports · Incident response · PrivAItect', projects: ['ransomware', 'privaitect'], stack: ['Zero Trust', 'IAM', 'Firewalls', 'Threat modeling'] },
];
