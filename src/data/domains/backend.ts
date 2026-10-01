import type { DomainConfig } from '../../types';

export const backendDomain: DomainConfig = {
  id: 'backend',
  slug: 'backend',
  name: 'Backend Engineering & Distributed Systems',
  shortName: 'Backend',
  badge: 'Active Track',
  iconName: 'Server',
  heroHeadline: 'Build scalable APIs, robust databases & production-ready backend systems',
  heroTagline: 'Python, FastAPI, Django & PostgreSQL fundamentals · REST APIs, authentication, caching, asynchronous processing, Docker, and distributed systems',
  heroCtaText: 'Explore Backend Roadmap',
  roadmapData: [
    {
      id: 'be-phase-1',
      phaseNumber: 1,
      title: 'Backend Foundations & API Fundamentals',
      tagline: 'Learn how backend systems work and build your first real-world APIs.',
      duration: '4 Weeks',
      difficulty: 'Beginner',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Code',
      overview:
        'Understand the core mechanics of backend development: Python language mastery, HTTP request-response cycles, REST architectural principles, and rapid API development with FastAPI and Pydantic.',
      topics: [
        {
          id: 'be-p1-t1',
          name: 'Python for Backend Development',
          summary:
            'Functions, OOP, modules, exceptions, virtual environments, packages, and clean coding practices.',
          keySkills: ['Functions & OOP', 'Modules & Packages', 'Virtual Environments', 'Exception Handling', 'Type Hints'],
          recommendedResources: [
            { title: 'Python 3 Official Documentation', url: 'https://docs.python.org/3/', type: 'Documentation' },
          ],
        },
        {
          id: 'be-p1-t2',
          name: 'HTTP & REST APIs',
          summary:
            'Understand requests, responses, HTTP methods, status codes, JSON, REST principles, and API testing.',
          keySkills: ['HTTP Methods (GET/POST/PUT/DELETE)', 'Status Codes', 'JSON Payloads', 'RESTful Principles', 'API Testing (Postman/Curl)'],
          recommendedResources: [
            { title: 'MDN: An Overview of HTTP', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP', type: 'Documentation' },
          ],
        },
        {
          id: 'be-p1-t3',
          name: 'FastAPI Fundamentals',
          summary:
            'Routing, request validation, Pydantic models, dependency injection, and automatic API documentation.',
          keySkills: ['FastAPI Routing', 'Pydantic Schemas', 'Request Validation', 'Dependency Injection', 'Swagger / OpenAPI Docs'],
          recommendedResources: [
            { title: 'FastAPI Official Documentation & Tutorial', url: 'https://fastapi.tiangolo.com/', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Task Management REST API',
        description:
          'Build a production-grade CRUD API for users and tasks with validation, proper HTTP status codes, and interactive Swagger documentation.',
        deliverables: [
          'Build CRUD APIs for users and tasks',
          'Implement validation and proper HTTP status codes with Pydantic',
          'Document and test APIs using Swagger UI and Postman collections',
        ],
      },
    },
    {
      id: 'be-phase-2',
      phaseNumber: 2,
      title: 'Databases & Backend Architecture',
      tagline: 'Learn how backend applications store, structure, and efficiently retrieve data.',
      duration: '5 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Database',
      overview:
        'Master data persistence: write SQL queries in PostgreSQL, model complex schemas with SQLAlchemy ORM, manage schema migrations, and apply normalization to ensure relational integrity.',
      topics: [
        {
          id: 'be-p2-t1',
          name: 'SQL & PostgreSQL',
          summary:
            'Tables, relationships, constraints, joins, indexes, transactions, and query optimization.',
          keySkills: ['Table DDL & Constraints', 'INNER & LEFT JOINs', 'B-Tree Indexes', 'ACID Transactions', 'Query Optimization'],
          recommendedResources: [
            { title: 'PostgreSQL Official Documentation', url: 'https://www.postgresql.org/docs/', type: 'Documentation' },
          ],
        },
        {
          id: 'be-p2-t2',
          name: 'ORM & Database Integration',
          summary:
            'Models, migrations, relationships, transactions, and connecting databases to backend applications.',
          keySkills: ['SQLAlchemy Models', 'Alembic Migrations', 'Connection Pooling', 'Session Management', 'Eager vs Lazy Loading'],
          recommendedResources: [
            { title: 'SQLAlchemy Official Documentation', url: 'https://docs.sqlalchemy.org/', type: 'Documentation' },
          ],
        },
        {
          id: 'be-p2-t3',
          name: 'Database Design & Normalization',
          summary:
            'Normalization, primary keys, foreign keys, and one-to-many and many-to-many relationships.',
          keySkills: ['1NF / 2NF / 3NF Normalization', 'Primary & Foreign Keys', 'One-to-Many & Many-to-Many', 'Cascading Deletes', 'Schema Modeling'],
          recommendedResources: [
            { title: 'PostgreSQL Tutorial: Data Modeling & Schema Design', url: 'https://www.postgresql.org/docs/current/tutorial.html', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Event Management Backend',
        description:
          'Design a relational PostgreSQL database with full event, user, registration, and ticket APIs featuring relationships, constraints, and atomic transactions.',
        deliverables: [
          'Design a normalized relational PostgreSQL database schema',
          'Build event, user, registration, and ticket APIs with SQLAlchemy',
          'Implement relational constraints, foreign keys, and transactional ticket booking',
        ],
      },
    },
    {
      id: 'be-phase-3',
      phaseNumber: 3,
      title: 'Authentication, Security & Production APIs',
      tagline: 'Turn basic APIs into secure backend services ready for real users.',
      duration: '5 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Shield',
      overview:
        'Harden your APIs against vulnerabilities: implement stateless JWT authentication with access/refresh token rotation, enforce role-based access control, mitigate OWASP top API threats, and write robust test suites with Pytest.',
      topics: [
        {
          id: 'be-p3-t1',
          name: 'Authentication & Authorization',
          summary:
            'Password hashing, JWT, access and refresh tokens, roles, permissions, and protected endpoints.',
          keySkills: ['Bcrypt Password Hashing', 'JWT Token Signing & Verification', 'Access & Refresh Tokens', 'Role-Based Access Control (RBAC)', 'Protected Route Guards'],
          recommendedResources: [
            { title: 'OWASP Authentication Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html', type: 'Documentation' },
          ],
        },
        {
          id: 'be-p3-t2',
          name: 'API Security & Vulnerability Defense',
          summary:
            'CORS, rate limiting, input validation, secrets management, and common API vulnerabilities.',
          keySkills: ['CORS Configuration', 'Rate Limiting Algorithms', 'SQL Injection & XSS Prevention', 'Secrets Management (.env)', 'OWASP API Security Top 10'],
          recommendedResources: [
            { title: 'OWASP API Security Project', url: 'https://owasp.org/API-Security/', type: 'Documentation' },
          ],
        },
        {
          id: 'be-p3-t3',
          name: 'Testing, Error Handling & Logging',
          summary:
            'Unit testing, integration testing, exception handling, logging, and reliable API design.',
          keySkills: ['Pytest Fixtures & TestClient', 'Unit & Integration Testing', 'Custom Exception Handlers', 'Structured JSON Logging', 'Mocking External Services'],
          recommendedResources: [
            { title: 'Pytest: Robust Python Testing Documentation', url: 'https://docs.pytest.org/', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Secure User & Service API',
        description:
          'Implement a bulletproof user authentication and service gateway with JWT tokens, role-based authorization, rate limiting, centralized logging, and automated Pytest coverage.',
        deliverables: [
          'Implement JWT authentication and role-based authorization (RBAC)',
          'Add centralized error handling, input validation, and structured logging',
          'Write automated unit and integration tests with Pytest for critical API paths',
        ],
      },
    },
    {
      id: 'be-phase-4',
      phaseNumber: 4,
      title: 'Caching, Messaging & Asynchronous Systems',
      tagline: 'Learn how modern backend systems handle high traffic and background workloads.',
      duration: '5 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Cpu',
      overview:
        'Scale beyond synchronous bottlenecks: introduce Redis in-memory caching to drop database read latency, offload CPU-intensive tasks with Celery background workers, and decouple system events using Apache Kafka.',
      topics: [
        {
          id: 'be-p4-t1',
          name: 'Redis & Caching Strategies',
          summary:
            'Caching strategies, TTL, cache invalidation, sessions, and rate limiting.',
          keySkills: ['Cache-Aside Pattern', 'TTL & Eviction Policies', 'In-Memory Session Stores', 'Distributed Locks', 'Redis Data Structures (Hashes/Sorted Sets)'],
          recommendedResources: [
            { title: 'Redis Official Documentation', url: 'https://redis.io/docs/', type: 'Documentation' },
          ],
        },
        {
          id: 'be-p4-t2',
          name: 'Background Jobs & Message Queues',
          summary:
            'Asynchronous processing, workers, queues, retries, and reliable task execution.',
          keySkills: ['Celery & Redis Broker', 'Async Task Offloading', 'Exponential Backoff Retries', 'Dead Letter Queues', 'Periodic Crons with Celery Beat'],
          recommendedResources: [
            { title: 'Celery Distributed Task Queue Documentation', url: 'https://docs.celeryq.dev/', type: 'Documentation' },
          ],
        },
        {
          id: 'be-p4-t3',
          name: 'Event-Driven Architecture & Kafka',
          summary:
            'Producers, consumers, events, Kafka fundamentals, and asynchronous communication.',
          keySkills: ['Event-Driven Design Patterns', 'Kafka Topics & Partitions', 'Producers & Consumer Groups', 'At-Least-Once Delivery Semantics', 'Decoupled Microservice Messaging'],
          recommendedResources: [
            { title: 'Apache Kafka Official Documentation', url: 'https://kafka.apache.org/documentation/', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Event-Driven Notification System',
        description:
          'Build an asynchronous notification pipeline with Celery workers, Redis caching, and Kafka events delivering notifications with retries and dead-letter queues.',
        deliverables: [
          'Build asynchronous background workers for email and webhook delivery',
          'Implement Redis caching layer with intelligent TTL invalidation',
          'Process event-driven notification queues with retries and failure handling',
        ],
      },
    },
    {
      id: 'be-phase-5',
      phaseNumber: 5,
      title: 'Deployment & Distributed Backend Systems',
      tagline: 'Move from writing backend code to designing systems that can handle real-world traffic.',
      duration: '6 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Server',
      overview:
        'Operate at production scale: containerize multi-service architectures with Docker Compose, design horizontally scalable systems with load balancing and database replication, and instrument distributed tracing with OpenTelemetry.',
      topics: [
        {
          id: 'be-p5-t1',
          name: 'Docker & Containerized Deployment',
          summary:
            'Containerization, environment variables, Docker Compose, CI/CD, and production deployment.',
          keySkills: ['Multi-Stage Dockerfiles', 'Docker Compose Multi-Container Orchestration', 'Reverse Proxy (Nginx)', 'GitHub Actions CI/CD', 'Production Environment Security'],
          recommendedResources: [
            { title: 'Docker Official Documentation & Guides', url: 'https://docs.docker.com/', type: 'Documentation' },
          ],
        },
        {
          id: 'be-p5-t2',
          name: 'System Design & Scalability',
          summary:
            'Load balancing, horizontal scaling, database replication, service boundaries, queues, caching, and fault tolerance.',
          keySkills: ['Load Balancing Algorithms', 'Horizontal vs Vertical Scaling', 'Read Replicas & Connection Pooling', 'Circuit Breakers', 'CAP Theorem & High Availability'],
          recommendedResources: [
            { title: 'System Design Primer by Donne Martin', url: 'https://github.com/donnemartin/system-design-primer', type: 'GitHub' },
          ],
        },
        {
          id: 'be-p5-t3',
          name: 'Observability & Reliability',
          summary:
            'Logging, metrics, monitoring, health checks, graceful failures, and performance analysis.',
          keySkills: ['Distributed Tracing (OpenTelemetry)', 'Prometheus Metrics & Health Checks', 'Grafana Dashboards', 'Graceful Shutdown Handlers', 'Latency Profiling & P99 SLAs'],
          recommendedResources: [
            { title: 'OpenTelemetry Documentation & Standards', url: 'https://opentelemetry.io/docs/', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Scalable Backend Platform',
        description:
          'Deploy a containerized backend with PostgreSQL and Redis, caching, and asynchronous processing, with architecture documentation and scaling strategies.',
        deliverables: [
          'Deploy a multi-container Docker Compose backend with PostgreSQL and Redis',
          'Implement caching and asynchronous task processing with background workers',
          'Document the system architecture, scaling strategy, and design decisions',
        ],
      },
    },
  ],
  hostsData: [
    {
      id: 'be-host-1',
      name: 'Sai Kishore S',
      role: 'Lead Backend Mentor',
      headline: 'Backend Engineering & API Development Specialist',
      topicOrFocus: 'FastAPI, Django, PostgreSQL, Redis & Scalable Systems',
      bio: 'Backend developer focused on building practical and scalable applications using Python, FastAPI, Django, PostgreSQL, Redis, and Docker. Guides students from backend fundamentals to designing and deploying production-ready systems.',
      avatarUrl: '/avatar-backend.jpg',
      initials: 'SK',
      socials: {
        github: 'https://github.com/Saikishore67',
        linkedin: 'https://www.linkedin.com/in/saikishore67/',
        instagram: 'https://www.instagram.com/skr.offl_/',
        email: 'saravanansaikishore67@gmail.com',
      },
    },
    {
      id: 'be-host-2',
      name: 'Kamlesh A',
      role: 'Backend Development Mentor',
      headline: 'Backend Development & API Engineering',
      topicOrFocus: 'REST APIs, Database Architecture, Celery & Docker Deployment',
      bio: 'Backend developer focused on building practical applications and APIs using Python, Flask, FastAPI, PostgreSQL, SQLAlchemy, Redis, Celery, Docker, and GitHub Actions. Works on real-world backend systems involving REST APIs, database-driven applications, authentication, background processing, QR-based workflows, and deployment. Guides students in understanding backend concepts through hands-on projects and practical problem solving.',
      avatarUrl: '/host-anime-5.jpg',
      initials: 'KA',
      socials: {
        github: 'https://github.com/kamlesh-codedev',
        linkedin: 'https://www.linkedin.com/in/kamlesh-a-5b8579381/',
        instagram: 'https://www.instagram.com/its_kml_07/',
        email: 'kamlesh.a2007@gmail.com',
      },
    },
    {
      id: 'be-host-3',
      name: 'Sarvin S',
      role: 'Backend Developer',
      headline: 'Backend Development & API Engineering Enthusiast',
      topicOrFocus: 'Python, FastAPI, PostgreSQL, Docker & Competitive Programming',
      bio: 'Backend developer focused on building practical applications and APIs using Python, FastAPI, PostgreSQL, Docker, and related technologies. Interested in backend engineering, system design, competitive programming, and building real-world software projects.',
      avatarUrl: '/sarvin.jpg',
      initials: 'SS',
      socials: {
        github: 'https://github.com/telebot-deploy',
        linkedin: 'https://www.linkedin.com/in/sarvin-s-854a66399/',
        instagram: 'https://www.instagram.com/_sarvin.s_/',
        email: 'sarvin25208@gmail.com',
      },
    },
  ],
  resourcesData: [
    {
      id: 'be-res-1',
      title: 'FastAPI Full Course',
      description:
        'A practical introduction to building REST APIs with FastAPI, covering routing, validation, authentication, databases, and deployment.',
      url: 'https://www.youtube.com/watch?v=tLKKmouUams',
      type: 'Video',
      level: 'Beginner',
      cost: 'Free',
      authorOrProvider: 'freeCodeCamp.org',
      tags: ['FastAPI', 'Python', 'REST API', 'Databases', 'Pydantic'],
      featured: true,
    },
    {
      id: 'be-res-2',
      title: 'PostgreSQL Full Course',
      description:
        'Provides a beginner-friendly foundation in SQL, relational databases, joins, constraints, indexes, and PostgreSQL.',
      url: 'https://www.youtube.com/watch?v=qw--VYLpxG4',
      type: 'Video',
      level: 'Beginner',
      cost: 'Free',
      authorOrProvider: 'freeCodeCamp.org',
      tags: ['PostgreSQL', 'SQL', 'Databases', 'Relational', 'Indexes'],
    },
    {
      id: 'be-res-3',
      title: 'System Design Primer',
      description:
        'An open-source roadmap for learning how to design large-scale systems, covering load balancing, caching, sharding, and queues.',
      url: 'https://github.com/donnemartin/system-design-primer',
      type: 'GitHub',
      level: 'Intermediate',
      cost: 'Free',
      authorOrProvider: 'Donne Martin',
      tags: ['System Design', 'Scalability', 'Distributed Systems', 'Caching'],
    },
    {
      id: 'be-res-4',
      title: 'OWASP API Security Top 10',
      description:
        'The definitive industry benchmark on the most critical security risks facing modern application programming interfaces.',
      url: 'https://owasp.org/API-Security/',
      type: 'Documentation',
      level: 'Intermediate',
      cost: 'Free',
      authorOrProvider: 'OWASP Foundation',
      tags: ['Security', 'API', 'OWASP', 'Authentication', 'Authorization'],
    },
    {
      id: 'be-res-5',
      title: 'Designing Data-Intensive Applications (DDIA)',
      description:
        'The standard reference text for distributed data systems by Martin Kleppmann, covering replication, partitioning, and consistency.',
      url: 'https://dataintensive.net',
      type: 'Book',
      level: 'Advanced',
      cost: 'Paid',
      authorOrProvider: 'Martin Kleppmann (O’Reilly)',
      tags: ['Distributed Systems', 'Databases', 'Replication', 'Consensus'],
    },
  ],
  projectsData: [
    {
      id: 'be-proj-1',
      title: 'TaskFlow — Task Management API',
      phase: 'Phase 1 - 2',
      difficulty: 'Beginner',
      description:
        'Build a clean REST API where users can create, update, organize, and track their tasks. Start with zero-configuration SQLite for rapid local development before graduating to PostgreSQL, focusing on clean CRUD endpoints, Pydantic request validation, and auto-generated Swagger documentation.',
      techStack: ['Python', 'FastAPI', 'SQLite / PostgreSQL', 'SQLAlchemy / Pydantic', 'Swagger UI'],
      learningOutcomes: [
        'Building REST APIs with CRUD operations, status codes, and Pydantic request validation',
        'Designing relational database models and querying data using an ORM (SQLAlchemy or SQLModel)',
        'Testing endpoints interactively using auto-generated FastAPI Swagger UI docs',
      ],
    },
    {
      id: 'be-proj-2',
      title: 'EventFlow — Event Management Platform',
      phase: 'Phase 2 - 4',
      difficulty: 'Intermediate',
      description:
        'Build a complete event management backend where users can create events, register for events, manage capacity, and receive notifications.',
      techStack: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
      learningOutcomes: [
        'Designing relational databases and production-ready REST APIs',
        'Implementing authentication, caching, background processing, and deployment',
      ],
    },
    {
      id: 'be-proj-3',
      title: 'Distributed Notification & Messaging Platform',
      phase: 'Phase 4 - 5',
      difficulty: 'Advanced',
      description:
        'Build an event-driven backend that processes notifications asynchronously across multiple services while handling retries, failures, and high traffic.',
      techStack: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
      learningOutcomes: [
        'Designing event-driven and distributed backend architectures',
        'Implementing message queues, asynchronous processing, caching, fault tolerance, and scaling',
      ],
    },
  ],
  prerequisites: {
    overview:
      'Recommended baseline before designing relational schemas, writing high-throughput REST APIs, and architecting distributed message queues.',
    items: [
      {
        title: 'Python / General Programming Syntax',
        description:
          'Comfortable with functions, control structures, lists, dictionaries, exception handling, and basic object-oriented principles.',
        level: 'Essential',
        skills: ['Python / OOP', 'Functions & Scope', 'Data Structures', 'Exception Handling'],
      },
      {
        title: 'Basic Networking & Web Concepts',
        description:
          'Conceptual understanding of how the web works: client-server model, IP addresses, ports, HTTP requests, responses, and JSON data formats.',
        level: 'Essential',
        skills: ['Client-Server Model', 'HTTP Methods', 'JSON Payloads', 'DNS & Ports'],
      },
      {
        title: 'Terminal & Database Curiosity',
        description:
          'Comfort navigating the command line and an intuitive understanding of structured data (spreadsheets, tables, rows, and relationships).',
        level: 'Recommended',
        skills: ['CLI Navigation', 'Table Relationships', 'Environment Variables', 'Git Flow'],
      },
    ],
  },
};
