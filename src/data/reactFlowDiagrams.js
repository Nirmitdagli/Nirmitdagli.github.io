/**
 * React Flow diagram data — nodes + edges for interactive architectures.
 *
 * Each export returns { nodes, edges, height } tailored to a specific
 * project. Kept separate from projects.js to keep that file skimmable,
 * and so the React Flow chunk can lazy-load later if the bundle grows.
 *
 * Node shapes:
 *   type:'group' — dashed labeled container (Akamai Edge, Zscaler Cloud, …)
 *   type:'box'   — single service/component, connectable via handles
 *
 * Group children use `parentNode` + `extent: 'parent'` so they drag
 * together with the container.
 */

// ------------------------------------------------------------------
// Ransomware — enterprise multi-cloud security architecture.
// Mirrors arch.png:
//   Public users + Admins → Akamai Edge / Zscaler ZTC → Palo Alto NGFW
//   / Identity & PAM → AWS Organization (Security + Production accounts)
//   → Management / Log Archive / Non-Prod accounts.
// ------------------------------------------------------------------

// Helper — trim the noise of repeating `type: 'box'` boilerplate.
const box = (id, x, y, data, parentNode) => ({
  id,
  type: 'box',
  position: { x, y },
  data,
  ...(parentNode ? { parentNode, extent: 'parent' } : {}),
});

const group = (id, x, y, width, height, label, accent) => ({
  id,
  type: 'group',
  position: { x, y },
  data: { label, accent },
  style: { width, height, background: 'transparent', border: 'none' },
});

