// Experience timeline, most recent first. Kept in sync with LinkedIn and the resume.
export const experience = [
  {
    role: 'Founding Platform Engineer',
    company: 'Sidecoach Sports',
    period: 'Aug 2026 – Present',
    current: true,
    tech: ['Azure', 'Azure AI Foundry', 'Entra ID', 'OpenTelemetry', 'MCP', 'RAG', 'Terraform', 'GitHub Actions', 'Cloudflare', 'Intune'],
    bullets: [
      'First infrastructure and security hire: built the Azure platform, GitHub CI/CD pipelines, and dev, staging and prod environments from scratch.',
      'Built an AI gateway in front of LLM APIs (Entra ID OIDC, per-team API keys, PII redaction, OpenTelemetry tracing) and an MCP agent service with RAG.',
      'Built an SRE agent suite on Azure AI Foundry that triages alerts, summarizes incidents, runs runbooks behind approval gates, and opens and updates Jira tickets.',
      'Moved the company from password-only access to enforced MFA and Intune-managed devices; added Cloudflare WAF and split Azure into 9 isolated networks.',
      'Own COPPA, FERPA and PCI DSS (SAQ-A) compliance; launched SOC 2 readiness.',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'Quinnipiac University',
    period: 'Sep 2024 – May 2026',
    current: false,
    tech: ['NVIDIA GPU Operator', 'Cilium', 'Kubernetes', 'vLLM', 'SGLang', 'TensorRT-LLM', 'FastAPI', 'LangChain', 'FAISS', 'AWS Bedrock', 'GCP L4'],
    bullets: [
      'Ran Kubernetes GPU clusters (NVIDIA GPU Operator, Cilium) for research workloads.',
      'Self-hosted Llama 3, Mistral, Gemma and DeepSeek with 4-bit quantization behind a process-isolated FastAPI model server that eliminated CUDA out-of-memory failures.',
      'Benchmarked vLLM, SGLang and TensorRT-LLM on throughput, time to first token and GPU memory.',
      'Compared on-prem GPUs, GCP L4 and AWS Bedrock for a RAG workload (30s → 15s → 10s average latency); the lab moved inference to Bedrock.',
      'Built HERO and HERO-S (IEEE ISAIA 2026): schedulers that route AI jobs across CPU, GPU, cloud and edge by cost, energy and latency (8×H100 cost model), cutting energy 72 to 98% vs cloud-only.',
      'Built SPARK, a model-agnostic RAG framework (FastAPI, LangChain, FAISS) with PII redaction, reaching 90% answer accuracy; published at IEEE UEMCON 2025.',
      'Grew the research group from 2 to 10+ members.',
    ],
  },
  {
    role: 'Cloud & AI Engineer Intern',
    company: 'State Street',
    period: 'Jun 2025 – Aug 2025',
    current: false,
    tech: ['Azure AI Foundry', 'RAG', 'Microsoft Teams', 'Amazon Q', 'Backstage', 'Terraform', 'Open Policy Agent'],
    bullets: [
      'Only intern to ship an internal AI assistant: Confluence RAG on Azure AI Foundry, delivered as a Microsoft Teams bot that answers access questions and helps developers build Terraform modules.',
      'Rolled out Amazon Q across 44 AWS accounts with the Security, Compliance and AWS enablement teams; trained engineers on GitHub Copilot and AI-assisted coding.',
      'Built a Backstage developer portal (learning and service catalog) to help developers understand the IaC process.',
      'Reviewed Terraform modules against Open Policy Agent policies with the security team before deployment.',
    ],
  },
  {
    role: 'Graduate Assistant',
    company: 'Quinnipiac University',
    period: 'Sep 2024 – Jul 2026',
    current: false,
    tech: ['Python', 'Automation'],
    bullets: [
      'Supported the Nursing and Graduate Affairs department: student-event research, team coordination, and scripted automation for back-office workflows.',
    ],
  },
  {
    role: 'DevOps Engineer (Freelance)',
    company: 'Ini8 Labs',
    period: 'Jun 2024 – Jul 2024',
    current: false,
    tech: ['Terraform', 'k3s', 'AWS', 'DigitalOcean', 'DevSecOps'],
    bullets: [
      'Built infrastructure as code for AWS and DigitalOcean, led a k3s proof of concept, and added security scanning to client CI/CD pipelines.',
    ],
  },
  {
    role: 'Senior Software Engineer, SaaS Infra (joined as Trainee)',
    company: 'Zycus',
    period: 'Jan 2021 – Jun 2024',
    current: false,
    tech: [
      'Kubernetes', 'Rancher', 'OpenShift', 'EKS', 'AKS', 'GKE', 'ArgoCD', 'Kyverno', 'Velero',
      'Terraform', 'Ansible', 'Jenkins', 'Transit Gateway', 'Palo Alto', 'Prometheus', 'Grafana', 'ELK', 'Dynatrace', 'Veeam',
    ],
    bullets: [
      'First responder in the company-wide ransomware recovery: restored 1,500+ servers across 7 environments (4 production) in 7 days, re-architected the network, and led 4 months of hardening (Zscaler, CrowdStrike, CyberArk).',
      'Led the migration of 2,000+ servers into 50+ Kubernetes clusters (Rancher, OpenShift, EKS, AKS, GKE) with ArgoCD GitOps, Kyverno policies and Velero backups.',
      'Led a team of 5 standardizing Terraform, Ansible and Jenkins provisioning, cutting provisioning time about 40%.',
      'Designed the multi-account AWS strategy: Transit Gateway, VPC routing, Site-to-Site VPN and Direct Connect; deployed 20 Palo Alto firewalls across 10 AWS environments.',
      'Built observability end to end: Prometheus and Grafana for Kubernetes, ELK pipelines feeding SIEM detection, Dynatrace APM.',
      'Built the company’s first internal AI chatbot on Azure OpenAI (2024); automated recurring service requests through Jenkins, cutting tickets about 80% (about 50 to under 10 a week).',
    ],
  },
];
