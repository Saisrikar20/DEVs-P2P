import type { DomainConfig } from '../../types';

export const cloudDevopsDomain: DomainConfig = {
  id: 'cloud',
  slug: 'cloud',
  name: 'Cloud & DevOps Engineering',
  shortName: 'Cloud',
  badge: 'Active Track',
  iconName: 'Cloud',
  heroHeadline: 'Building, automating, and scaling resilient infrastructure across the globe',
  heroTagline: 'infrastructure as code · container orchestration, declarative pipelines, and enterprise system design',
  heroCtaText: 'Explore Cloud & DevOps Roadmap',
  roadmapData: [
    {
      id: 'cd-phase-1',
      phaseNumber: 1,
      title: 'Linux, Networking & Cloud Fundamentals',
      tagline: 'SSH Keys, VPC Design, CIDR Planning, Subnets, Gateways & IAM Least Privilege',
      duration: '3 - 4 Weeks',
      difficulty: 'Beginner',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Terminal',
      overview:
        'Establish core systems foundations: design isolated virtual networks from scratch, calculate CIDR blocks, configure routing and security boundaries, and enforce least-privilege IAM policies across multi-AZ regions.',
      topics: [
        {
          id: 'cd-p1-t1',
          name: 'VPC Design, CIDR Planning & Network Isolation',
          summary:
            'CIDR subnetting (/16 vs /24), public vs private subnets, route tables, internet gateways vs NAT gateways, and security groups vs NACLs.',
          keySkills: ['VPC Architecture', 'CIDR Planning', 'Route Tables & Gateways', 'Security Groups & NACLs'],
          recommendedResources: [
            { title: 'AWS Workshops: Building a VPC from Scratch', url: 'https://workshops.aws', type: 'Documentation' },
            { title: 'Hussein Nasser: Networking & Backend Internals', url: 'https://www.youtube.com/@hnasr', type: 'Video' },
          ],
        },
        {
          id: 'cd-p1-t2',
          name: 'Linux Administration, SSH Key Hygiene & IAM Security',
          summary:
            'Headless Linux navigation, SSH key management, IAM users, roles, policies, assume-role delegation, instance profiles, and avoiding single-AZ fragility.',
          keySkills: ['SSH Key Management', 'IAM Roles & Policies', 'Assume-Role & Least Privilege', 'Multi-AZ Resilience'],
          recommendedResources: [
            { title: 'AWS Well-Architected Framework: Security Pillar', url: 'https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/', type: 'Documentation' },
            { title: 'The Linux Command Line by William Shotts', url: 'https://linuxcommand.org/tlcl.php', type: 'Book' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Custom VPC Provisioning & Hardened Bastion Host',
        description:
          'Launch an EC2 instance in a custom VPC built from scratch (no default VPC), host a static site, restrict SSH to your IP only, and attach an IAM role instead of hardcoding API keys. Destroy all resources and verify a zero-dollar billing footprint.',
        deliverables: [
          'Custom dual-subnet VPC with isolated route tables and NAT gateway',
          'Hardened EC2 instance with security-group IP whitelist and attached IAM role',
          'Documented teardown script verifying $0 cloud spend after testing',
        ],
      },
    },
    {
      id: 'cd-phase-2',
      phaseNumber: 2,
      title: 'Core Services — Compute, Storage, Databases & Networking',
      tagline: 'EC2 Families, S3 Lifecycle, RDS vs DynamoDB, ALB/NLB, Auto-Scaling & FinOps',
      duration: '4 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Server',
      overview:
        'Master the foundational building blocks of scalable architectures: select optimal EC2 instance types, design durable S3 storage tiers with presigned URLs, evaluate relational vs NoSQL databases, configure auto-scaling load balancers, and implement FinOps cost guardrails.',
      topics: [
        {
          id: 'cd-p2-t1',
          name: 'Compute, Storage Tiers & Data Persistence',
          summary:
            'EC2 instance families, EBS vs instance store, S3 storage classes, lifecycle transition policies, presigned URLs, and RDS vs DynamoDB architecture trade-offs.',
          keySkills: ['EC2 Sizing & EBS', 'S3 Lifecycle & Presigned URLs', 'RDS vs DynamoDB', 'CloudFront & CDN Caching'],
          recommendedResources: [
            { title: 'Designing Data-Intensive Applications by Martin Kleppmann', url: 'https://dataintensive.net', type: 'Book' },
            { title: 'Adrian Cantrill: AWS Architecture Courses', url: 'https://learn.cantrill.io', type: 'Course' },
          ],
        },
        {
          id: 'cd-p2-t2',
          name: 'Traffic Routing, Auto-Scaling & FinOps Cost Control',
          summary:
            'Application vs Network Load Balancers (ALB/NLB), auto-scaling groups, Route 53 health-checked DNS routing, and FinOps tagging strategies with Cost Explorer budget alarms.',
          keySkills: ['ALB & Target Groups', 'Auto-Scaling Groups (ASG)', 'Route 53 DNS', 'FinOps & Cost Explorer'],
          recommendedResources: [
            { title: 'Cloud FinOps: Collaborative, Real-Time Cloud Value', url: 'https://www.oreilly.com/library/view/cloud-finops-2nd/9781492098355/', type: 'Book' },
            { title: 'Stephane Maarek: AWS Solutions Architect Associate', url: 'https://www.udemy.com', type: 'Course' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Resilient 3-Tier Web Application Infrastructure',
        description:
          'Deploy a complete 3-tier architecture featuring an Application Load Balancer, an auto-scaling app tier in private subnets, a managed database with multi-AZ failover, AWS Systems Manager (SSM) Session Manager for terminal access, and S3 + CloudFront for static assets.',
        deliverables: [
          'Multi-AZ Application Load Balancer routing to an auto-scaling private tier',
          'Managed RDS PostgreSQL instance with automated backups and read-replica ready',
          'Zero SSH key exposure using AWS Systems Manager (SSM) Session Manager',
          'Configured AWS Budget with email alerts triggering at 80% threshold',
        ],
      },
    },
    {
      id: 'cd-phase-3',
      phaseNumber: 3,
      title: 'Containers, Kubernetes & Orchestration',
      tagline: 'Multi-Stage Dockerfiles, ECR, Kubernetes Pods, Ingress & Gateway API, HPA & Helm',
      duration: '4 - 5 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Box',
      overview:
        'Package and orchestrate production workloads: write secure multi-stage Dockerfiles, manage image registries, and deploy resilient microservices on Kubernetes using Pods, Deployments, Services, Gateway API, Horizontal Pod Autoscalers, and Helm package charts.',
      topics: [
        {
          id: 'cd-p3-t1',
          name: 'Docker Engine Internals, Layer Caching & Registries',
          summary:
            'Writing lean multi-stage Dockerfiles with Alpine/distroless bases, layer caching, non-root execution, Docker Compose local networking, and pushing to ECR/GHCR.',
          keySkills: ['Multi-Stage Dockerfiles', 'Layer Caching Optimization', 'ECR & GHCR Registries', 'Docker Compose'],
          recommendedResources: [
            { title: 'TechWorld with Nana: Docker & DevOps Fundamentals', url: 'https://www.youtube.com/@TechWorldwithNana', type: 'Video' },
            { title: 'Play with Docker Hands-on Sandbox', url: 'https://labs.play-with-docker.com/', type: 'Interactive' },
          ],
        },
        {
          id: 'cd-p3-t2',
          name: 'Kubernetes Workloads, Gateway API & Scaling (CKA Track)',
          summary:
            'Pods, deployments, services, Ingress and Gateway API, ConfigMaps/Secrets, resource requests/limits, liveness/readiness probes, HPA, persistent volumes, RBAC, and Helm charts on EKS/GKE.',
          keySkills: ['Kubernetes Deployments', 'Ingress & Gateway API', 'Horizontal Pod Autoscaler (HPA)', 'Helm Charts & RBAC'],
          recommendedResources: [
            { title: 'Official Kubernetes Documentation (CKA Exam Reference)', url: 'https://kubernetes.io/docs/', type: 'Documentation' },
            { title: 'Kubernetes Up & Running by Burns, Beda, Hightower', url: 'https://www.oreilly.com/library/view/kubernetes-up-and/9781098120283/', type: 'Book' },
            { title: 'Killercoda & KodeKloud Free Kubernetes Labs', url: 'https://killercoda.com/', type: 'Interactive' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Zero-Downtime Microservice Cluster on Kubernetes',
        description:
          'Containerize a multi-service application, push images to a secure registry, deploy to a Kubernetes cluster with Gateway API ingress, TLS termination, auto-scaling (HPA), and execute a zero-downtime rolling update. Verify self-healing by killing active pods under synthetic load.',
        deliverables: [
          'Multi-stage Docker images under 60MB signed and pushed to container registry',
          'Kubernetes deployment manifests with HPA scaling from 2 to 10 pods',
          'Configured Gateway API / Ingress controller with automated TLS certificates',
          'Documented chaos test proving cluster self-healing when terminating leader pods',
        ],
      },
    },
    {
      id: 'cd-phase-4',
      phaseNumber: 4,
      title: 'Infrastructure as Code, CI/CD & Automation',
      tagline: 'Terraform 1.12, Remote State Locking, GitHub Actions OIDC, Blue/Green & GitOps ArgoCD',
      duration: '4 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Cpu',
      overview:
        'Eliminate manual console clicks through automated declarative infrastructure: write reusable Terraform modules with state locking, build automated GitHub Actions pipelines with keyless OIDC federation, and deploy via GitOps with ArgoCD.',
      topics: [
        {
          id: 'cd-p4-t1',
          name: 'Terraform Modules, State Locking & Drift Management',
          summary:
            'Providers, remote state backends in S3/DynamoDB with state locking, modular architecture, variables, outputs, plan vs apply, workspaces, drift detection, and Terraform Associate 004 objectives.',
          keySkills: ['Terraform Modules', 'Remote State & Locking', 'State Drift Detection', 'OpenTofu & IaC Best Practices'],
          recommendedResources: [
            { title: 'Terraform: Up & Running by Yevgeniy Brikman', url: 'https://www.terraformupandrunning.com', type: 'Book' },
            { title: 'Ned in the Cloud: Practical Terraform & IaC', url: 'https://www.youtube.com/@NedInTheCloud', type: 'Video' },
          ],
        },
        {
          id: 'cd-p4-t2',
          name: 'CI/CD Pipelines, Keyless OIDC & GitOps with ArgoCD',
          summary:
            'GitHub Actions automated pipelines, build-test-scan-deploy workflows, keyless OIDC authentication (no long-lived AWS keys in GitHub secrets), blue/green & canary deployments, and ArgoCD GitOps synchronizations.',
          keySkills: ['GitHub Actions CI/CD', 'OIDC Cloud Federation', 'Blue/Green & Canary Deploys', 'ArgoCD GitOps'],
          recommendedResources: [
            { title: 'The DevOps Handbook by Gene Kim, Jez Humble, Patrick Debois', url: 'https://itrevolution.com/product/the-devops-handbook/', type: 'Book' },
            { title: 'GitHub Actions OIDC AWS Setup Guide', url: 'https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Git-Driven Terraform Pipeline with OIDC & ArgoCD',
        description:
          'Rebuild your complete cloud infrastructure as modular Terraform code stored in Git. Configure a GitHub Actions pipeline that plans on Pull Requests and applies on merge using short-lived OIDC tokens. Connect ArgoCD to automatically sync application changes.',
        deliverables: [
          'Modular Terraform codebase with remote S3 backend and DynamoDB state locking',
          'GitHub Actions workflow executing automated linting, security scanning, and plan/apply',
          'Zero long-lived secret keys stored in repository secrets via AWS OIDC federation',
          'ArgoCD application tracking Git repository manifests with automated sync enabled',
        ],
      },
    },
    {
      id: 'cd-phase-5',
      phaseNumber: 5,
      title: 'Serverless, Observability, Security & Enterprise Architecture',
      tagline: 'Lambda, OpenTelemetry & Prometheus, KMS Encryption, Well-Architected Review & AI Infra',
      duration: '4 - 5 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Shield',
      overview:
        'Architect planet-scale, highly observable, and battle-hardened systems: implement event-driven serverless functions with SQS/EventBridge, full-stack observability with OpenTelemetry and Grafana, enterprise encryption with KMS, Well-Architected reviews, and modern AI/ML inference infrastructure.',
      topics: [
        {
          id: 'cd-p5-t1',
          name: 'Serverless Event Architecture & AI Inference Infra',
          summary:
            'AWS Lambda, API Gateway, SQS/SNS, EventBridge, cold-start mitigation, idempotency, and 2026 AI/ML cloud infrastructure: GPU-backed node pools, model serving on K8s, and vector databases.',
          keySkills: ['Event-Driven Serverless', 'SQS / EventBridge', 'GPU Node Groups on K8s', 'vLLM / Triton Model Serving'],
          recommendedResources: [
            { title: 'AWS Serverless Developer Guide', url: 'https://docs.aws.amazon.com/serverless/', type: 'Documentation' },
            { title: 'AWS re:Invent Architecture Talks', url: 'https://reinvent.awsevents.com/', type: 'Video' },
          ],
        },
        {
          id: 'cd-p5-t2',
          name: 'Distributed Observability, DevSecOps & Disaster Recovery',
          summary:
            'Prometheus metrics, Grafana dashboards, OpenTelemetry distributed tracing, SLOs and error budgets, KMS key management, AWS WAF, GuardDuty, OPA policy-as-code, and DR strategies (Pilot Light vs Active-Active).',
          keySkills: ['OpenTelemetry & Prometheus', 'SLOs & Error Budgets', 'KMS & Secrets Manager', 'Disaster Recovery (RTO/RPO)'],
          recommendedResources: [
            { title: 'Google Site Reliability Engineering (SRE) Book', url: 'https://sre.google/sre-book/table-of-contents/', type: 'Book' },
            { title: 'AWS Well-Architected Framework: Reliability Pillar', url: 'https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Observable Event-Driven Platform with Chaos DR Review',
        description:
          'Build an end-to-end event-driven service with OpenTelemetry distributed tracing, Prometheus metrics, and Grafana dashboards. Conduct a formal Well-Architected review of your architecture and document a chaos engineering drill simulating multi-AZ failure with measured RTO/RPO.',
        deliverables: [
          'Serverless event pipeline with dead-letter queues (DLQ), retries, and idempotency keys',
          'Prometheus/Grafana dashboard tracking P95/P99 latency, throughput, and error budgets',
          'Formal Well-Architected 6-pillar written review identifying failure points and fixes',
          'Post-mortem incident write-up from a simulated availability zone termination drill',
        ],
      },
    },
  ],
  hostsData: [
    {
      id: 'cd-host-1',
      name: 'Sakthivel R',
      role: 'System Design Architect',
      headline: 'Building, Automating, and Scaling',
      topicOrFocus: 'Cloud Infrastructure, System Architecture & Large-Scale Automation',
      bio: 'System Design Architect focused on building, automating, and scaling resilient cloud infrastructure, declarative pipelines, and enterprise systems.',
      avatarUrl: '/avatar-cloud.jpg',
      initials: 'SR',
      socials: {
        linkedin: 'https://in.linkedin.com/in/sakthivel-r-957a87318',
      },
    },
  ],
  resourcesData: [
    {
      id: 'cd-res-1',
      title: 'Designing Data-Intensive Applications',
      description:
        'The definitive handbook by Martin Kleppmann on distributed systems, data storage engines, replication, partitioning, and consistency models that outlives specific cloud vendors.',
      url: 'https://dataintensive.net',
      type: 'Book',
      level: 'Advanced',
      cost: 'Paid',
      authorOrProvider: 'Martin Kleppmann (O’Reilly)',
      tags: ['System Design', 'Distributed Systems', 'Architecture', 'Consistency'],
      featured: true,
    },
    {
      id: 'cd-res-2',
      title: 'Google Site Reliability Engineering (SRE) Book',
      description:
        'The free, world-renowned industry standard for operating planet-scale production systems, defining SLOs, error budgets, and blameless post-mortems.',
      url: 'https://sre.google/sre-book/table-of-contents/',
      type: 'Book',
      level: 'Intermediate',
      cost: 'Free',
      authorOrProvider: 'Google SRE Team',
      tags: ['SRE', 'Reliability', 'Observability', 'SLOs'],
      featured: true,
    },
    {
      id: 'cd-res-3',
      title: 'Terraform: Up & Running (3rd Edition)',
      description:
        'Comprehensive, hands-on guide by Yevgeniy Brikman on writing production-grade Infrastructure as Code with reusable modules, remote state locking, and CI/CD.',
      url: 'https://www.terraformupandrunning.com',
      type: 'Book',
      level: 'Intermediate',
      cost: 'Paid',
      authorOrProvider: 'Yevgeniy Brikman',
      tags: ['Terraform', 'IaC', 'Automation', 'Cloud'],
    },
    {
      id: 'cd-res-4',
      title: 'AWS Skill Builder & Official Workshops',
      description:
        'Official self-paced labs and architecture workshops covering VPC design, container deployments, serverless patterns, and security hardening.',
      url: 'https://workshops.aws',
      type: 'Interactive',
      level: 'Beginner',
      cost: 'Free',
      authorOrProvider: 'Amazon Web Services',
      tags: ['AWS', 'Hands-on Labs', 'Workshops', 'Cloud'],
    },
    {
      id: 'cd-res-5',
      title: 'Kubernetes Official Documentation & Interactive Sandbox',
      description:
        'The only authorized documentation resource allowed during the Certified Kubernetes Administrator (CKA) exam. Essential reference for workloads, Gateway API, and networking.',
      url: 'https://kubernetes.io/docs/',
      type: 'Documentation',
      level: 'Intermediate',
      cost: 'Free',
      authorOrProvider: 'Cloud Native Computing Foundation (CNCF)',
      tags: ['Kubernetes', 'CKA', 'Containers', 'Orchestration'],
    },
    {
      id: 'cd-res-6',
      title: 'TechWorld with Nana & DevOps Fundamentals',
      description:
        'Top-rated video series breaking down container virtualization, Kubernetes architecture, CI/CD pipelines, and infrastructure tools from first principles.',
      url: 'https://www.youtube.com/@TechWorldwithNana',
      type: 'Video',
      level: 'Beginner',
      cost: 'Free',
      authorOrProvider: 'Nana Janashia',
      tags: ['DevOps', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      id: 'cd-res-7',
      title: 'Cloud FinOps: Collaborative, Real-Time Cloud Value',
      description:
        'Master the financial and architectural disciplines of cloud cost optimization, tagging hierarchies, unit economics, and avoiding surprise egress bills.',
      url: 'https://www.oreilly.com/library/view/cloud-finops-2nd/9781492098355/',
      type: 'Book',
      level: 'Intermediate',
      cost: 'Paid',
      authorOrProvider: 'J.R. Storment & Mike Fuller',
      tags: ['FinOps', 'Cost Optimization', 'AWS Budgets', 'Economics'],
    },
    {
      id: 'cd-res-8',
      title: 'Killercoda & Play with Docker/Kubernetes',
      description:
        'Instant, browser-based Linux and Kubernetes environments with zero local setup. Ideal for practicing CKA commands, pod networking, and container builds.',
      url: 'https://killercoda.com/',
      type: 'Interactive',
      level: 'Intermediate',
      cost: 'Free',
      authorOrProvider: 'Killercoda / CNCF Community',
      tags: ['Hands-on Labs', 'CKA Prep', 'Sandboxes', 'Linux'],
    },
  ],
  projectsData: [
    {
      id: 'cd-proj-0',
      title: 'First Cloud Server & NGINX Web Host on AWS EC2 Free Tier',
      phase: 'Phase 1: Cloud Fundamentals & Compute',
      difficulty: 'Beginner',
      description:
        'The essential Day 1 cloud milestone: launch an Amazon Linux EC2 micro instance on the AWS Free Tier, configure a Security Group (SSH port 22 and HTTP port 80), connect securely via terminal SSH, install NGINX, and serve your own custom HTML webpage reachable live over the public internet.',
      techStack: ['AWS EC2 (t2/t3.micro)', 'Linux (Amazon Linux 2023)', 'SSH & Key Pairs', 'NGINX', 'Security Groups'],
      learningOutcomes: [
        'Navigating the AWS Management Console and launching compute within Free Tier limits',
        'Configuring Security Group inbound firewall rules to allow public web (HTTP) and SSH traffic',
        'Connecting to a remote Linux cloud server using SSH key pairs from your local terminal',
        'Installing packages with dnf, managing system services with systemctl, and serving web files',
      ],
    },
    {
      id: 'cd-proj-1',
      title: 'Static Site Done Properly with CloudFront, S3 & OIDC CI/CD',
      phase: 'Phase 1 - 2: Cloud Fundamentals & Core Services',
      difficulty: 'Beginner',
      description:
        'Host a static website or portfolio on AWS S3 and CloudFront CDN. Start with basic S3 bucket hosting, then graduate to secure edge delivery with CloudFront, free HTTPS (ACM), security headers, and automated GitHub Actions deployment on git push with zero hardcoded credentials.',
      techStack: ['AWS S3', 'Amazon CloudFront', 'ACM (SSL/TLS)', 'Route 53', 'GitHub Actions', 'AWS Budgets'],
      learningOutcomes: [
        'Enforce Origin Access Control (OAC) ensuring S3 buckets remain completely private',
        'Deploy automated CDN cache invalidation on code push via keyless GitHub Actions OIDC',
        'Configure automated billing alarms and cost guardrails ensuring total spend remains under $1/month',
        'Author an architectural system diagram and cost breakdown artifact for portfolio review',
      ],
    },
    {
      id: 'cd-proj-2',
      title: 'Containerized 3-Tier Microservices on Kubernetes, Fully IaC',
      phase: 'Phase 3 - 4: Kubernetes & Infrastructure as Code',
      difficulty: 'Intermediate',
      description:
        'Containerize a multi-tier application (React frontend, Node/Go API, PostgreSQL database), deploy to an EKS/GKE cluster with Gateway API ingress, automated TLS certificates, Secrets Manager injection, and horizontal auto-scaling (HPA) under load — with 100% of the infrastructure defined as modular Terraform code.',
      techStack: ['Kubernetes (EKS/GKE)', 'Terraform', 'Docker', 'Gateway API / Ingress', 'Cert-Manager', 'HPA', 'AWS Secrets Manager', 'GitHub Actions'],
      learningOutcomes: [
        'Provision multi-environment Kubernetes clusters using modular Terraform with remote state locking',
        'Execute zero-downtime rolling deployments and demonstrate self-healing under pod eviction chaos',
        'Configure Horizontal Pod Autoscaler (HPA) to scale pods dynamically based on CPU/memory thresholds',
        'Execute a deliberate bad deploy, document the automated rollback, and capture proof in PR comments',
      ],
    },
    {
      id: 'cd-proj-3',
      title: 'Observable Event-Driven Serverless Pipeline & DR Chaos Platform',
      phase: 'Phase 5: Serverless, Observability & Architecture',
      difficulty: 'Advanced',
      description:
        'Architect an event-driven serverless data streaming pipeline (API Gateway → SQS/EventBridge → Lambda → S3 data lake) with dead-letter queues, idempotent processing, distributed OpenTelemetry tracing, and Grafana dashboard alerts. Includes a formal Well-Architected 6-pillar audit and chaos disaster recovery drill.',
      techStack: ['AWS Lambda', 'Amazon EventBridge', 'Amazon SQS', 'OpenTelemetry', 'Prometheus', 'Grafana', 'AWS KMS', 'Terraform'],
      learningOutcomes: [
        'Implement resilient asynchronous message pipelines with dead-letter queues and retry idempotency',
        'Trace requests across distributed microservices using OpenTelemetry context propagation and Grafana',
        'Author a formal 6-pillar AWS Well-Architected Framework review evaluating security, cost, and reliability',
        'Document an actual incident post-mortem simulating availability zone outage with measured RTO/RPO',
      ],
    },
  ],
  prerequisites: {
    overview:
      'Essential systems literacy, cloud billing guardrails, and networking foundations required before deploying production cloud architectures and automation pipelines.',
    items: [
      {
        title: 'Hardware & Account Billing Guardrails',
        description:
          '8 GB RAM (16 GB for local containers), 20–30 GB disk space, virtualization enabled in BIOS (WSL2/Docker). Stable internet connection. For AWS, establish billing alarms and budget alerts on day one to safeguard free credits.',
        level: 'Essential',
        skills: ['Virtualization (BIOS/WSL2)', 'AWS Free Tier & Billing Alarms', 'GCP / Oracle Always Free', 'Stable SSH Sessions'],
      },
      {
        title: 'Terminal, Linux & Tooling Foundations',
        description:
          'Command-line confidence (bash/zsh, ssh, scp, vim), Git version control, VS Code Remote-SSH, Docker Desktop basics, and fundamental CLI tools (curl, jq, and package managers).',
        level: 'Essential',
        skills: ['Bash & Shell Navigation', 'SSH Key Authentication', 'Git & GitHub', 'Docker Container Basics'],
      },
      {
        title: 'Networking & Cloud Architecture Basics',
        description:
          'Core networking mechanics (IPv4, CIDR subnets, DNS, TCP/UDP ports, TLS certificates) combined with cloud fundamentals: AWS Shared Responsibility Model, regions vs availability zones, and IaaS vs PaaS concepts.',
        level: 'Essential',
        skills: ['CIDR Subnetting & DNS', 'TCP/UDP & Ports', 'Shared Responsibility Model', 'Regions & Availability Zones'],
      },
    ],
  },
};