export const ransomwareDiagram = {
  height: 1560,
  nodes: [
    // ---------- Row 0: Users ----------
    box('u-public', 80, 0, {
      label: 'Public Users',
      subtitle: 'Browsers + mobile clients',
      accent: 'ink',
    }),
    box('u-admin', 760, 0, {
      label: 'Admins & Developers',
      subtitle: 'MDM-enrolled corporate laptops',
      accent: 'ink',
    }),

    // ---------- Row 1: Edge security ----------
    group('g-akamai', 20, 100, 280, 310, 'Akamai Edge', 'amber'),
    box('ak-dns',      20, 40,  { label: 'Edge DNS',         subtitle: 'GTM · GeoDNS',              accent: 'amber' }, 'g-akamai'),
    box('ak-cdn',      20, 110, { label: 'CDN',              subtitle: 'cache + acceleration',      accent: 'amber' }, 'g-akamai'),
    box('ak-waf',      20, 180, { label: 'WAF + Bot Manager', subtitle: 'L7 attacks + bot defense', accent: 'amber' }, 'g-akamai'),
    box('ak-prolexic', 20, 250, { label: 'Prolexic',         subtitle: 'volumetric DDoS scrubbing', accent: 'amber' }, 'g-akamai'),

    group('g-zscaler', 740, 100, 280, 240, 'Zscaler Zero Trust Cloud', 'teal'),
    box('zs-zpa', 20, 40,  { label: 'ZPA Broker',       subtitle: 'ZTNA + MFA',           accent: 'teal' }, 'g-zscaler'),
    box('zs-zia', 20, 110, { label: 'ZIA SWG',          subtitle: 'secure web gw + DLP',  accent: 'teal' }, 'g-zscaler'),
    box('zs-zcc', 20, 180, { label: 'Client Connector', subtitle: 'endpoint agent',       accent: 'teal' }, 'g-zscaler'),

    // ---------- Row 2: Network + Identity ----------
    group('g-palo', 20, 460, 280, 310, 'Palo Alto NGFW', 'red'),
    box('pa-threat', 20, 40,  { label: 'Threat Prevention', subtitle: 'IPS + WildFire (zero-day)', accent: 'red' }, 'g-palo'),
    box('pa-url',    20, 110, { label: 'URL Filtering',     subtitle: 'PAN-DB categories',         accent: 'red' }, 'g-palo'),
    box('pa-tls',    20, 180, { label: 'TLS Decrypt',       subtitle: 'SSL forward proxy',         accent: 'red' }, 'g-palo'),
    box('pa-appid',  20, 250, { label: 'App-ID / User-ID',  subtitle: 'L7 policy per user',        accent: 'red' }, 'g-palo'),

    group('g-pam', 740, 460, 280, 240, 'Identity & PAM', 'yellow'),
    box('id-idp',   20, 40,  { label: 'Identity Provider', subtitle: 'Okta / Entra · SAML + OIDC', accent: 'yellow' }, 'g-pam'),
    box('id-vault', 20, 110, { label: 'CyberArk Vault',    subtitle: 'credential store',           accent: 'yellow' }, 'g-pam'),
    box('id-psm',   20, 180, { label: 'CyberArk PSM',      subtitle: 'session recording',          accent: 'yellow' }, 'g-pam'),

    // ---------- Row 3: AWS Organization ----------
    // Outer label — no frame, just a pill to group the two accounts visually.
    box('aws-org-label', 390, 810, {
      label: 'AWS Organization',
      subtitle: 'Control Tower landing zone',
      accent: 'ink',
    }),

    group('g-aws-sec', 20, 880, 320, 600, 'AWS · Security Account', 'teal'),
    box('sec-tgw',      20, 45,  { label: 'Transit Gateway',      subtitle: 'inter-VPC routing hub',    accent: 'teal' }, 'g-aws-sec'),
    box('sec-zpaconn',  20, 115, { label: 'Zscaler App Connector', subtitle: 'ZPA egress to private apps', accent: 'teal' }, 'g-aws-sec'),
    box('sec-ziaedge',  20, 185, { label: 'Zscaler ZIA Edge',     subtitle: 'centralized outbound egress', accent: 'teal' }, 'g-aws-sec'),
    box('sec-crowdstrike', 20, 255, { label: 'CrowdStrike Console', subtitle: 'EDR telemetry + policy',   accent: 'teal' }, 'g-aws-sec'),
    box('sec-iam',      20, 325, { label: 'IAM Identity Center',  subtitle: 'SSO + permission sets',    accent: 'teal' }, 'g-aws-sec'),
    box('sec-guardduty', 20, 395, { label: 'GuardDuty + Security Hub', subtitle: 'threat aggregation',   accent: 'teal' }, 'g-aws-sec'),
    box('sec-kms',      20, 465, { label: 'KMS + Secrets Manager', subtitle: 'shared crypto + secrets', accent: 'teal' }, 'g-aws-sec'),
    box('sec-bastion',  20, 535, { label: 'Bastion / Jump',       subtitle: 'brokered by CyberArk PSM', accent: 'teal' }, 'g-aws-sec'),

    group('g-aws-prod', 720, 880, 320, 530, 'AWS · Production Account', 'red'),
    box('prod-web',    20, 45,  { label: 'Web Tier',              subtitle: 'WAF · ALB · CloudFront · TLS', accent: 'red' }, 'g-aws-prod'),
    box('prod-app',    20, 115, { label: 'App Tier',              subtitle: 'ECS / EKS · no IGW',       accent: 'red' }, 'g-aws-prod'),
    box('prod-data',   20, 185, { label: 'Data Tier',             subtitle: 'RDS Multi-AZ · ElastiCache', accent: 'red' }, 'g-aws-prod'),
    box('prod-falcon', 20, 255, { label: 'CrowdStrike Agents',    subtitle: 'sensor on every host',     accent: 'red' }, 'g-aws-prod'),
    box('prod-vpce',   20, 325, { label: 'VPC Endpoints',         subtitle: 'private access to AWS svc', accent: 'red' }, 'g-aws-prod'),
    box('prod-egress', 20, 395, { label: 'Egress via Zscaler ZIA', subtitle: 'via TGW → security acct',  accent: 'red' }, 'g-aws-prod'),
    box('prod-sg',     20, 465, { label: 'SGs + NACLs',           subtitle: 'micro-segmentation',       accent: 'red' }, 'g-aws-prod'),

    // ---------- Row 4: Supporting accounts ----------
    box('acc-mgmt', 20, 1510, {
      label: 'Management Account',
      subtitle: 'SCPs · consolidated billing · Control Tower',
      accent: 'ink',
    }),
    box('acc-log', 390, 1510, {
      label: 'Log Archive Account',
      subtitle: 'CloudTrail · Config · VPC Flow Logs · immutable S3',
      accent: 'ink',
    }),
    box('acc-nonprod', 770, 1510, {
      label: 'Non-Prod Account',
      subtitle: 'TF-mirrored VPC · isolated blast radius',
      accent: 'ink',
    }),
  ],
  edges: [
    // Users → Edge/ZTC
    { id: 'e-u1-ak',  source: 'u-public', target: 'ak-dns', sourceHandle: null, targetHandle: null, animated: true },
    { id: 'e-u2-zs',  source: 'u-admin',  target: 'zs-zcc', animated: true },

    // Edge → NGFW
    { id: 'e-ak-pa', source: 'ak-prolexic', target: 'pa-threat', style: { stroke: 'rgba(245,158,11,0.6)' } },

    // Zscaler → Identity (for MFA/SAML)
    { id: 'e-zs-id', source: 'zs-zpa', target: 'id-idp',
      label: 'SAML + MFA',
      style: { stroke: 'rgba(13,148,136,0.6)' } },

    // NGFW → AWS Security (via Transit Gateway)
    { id: 'e-pa-tgw', source: 'pa-appid', target: 'sec-tgw',
      style: { stroke: 'rgba(220,38,38,0.6)' } },

    // Identity → IAM Identity Center
    { id: 'e-id-iam', source: 'id-idp', target: 'sec-iam',
      style: { stroke: 'rgba(234,179,8,0.65)' } },

    // CyberArk PSM → Bastion
    { id: 'e-psm-bastion', source: 'id-psm', target: 'sec-bastion',
      label: 'PSM session',
      style: { stroke: 'rgba(234,179,8,0.65)' } },

    // AWS Security ↔ Production (TGW hub)
    { id: 'e-tgw-web', source: 'sec-tgw', target: 'prod-web',
      label: 'TGW',
      style: { stroke: 'rgba(13,148,136,0.7)', strokeWidth: 1.8 } },

    // Production CrowdStrike agents → Security console (EDR telemetry) — key animated flow
    { id: 'e-edr', source: 'prod-falcon', target: 'sec-crowdstrike',
      label: 'EDR telemetry',
      animated: true,
      style: { stroke: '#0d9488', strokeWidth: 2 } },

    // Production egress → Security ZIA edge (workload egress) — key animated flow
    { id: 'e-egress', source: 'prod-egress', target: 'sec-ziaedge',
      label: 'workload egress',
      animated: true,
      style: { stroke: '#f59e0b', strokeWidth: 2 } },

    // AWS Security → Management (org-level governance)
    { id: 'e-mgmt-sec', source: 'sec-iam', target: 'acc-mgmt',
      style: { stroke: 'rgba(26,26,26,0.25)', strokeDasharray: '4 3' } },
    // Security → Log Archive (audit stream)
    { id: 'e-log', source: 'sec-guardduty', target: 'acc-log',
      label: 'audit stream',
      style: { stroke: 'rgba(26,26,26,0.25)', strokeDasharray: '4 3' } },
  ],
};

