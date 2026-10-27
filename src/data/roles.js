export const roles = [
  { id: 'ai', title: 'GPU & LLM Serving', label: 'GPU & LLM serving', number: '01',
    description: 'Kubernetes GPU clusters, self-hosted models, and benchmarks of vLLM, SGLang and TensorRT-LLM.',
    proof: 'Serving Bench · LLM Kernels · SPARK', projects: ['llm-serving-bench', 'llm-kernels', 'spark', 'qgpt'], stack: ['vLLM', 'SGLang', 'NVIDIA GPU Operator', 'Kubernetes'] },
  { id: 'platform', title: 'Platform & SRE', label: 'Platform & SRE', number: '02',
    description: 'Infrastructure as code, GitOps delivery, observability, and 50+ Kubernetes clusters in production.',
    proof: 'Zycus · Azure SaaS Blueprint · Sidecoach Sports', projects: ['zycus', 'azure-saas-blueprint'], stack: ['Terraform', 'ArgoCD', 'Prometheus', 'OpenTelemetry'] },
  { id: 'security', title: 'Secure AI Operations', label: 'Secure operations', number: '03',
    description: 'Identity, isolation, and incident response for the platforms AI runs on.',
    proof: 'AI gateway · Ransomware recovery · Zero Trust', projects: ['ransomware', 'azure-saas-blueprint'], stack: ['Entra ID', 'Zero Trust', 'Incident response', 'PII redaction'] },
];
