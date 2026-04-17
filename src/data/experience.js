// Experience timeline — most recent first.
export const experience = [
  {
    role: 'Research Assistant',
    company: 'Quinnipiac University',
    period: 'Aug 2025 – Present',
    current: true,
    tech: ['AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'Amazon Bedrock'],
    bullets: [
      'Built SPARK AI platform with scalable microservices on AWS & GCP using Terraform-managed infrastructure; published at IEEE UEMCON at IBM Watson Research Center (Oct 2025).',
      'Built PrivAItect with Amazon Bedrock; designed secure API integrations and data pipelines for real-time privacy threat modeling.',
    ],
  },
  {
    role: 'Graduate Assistant',
    company: 'Quinnipiac University',
    period: 'Aug 2024 – Aug 2025',
    current: false,
    tech: ['Python', 'Automation', 'Scripting'],
    bullets: [
      'Supported faculty research and student programs across multiple projects; resolved technical queries and triaged coursework operations.',
      'Reduced manual clerical work by 60% by scripting workflow automations — data pipelines, batch file handling, and reporting.',
    ],
  },
  {
    role: 'Cloud & AI Engineer Intern',
    company: 'State Street',
    period: 'Jun 2025 – Aug 2025',
    current: false,
    tech: ['AWS', 'Azure', 'Terraform', 'OPA', 'IAM', 'Docker'],
    bullets: [
      'Validated Terraform modules & OPA policies cross-functionally with security teams, enforcing RBAC and infrastructure compliance across multi-cloud environments.',
      'Orchestrated Amazon Q rollout across 44 AWS accounts; managed IAM configurations and built adoption tracking dashboards.',
      'Shipped containerized AI chatbot on Azure with REST APIs and Teams integration, full deployment pipeline dev through production.',
    ],
  },
  {
    role: 'Software Engineer — Cloud Infrastructure & Security',
    company: 'Zycus Pvt. Ltd.',
    period: 'Jan 2021 – Jun 2024',
    current: false,
    tech: [
      'AWS', 'Azure', 'GCP', 'VMware', 'Rancher',
      'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'ArgoCD',
      'CrowdStrike', 'CyberArk', 'Zscaler', 'Prometheus', 'Grafana', 'Dynatrace',
    ],
    bullets: [
      'Configured and managed AWS services (EC2, S3, EFS, EKS, Route 53, CloudFront, VPC, IAM, ELB, Autoscaling) hosting business-critical applications across multiple domains with cost-management strategies baked into provisioning.',
      'Automated 80% of IT tasks using Generative AI with Azure OpenAI and GCP — enhancing system availability by 30% and cutting server provisioning time by 40%.',
      'Managed 50+ Kubernetes clusters on AWS, Azure, Rancher and VMware with CI/CD pipelines, middleware (Nginx, HAProxy, AMQ, Solr, Consul), and Terraform / Ansible / Jenkins IaC — reducing manual effort by 50%.',
      'Led ransomware incident response and recovery: CyberArk, Zscaler, and CrowdStrike rollout; administered RHEL/CentOS/Ubuntu and Windows; deployed Palo Alto, PfSense and FortiGate firewalls; managed SAN/NAS with NetApp and Veeam Backup.',
      'Designed multi-cloud architectures integrating AWS, Azure, and GCP with OpsGenie, CloudWatch, ELK, and Dynatrace monitoring — engineered for security, scalability, and high availability.',
    ],
  },
  {
    role: 'DevOps Engineer (Freelance)',
    company: 'Ini8 Labs',
    period: 'Jun 2024 – Jul 2024',
    current: false,
    tech: ['Terraform', 'Docker', 'CI/CD', 'DevSecOps'],
    bullets: [
      'Delivered IaC and DevSecOps solutions with automated CI/CD pipelines, Terraform provisioning, and security scanning — reducing client downtime by 80%.',
    ],
  },
];