// ------------------------------------------------------------------
// SPARK — AI tutoring platform microservices topology.
// Shows: client → API gateway → 6 microservices → data/AI layer.
// ------------------------------------------------------------------

export const sparkDiagram = {
  height: 840,
  nodes: [
    // Clients
    box('c-web', 120, 0, {
      label: 'React Frontend',
      subtitle: 'Web app',
      accent: 'teal',
    }),
    box('c-mobile', 400, 0, {
      label: 'Mobile PWA',
      subtitle: 'Offline-ready',
      accent: 'teal',
    }),

    // CDN + WAF
    box('cdn', 260, 90, {
      label: 'CloudFront + WAF',
      subtitle: 'TLS · rate limit · DDoS',
      accent: 'amber',
    }),

    // API Gateway
    box('gateway', 260, 180, {
      label: 'API Gateway',
      subtitle: 'Auth · rate limit · routing',
      accent: 'amber',
    }),

    // Microservices row (6)
    group('g-services', 20, 290, 800, 180, 'Microservices · Kubernetes (EKS + GKE)', 'teal'),
    box('svc-auth',    20,  45, { label: 'Auth Service',    subtitle: 'JWT + refresh', accent: 'teal' }, 'g-services'),
    box('svc-session', 200, 45, { label: 'Session Mgmt',    subtitle: 'tutor sessions', accent: 'teal' }, 'g-services'),
    box('svc-ai',      400, 45, { label: 'AI Engine',       subtitle: 'LLM orchestrator', accent: 'teal' }, 'g-services'),
    box('svc-rag',     580, 45, { label: 'RAG Pipeline',    subtitle: 'retrieve + rerank', accent: 'teal' }, 'g-services'),
    box('svc-analytics', 110, 115, { label: 'Analytics Svc', subtitle: 'learning metrics', accent: 'teal' }, 'g-services'),
    box('svc-content',   490, 115, { label: 'Content Svc',   subtitle: 'course materials', accent: 'teal' }, 'g-services'),

    // Data layer
    box('db-pg',    40,  540, { label: 'PostgreSQL',   subtitle: 'Multi-AZ · users + sessions', accent: 'amber' }),
    box('db-vec',   260, 540, { label: 'Vector DB',    subtitle: 'embeddings · pgvector',       accent: 'amber' }),
    box('db-redis', 480, 540, { label: 'Redis Cache',  subtitle: 'session + rate-limit cache',  accent: 'amber' }),
    box('db-s3',    700, 540, { label: 'S3 Storage',   subtitle: 'course content · media',       accent: 'amber' }),

    // External AI
    box('llm', 260, 650, {
      label: 'LLM Providers',
      subtitle: 'Bedrock · OpenAI · Gemini',
      accent: 'yellow',
    }),

    // Observability (side)
    box('obs', 680, 180, {
      label: 'Prometheus + Grafana',
      subtitle: 'metrics · alerts',
      accent: 'ink',
    }),
  ],
  edges: [
    // Clients → CDN → Gateway
    { id: 's-e1', source: 'c-web', target: 'cdn', animated: true },
    { id: 's-e2', source: 'c-mobile', target: 'cdn', animated: true },
    { id: 's-e3', source: 'cdn', target: 'gateway' },

    // Gateway → microservices
    { id: 's-e4', source: 'gateway', target: 'svc-auth' },
    { id: 's-e5', source: 'gateway', target: 'svc-session' },
    { id: 's-e6', source: 'gateway', target: 'svc-ai' },
    { id: 's-e7', source: 'gateway', target: 'svc-rag' },

    // AI ↔ RAG
    { id: 's-e-ai-rag', source: 'svc-ai', target: 'svc-rag',
      label: 'query',
      style: { stroke: 'rgba(13,148,136,0.6)' } },

    // Services → Data
    { id: 's-e8', source: 'svc-auth', target: 'db-pg', style: { stroke: 'rgba(245,158,11,0.6)' } },
    { id: 's-e9', source: 'svc-session', target: 'db-redis', style: { stroke: 'rgba(245,158,11,0.6)' } },
    { id: 's-e10', source: 'svc-rag', target: 'db-vec', style: { stroke: 'rgba(245,158,11,0.6)' } },
    { id: 's-e11', source: 'svc-content', target: 'db-s3', style: { stroke: 'rgba(245,158,11,0.6)' } },

    // AI → LLM
    { id: 's-e12', source: 'svc-ai', target: 'llm',
      label: 'inference',
      animated: true,
      style: { stroke: '#eab308', strokeWidth: 2 } },

    // Observability taps
    { id: 's-e13', source: 'gateway', target: 'obs',
      style: { stroke: 'rgba(26,26,26,0.2)', strokeDasharray: '3 3' } },
  ],
};

