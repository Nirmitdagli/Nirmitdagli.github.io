export const roles = [
  { id: 'ai', title: 'AI Infrastructure Engineer', label: 'AI infrastructure', number: '01',
    description: 'GPU kernels, LLM serving, and the cloud foundations that AI workloads run on.',
    proof: 'LLM Kernels · Serving Bench · SPARK', projects: ['llm-kernels', 'llm-serving-bench', 'spark', 'qgpt', 'privaitect'], stack: ['CUDA', 'Triton', 'PyTorch', 'Kubernetes'] },
  { id: 'platform', title: 'Platform Engineer', label: 'Platform engineering', number: '02',
    description: 'Infrastructure as code, repeatable delivery, and cost-conscious cloud operations.',
    proof: 'Sidecoach Sports · Zycus · Azure SaaS Blueprint', projects: ['azure-saas-blueprint', 'zycus'], stack: ['Terraform', 'Azure', 'Git', 'CI/CD'] },
  { id: 'security', title: 'Cybersecurity Engineer', label: 'Cybersecurity', number: '03',
    description: 'Defense in depth across cloud, identity, networks, and application platforms.',
    proof: 'Sidecoach Sports · Incident response · PrivAItect', projects: ['ransomware', 'privaitect'], stack: ['Zero Trust', 'IAM', 'Firewalls', 'Threat modeling'] },
];