// ------------------------------------------------------------------
// Zycus — multi-tenant enterprise SaaS infrastructure.
// 50+ K8s clusters (EKS/AKS/GKE), Linux servers, CI/CD feeding
// 15+ engineering teams, observability stack, IaC with Terraform.
// ------------------------------------------------------------------

export const zycusDiagram = {
  height: 1320,
  nodes: [
    // ---------- Row 0 — Tenants ----------
    box('z-tenants', 380, 0, {
      label: 'Enterprise Tenants',
      subtitle: 'global customers · browser + mobile',
      accent: 'ink',
    }),

    // ---------- Row 1 — Edge ----------
    group('g-z-edge', 20, 120, 1020, 130, 'Edge · Global', 'amber'),
    box('z-r53',    20,  50, { label: 'Route 53 DNS',       subtitle: 'geo-routing', accent: 'amber' }, 'g-z-edge'),
    box('z-cf',     260, 50, { label: 'CloudFront CDN',     subtitle: 'cache + acceleration', accent: 'amber' }, 'g-z-edge'),
    box('z-waf',    500, 50, { label: 'AWS WAF',            subtitle: 'OWASP + bot rules', accent: 'amber' }, 'g-z-edge'),
    box('z-tls',    780, 50, { label: 'TLS Termination',    subtitle: 'SSL offload · HSTS', accent: 'amber' }, 'g-z-edge'),

    // ---------- Row 2 — Load Balancing + Tenant Routing ----------
    group('g-z-lb', 20, 300, 1020, 130, 'Load Balancing · Tenant Routing', 'yellow'),
    box('z-nginx',    20,  50, { label: 'Nginx',            subtitle: 'L7 ingress',  accent: 'yellow' }, 'g-z-lb'),
    box('z-haproxy',  240, 50, { label: 'HAProxy',          subtitle: 'TCP/HTTP LB', accent: 'yellow' }, 'g-z-lb'),
    box('z-tenantrt', 460, 50, { label: 'Tenant Router',    subtitle: 'per-tenant shard key', accent: 'yellow' }, 'g-z-lb'),
    box('z-consul',   720, 50, { label: 'Consul Service Mesh', subtitle: 'mTLS + discovery', accent: 'yellow' }, 'g-z-lb'),

    // ---------- Row 3 — Compute (multi-cloud clusters) ----------
    group('g-z-aws', 20, 480, 320, 260, 'AWS · EKS Clusters', 'teal'),
    box('z-eks-prod',  20, 45,  { label: 'EKS Production',   subtitle: '20+ clusters', accent: 'teal' }, 'g-z-aws'),
    box('z-eks-stage', 20, 110, { label: 'EKS Staging',      subtitle: '6 clusters',   accent: 'teal' }, 'g-z-aws'),
    box('z-eks-dev',   20, 175, { label: 'EKS Dev',          subtitle: '4 clusters',   accent: 'teal' }, 'g-z-aws'),

    group('g-z-azure', 370, 480, 300, 260, 'Azure · AKS Clusters', 'teal'),
    box('z-aks-prod',  20, 45,  { label: 'AKS Production',   subtitle: '12 clusters', accent: 'teal' }, 'g-z-azure'),
    box('z-aks-stage', 20, 110, { label: 'AKS Staging',      subtitle: '4 clusters',  accent: 'teal' }, 'g-z-azure'),
    box('z-aks-dev',   20, 175, { label: 'AKS Dev',          subtitle: '2 clusters',  accent: 'teal' }, 'g-z-azure'),

    group('g-z-gcp', 700, 480, 340, 260, 'GCP · GKE + Linux Fleet', 'teal'),
    box('z-gke',       20, 45,  { label: 'GKE Clusters',     subtitle: '5 clusters',    accent: 'teal' }, 'g-z-gcp'),
    box('z-linux',     20, 110, { label: 'Linux Servers', subtitle: 'Ansible-managed', accent: 'teal' }, 'g-z-gcp'),
    box('z-bare',      20, 175, { label: 'Bare Metal Pool',  subtitle: 'high-perf tenants', accent: 'teal' }, 'g-z-gcp'),

    // ---------- Row 4 — Data (per-tenant isolated) ----------
    group('g-z-data', 20, 790, 1020, 140, 'Data · Tenant-Isolated', 'red'),
    box('z-pg',    20,  50, { label: 'PostgreSQL',     subtitle: 'per-tenant schema', accent: 'red' }, 'g-z-data'),
    box('z-mysql', 240, 50, { label: 'MySQL',          subtitle: 'legacy modules',    accent: 'red' }, 'g-z-data'),
    box('z-redis', 460, 50, { label: 'Redis',          subtitle: 'cache + pub/sub',   accent: 'red' }, 'g-z-data'),
    box('z-es',    680, 50, { label: 'Elasticsearch',  subtitle: 'search + audit',    accent: 'red' }, 'g-z-data'),
    box('z-veeam', 860, 50, { label: 'Veeam Backup',   subtitle: 'cross-region',      accent: 'red' }, 'g-z-data'),

    // ---------- Row 5 — CI/CD + IaC (left side) ----------
    group('g-z-cicd', 20, 990, 500, 280, 'CI/CD · IaC · 15+ Teams', 'amber'),
    box('z-git',     20, 45,  { label: 'GitLab',            subtitle: 'source of truth',       accent: 'amber' }, 'g-z-cicd'),
    box('z-jenkins', 250, 45, { label: 'Jenkins',           subtitle: 'build + test pipeline', accent: 'amber' }, 'g-z-cicd'),
    box('z-argo',    20, 115, { label: 'ArgoCD',            subtitle: 'GitOps deploy',         accent: 'amber' }, 'g-z-cicd'),
    box('z-tf',      250, 115, { label: 'Terraform',        subtitle: 'multi-cloud IaC',       accent: 'amber' }, 'g-z-cicd'),
    box('z-ansible', 20, 185, { label: 'Ansible',           subtitle: 'config mgmt',            accent: 'amber' }, 'g-z-cicd'),
    box('z-harbor',  250, 185, { label: 'Harbor Registry',  subtitle: 'signed container images', accent: 'amber' }, 'g-z-cicd'),

    // ---------- Row 5 — Observability (right side) ----------
    group('g-z-obs', 560, 990, 480, 280, 'Observability · SLO-Driven', 'yellow'),
    box('z-prom',    20, 45,  { label: 'Prometheus',    subtitle: 'metrics + alerts',    accent: 'yellow' }, 'g-z-obs'),
    box('z-graf',    230, 45, { label: 'Grafana',       subtitle: 'SLO dashboards',      accent: 'yellow' }, 'g-z-obs'),
    box('z-elk',     20, 115, { label: 'ELK Stack',     subtitle: 'logs · audit trail',  accent: 'yellow' }, 'g-z-obs'),
    box('z-jaeger',  230, 115, { label: 'Jaeger',       subtitle: 'distributed tracing', accent: 'yellow' }, 'g-z-obs'),
    box('z-pager',   20, 185, { label: 'PagerDuty',     subtitle: 'on-call + incidents', accent: 'yellow' }, 'g-z-obs'),
    box('z-alert',   230, 185, { label: 'Alertmanager', subtitle: 'routing + dedup',     accent: 'yellow' }, 'g-z-obs'),
  ],
  edges: [
    // Tenants → edge
    { id: 'z-e1', source: 'z-tenants', target: 'z-r53', animated: true },
    // Edge chain
    { id: 'z-e2', source: 'z-r53', target: 'z-cf' },
    { id: 'z-e3', source: 'z-cf',  target: 'z-waf' },
    { id: 'z-e4', source: 'z-waf', target: 'z-tls' },

    // Edge → LB
    { id: 'z-e5', source: 'z-tls', target: 'z-nginx',
      style: { stroke: 'rgba(245,158,11,0.65)' } },

    // LB chain
    { id: 'z-e6', source: 'z-nginx',   target: 'z-haproxy' },
    { id: 'z-e7', source: 'z-haproxy', target: 'z-tenantrt' },
    { id: 'z-e8', source: 'z-tenantrt', target: 'z-consul' },

    // Tenant router → each cloud group (routing by tenant shard)
    { id: 'z-e9',  source: 'z-tenantrt', target: 'z-eks-prod',
      label: 'shard A',
      style: { stroke: 'rgba(234,179,8,0.65)' } },
    { id: 'z-e10', source: 'z-tenantrt', target: 'z-aks-prod',
      label: 'shard B',
      style: { stroke: 'rgba(234,179,8,0.65)' } },
    { id: 'z-e11', source: 'z-tenantrt', target: 'z-gke',
      label: 'shard C',
      style: { stroke: 'rgba(234,179,8,0.65)' } },

    // Clusters → Data
    { id: 'z-e12', source: 'z-eks-prod', target: 'z-pg',
      style: { stroke: 'rgba(13,148,136,0.6)' } },
    { id: 'z-e13', source: 'z-aks-prod', target: 'z-pg',
      style: { stroke: 'rgba(13,148,136,0.6)' } },
    { id: 'z-e14', source: 'z-eks-prod', target: 'z-redis',
      style: { stroke: 'rgba(13,148,136,0.6)' } },
    { id: 'z-e15', source: 'z-aks-prod', target: 'z-es',
      style: { stroke: 'rgba(13,148,136,0.6)' } },
    { id: 'z-e16', source: 'z-gke',      target: 'z-mysql',
      style: { stroke: 'rgba(13,148,136,0.6)' } },
    { id: 'z-e17', source: 'z-linux',    target: 'z-pg',
      style: { stroke: 'rgba(13,148,136,0.55)' } },

    // Backup tap
    { id: 'z-e-backup', source: 'z-pg', target: 'z-veeam',
      label: 'daily backup',
      style: { stroke: 'rgba(220,38,38,0.7)', strokeDasharray: '4 3' } },

    // CI/CD: GitLab → Jenkins → Harbor → ArgoCD → clusters
    { id: 'z-e-git-jenk', source: 'z-git',     target: 'z-jenkins' },
    { id: 'z-e-jenk-harbor', source: 'z-jenkins', target: 'z-harbor' },
    { id: 'z-e-harbor-argo', source: 'z-harbor', target: 'z-argo' },
    { id: 'z-e-argo-eks', source: 'z-argo', target: 'z-eks-prod',
      label: 'GitOps sync',
      animated: true,
      style: { stroke: '#f59e0b', strokeWidth: 2 } },
    { id: 'z-e-argo-aks', source: 'z-argo', target: 'z-aks-prod',
      animated: true,
      style: { stroke: '#f59e0b', strokeWidth: 2 } },

    // Terraform → clusters (IaC)
    { id: 'z-e-tf-aws', source: 'z-tf', target: 'z-eks-prod',
      label: 'terraform apply',
      style: { stroke: 'rgba(245,158,11,0.6)', strokeDasharray: '4 3' } },

    // Ansible → Linux fleet
    { id: 'z-e-ans-linux', source: 'z-ansible', target: 'z-linux',
      label: 'config mgmt',
      style: { stroke: 'rgba(245,158,11,0.6)', strokeDasharray: '4 3' } },

    // Clusters → observability (metrics tap)
    { id: 'z-e-eks-prom', source: 'z-eks-prod', target: 'z-prom',
      label: 'metrics',
      animated: true,
      style: { stroke: '#eab308', strokeWidth: 1.8 } },
    { id: 'z-e-aks-prom', source: 'z-aks-prod', target: 'z-prom',
      animated: true,
      style: { stroke: '#eab308', strokeWidth: 1.8 } },
    { id: 'z-e-gke-elk', source: 'z-gke', target: 'z-elk',
      label: 'logs',
      style: { stroke: 'rgba(234,179,8,0.65)' } },

    // Prom → Graf → PagerDuty flow
    { id: 'z-e-prom-graf', source: 'z-prom', target: 'z-graf' },
    { id: 'z-e-prom-alert', source: 'z-prom', target: 'z-alert' },
    { id: 'z-e-alert-pager', source: 'z-alert', target: 'z-pager',
      label: 'page on-call',
      style: { stroke: 'rgba(234,179,8,0.75)' } },
  ],
};
