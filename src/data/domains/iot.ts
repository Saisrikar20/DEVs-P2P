import type { DomainConfig } from '../../types';

export const iotDomain: DomainConfig = {
  id: 'iot',
  slug: 'iot',
  name: 'Internet of Things & Embedded Systems',
  shortName: 'IoT',
  badge: 'Active Track',
  iconName: 'Cpu',
  heroHeadline: 'Connected devices, embedded intelligence, wireless networks & real-world automation',
  heroTagline:
    'ESP32, STM32 & Arduino · sensors, MQTT, LoRa, BLE, edge computing, cloud platforms and IoT system architecture. Build devices that sense, communicate, decide and act.',
  heroCtaText: 'Explore IoT Roadmap',
  roadmapData: [
    {
      id: 'iot-phase-1',
      phaseNumber: 1,
      title: 'Embedded Foundations: Microcontrollers & Electronics',
      tagline: 'Learn how physical sensors and electronic components become programmable systems.',
      duration: '4 Weeks',
      difficulty: 'Beginner',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Cpu',
      overview:
        'Build the hardware and firmware bedrock: master Arduino, ESP32, and STM32 fundamentals, GPIO multiplexing, analog-to-digital converters, timers, interrupts, and serial bus protocols.',
      topics: [
        {
          id: 'iot-p1-t1',
          name: 'Microcontrollers & GPIO',
          summary:
            'Learn Arduino, ESP32 and STM32 fundamentals, GPIO, ADC, PWM, timers and interrupts.',
          keySkills: ['Arduino & ESP32 Basics', 'GPIO & Digital I/O', 'ADC & PWM Signals', 'Hardware Interrupts & Timers'],
          recommendedResources: [
            { title: 'ESP32 Official Documentation', url: 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32/', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p1-t2',
          name: 'Sensors & Actuators',
          summary:
            'Interface temperature, pressure, IMU, ultrasonic and environmental sensors with motors, LEDs, relays and servos.',
          keySkills: ['Analog & Digital Sensors', 'Sensor Calibration', 'Relay Switching', 'PWM Motor & Servo Control'],
          recommendedResources: [
            { title: 'Arduino Hardware Documentation', url: 'https://docs.arduino.cc/', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p1-t3',
          name: 'Communication Protocols',
          summary:
            'Understand UART, I2C and SPI interfaces and learn when to use each bus protocol.',
          keySkills: ['UART Serial Debugging', 'I2C Addressing & Bus Pull-ups', 'SPI High-Speed Data Transfers', 'Packet Framing'],
          recommendedResources: [
            { title: 'Adafruit Learning System: Bus Protocols', url: 'https://learn.adafruit.com/', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Smart Environmental Monitoring Node',
        description:
          'Build an ESP32-based environmental telemetry node acquiring live temperature, humidity, and barometric pressure data with USB/serial streaming.',
        deliverables: [
          'ESP32-based sensor acquisition system using I2C/SPI interfaces',
          'Temperature, humidity and barometric pressure data sampling',
          'Serial / USB dashboard displaying live formatted telemetry',
        ],
      },
    },
    {
      id: 'iot-phase-2',
      phaseNumber: 2,
      title: 'Wireless IoT: Connectivity & Device Communication',
      tagline: 'Make embedded devices communicate reliably across short and long distances.',
      duration: '4 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Radio',
      overview:
        'Connect physical hardware to the digital world: implement Wi-Fi client and AP modes, publish telemetry over lightweight MQTT, transmit long-range LoRa packets, and configure BLE GATT servers.',
      topics: [
        {
          id: 'iot-p2-t1',
          name: 'Wi-Fi & HTTP Client/Server',
          summary:
            'Connect ESP32 devices to networks, create REST APIs, and exchange sensor data with remote servers.',
          keySkills: ['ESP32 Wi-Fi Station & AP', 'HTTP GET & POST Requests', 'JSON Serialization', 'Embedded Web Servers'],
          recommendedResources: [
            { title: 'ESP-IDF HTTP Server Documentation', url: 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/protocols/esp_http_server.html', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p2-t2',
          name: 'MQTT Protocol & Pub/Sub',
          summary:
            'Learn brokers, publishers, subscribers, topics, QoS delivery levels, and device-to-cloud messaging.',
          keySkills: ['Publish/Subscribe Pattern', 'QoS 0/1/2 Guarantees', 'Topic Hierarchies', 'Broker Setup (Mosquitto)'],
          recommendedResources: [
            { title: 'MQTT.org Protocol Specification', url: 'https://mqtt.org/', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p2-t3',
          name: 'LoRa & Long-Range Communication',
          summary:
            'Understand low-power wide-area communication and build point-to-point telemetry systems.',
          keySkills: ['Chirp Spread Spectrum', 'Point-to-Point LoRa', 'Spreading Factors & Link Budgets', 'Antenna Tuning'],
          recommendedResources: [
            { title: 'The Things Network Documentation', url: 'https://www.thethingsnetwork.org/', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p2-t4',
          name: 'Bluetooth Low Energy (BLE)',
          summary:
            'Build low-power Bluetooth communication between embedded devices and smartphones.',
          keySkills: ['BLE GATT Architecture', 'Custom Services & Characteristics', 'Advertising Beacons', 'Smartphone Pairing'],
          recommendedResources: [
            { title: 'Bluetooth Developer Resources', url: 'https://www.bluetooth.com/develop-with-bluetooth/', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Long-Range IoT Telemetry System',
        description:
          'Construct an end-to-end long-range telemetry pipeline utilizing ESP32 microcontrollers, LoRa radio transmission, and a real-time receiver dashboard.',
        deliverables: [
          'Battery-powered sensor node using ESP32 and calibrated environmental sensors',
          'Point-to-point LoRa-based wireless communication over multi-kilometer range',
          'Receiver node with serial/OLED display presenting live telemetry metrics',
        ],
      },
    },
    {
      id: 'iot-phase-3',
      phaseNumber: 3,
      title: 'Cloud IoT, Telemetry Pipelines & Dashboards',
      tagline: 'Stream sensor data to cloud platforms, time-series storage, and live visualization hubs.',
      duration: '4 Weeks',
      difficulty: 'Intermediate',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Activity',
      overview:
        'Bridge the gap from edge to cloud: ingest real-time MQTT data into time-series databases like InfluxDB, build bidirectional Node-RED pipelines, and construct interactive Grafana telemetry dashboards.',
      topics: [
        {
          id: 'iot-p3-t1',
          name: 'Cloud IoT Ingestion & Brokers',
          summary:
            'Device provisioning, cloud MQTT brokers, AWS IoT Core, and TLS security certificates.',
          keySkills: ['Cloud Broker Provisioning', 'X.509 Device Certificates', 'Rule Engines & Webhooks', 'JSON Payload Validation'],
          recommendedResources: [
            { title: 'AWS IoT Architecture Center', url: 'https://aws.amazon.com/iot/', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p3-t2',
          name: 'Time-Series Data & Storage',
          summary:
            'Store continuous sensor streams efficiently using InfluxDB and TimescaleDB with retention policies.',
          keySkills: ['InfluxDB / TimescaleDB', 'Sensor Data Downsampling', 'Query Optimization', 'Retention Policies'],
          recommendedResources: [
            { title: 'InfluxDB Documentation', url: 'https://docs.influxdata.com/', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p3-t3',
          name: 'Node-RED & Live Dashboards',
          summary:
            'Build automated event workflows and visual telemetry dashboards with Node-RED and Grafana.',
          keySkills: ['Node-RED Visual Flow Programming', 'Grafana Dashboard Design', 'Threshold Alerting', 'Bidirectional Control'],
          recommendedResources: [
            { title: 'Node-RED Official Guide', url: 'https://nodered.org/docs/', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Centralized Cloud Telemetry Hub',
        description:
          'Deploy a multi-sensor cloud telemetry hub with MQTT data ingestion, InfluxDB time-series storage, automated alert notifications, and a Grafana dashboard.',
        deliverables: [
          'Secure device-to-cloud MQTT streaming with authentication',
          'InfluxDB database schema optimized for high-frequency sensor readings',
          'Real-time Grafana dashboard with anomaly thresholds and SMS/email alerts',
        ],
      },
    },
    {
      id: 'iot-phase-4',
      phaseNumber: 4,
      title: 'Advanced Embedded IoT: RTOS, Security & Reliable Systems',
      tagline: 'Move from hobby-grade prototypes toward reliable, commercial embedded products.',
      duration: '5 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Shield',
      overview:
        'Engineer mission-critical reliability: coordinate concurrent sensor tasks with FreeRTOS, secure communications with hardware-accelerated TLS, deliver Over-The-Air (OTA) firmware updates, and optimize deep-sleep power states.',
      topics: [
        {
          id: 'iot-p4-t1',
          name: 'FreeRTOS Task Orchestration',
          summary:
            'Tasks, queues, semaphores, mutexes, priority scheduling, and deterministic real-time design.',
          keySkills: ['FreeRTOS Task Scheduling', 'Queue-Based Inter-Task Communication', 'Mutexes & Semaphores', 'Deadlock & Jitter Prevention'],
          recommendedResources: [
            { title: 'FreeRTOS Official Documentation', url: 'https://www.freertos.org/', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p4-t2',
          name: 'IoT Security & Hardware Cryptography',
          summary:
            'Device authentication, TLS encryption, secure credentials storage, and hardware root of trust.',
          keySkills: ['mTLS Communication', 'Secure Boot & Flash Encryption', 'Hardware Key Storage (eFuse)', 'OWASP IoT Top 10 Mitigation'],
          recommendedResources: [
            { title: 'OWASP IoT Security Guidance', url: 'https://owasp.org/www-project-internet-of-things/', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p4-t3',
          name: 'OTA Firmware Updates',
          summary:
            'Update deployed fleet devices remotely without physically accessing installed hardware.',
          keySkills: ['Dual-Partition Bootloader', 'Signed Firmware Binaries', 'Rollback Protection', 'Automated Fleet Updates'],
          recommendedResources: [
            { title: 'ESP-IDF OTA Documentation', url: 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/ota.html', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p4-t4',
          name: 'Ultra-Low Power Management',
          summary:
            'Deep sleep, duty cycling, battery fuel gauges, and multi-year battery wireless design.',
          keySkills: ['Deep Sleep & Light Sleep Modes', 'ULP Coprocessor Programming', 'Power Budget Calculations', 'Capacitive / Timer Wakeups'],
          recommendedResources: [
            { title: 'ESP32 Low-Power Mode Documentation', url: 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/sleep_modes.html', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Secure Battery-Powered IoT Node',
        description:
          'Design an ultra-low power ESP32/STM32 device featuring cryptographic hardware authentication, deep-sleep battery cycling, and secure OTA firmware update rollouts.',
        deliverables: [
          'ESP32/STM32-based ultra-low power device achieving microamp idle consumption',
          'Cryptographically authenticated wireless communication over TLS',
          'Automated over-the-air (OTA) firmware upgrade and rollback mechanism',
        ],
      },
    },
    {
      id: 'iot-phase-5',
      phaseNumber: 5,
      title: 'System Architecture & Product Development: Production-Grade IoT Systems',
      tagline: 'Design complete IoT systems connecting hardware, software, networks and intelligence.',
      duration: '6 Weeks',
      difficulty: 'Advanced',
      color: '#ffffff',
      badgeColor: 'bg-zinc-800 text-zinc-200',
      iconName: 'Layers',
      overview:
        'Graduate from breadboards to commercial products: design multi-tier device-to-cloud architectures, execute on-device TinyML machine learning inference, deploy edge gateways, and lay out production custom PCBs in KiCad.',
      topics: [
        {
          id: 'iot-p5-t1',
          name: 'IoT System Architecture',
          summary:
            'Design complete device → gateway → network → cloud → application end-to-end architectures.',
          keySkills: ['Multi-Tier System Design', 'Gateway Protocol Translation', 'Scalability & Fault Tolerance', 'Data Lifecycle Planning'],
          recommendedResources: [
            { title: 'AWS IoT Architecture Center', url: 'https://aws.amazon.com/iot/', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p5-t2',
          name: 'Embedded AI / TinyML',
          summary:
            'Run lightweight machine-learning models directly on microcontrollers and constrained edge hardware.',
          keySkills: ['TensorFlow Lite for Microcontrollers', 'Model INT8 Quantization', 'Vibration Anomaly Detection', 'Audio / Keyword Spotting'],
          recommendedResources: [
            { title: 'TensorFlow Lite for Microcontrollers', url: 'https://www.tensorflow.org/lite/microcontrollers', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p5-t3',
          name: 'Gateway & Edge Networks',
          summary:
            'Build edge topologies where multiple distributed sensor nodes communicate through a central gateway.',
          keySkills: ['Edge Computing Concepts', 'Local Data Aggregation & Filtering', 'Node-RED Edge Processing', 'Offline Buffering'],
          recommendedResources: [
            { title: 'Node-RED Edge Computing Guides', url: 'https://nodered.org/', type: 'Documentation' },
          ],
        },
        {
          id: 'iot-p5-t4',
          name: 'Hardware Product Design & PCB',
          summary:
            'Move from breadboards to custom PCBs, enclosures, power circuits, compliance testing, and deployment.',
          keySkills: ['Schematic Capture in KiCad', 'Multi-Layer PCB Layout', 'Power Supply & Protection Circuits', 'Enclosure Design (CAD/3D Printing)'],
          recommendedResources: [
            { title: 'KiCad Official Documentation', url: 'https://www.kicad.org/documentation/', type: 'Documentation' },
          ],
        },
      ],
      milestoneProject: {
        title: 'Autonomous Smart Infrastructure Network',
        description:
          'Architect and build an end-to-end distributed infrastructure network with multi-node wireless telemetry, an edge gateway, cloud analytics, and hardware enclosure design.',
        deliverables: [
          'Multiple distributed wireless IoT sensor nodes with local sensor fusion',
          'Edge gateway handling centralized data aggregation, filtering, and cloud sync',
          'Cloud management dashboard with real-time alerts and automated control triggers',
          'Complete hardware design package including KiCad schematics and prototype documentation',
        ],
      },
    },
  ],
  hostsData: [
    {
      id: 'iot-host-1',
      name: 'Vijay Ghanesh G J',
      role: 'Embedded Systems & Robotics Lead',
      headline: 'Architecting Autonomous Systems, Hardware & Edge Robotics',
      topicOrFocus: 'Autonomous Multirotors, Custom Hardware & ROS 2 Robotics',
      bio: 'I design custom embedded hardware, autonomous multirotors, and ROS 2 mobile robots. I help students bridge the gap between theoretical electronics and deployable, real-world cyber-physical systems.',
      avatarUrl: '/host-anime-4.jpg',
      initials: 'VG',
      socials: {
        github: 'https://github.com/GJVIJAYG',
        linkedin: 'https://www.linkedin.com/in/vijayghaneshgj',
        instagram: 'https://www.instagram.com/vijayghanesh282701',
        email: 'vijayghanesh.gj.2025.bt@rajalakshmi.edu.in',
      },
    },
    {
      id: 'iot-host-2',
      name: 'Chithralekha B',
      role: 'IoT Engineer & Mentor',
      headline: 'Connecting the Physical World Through IoT',
      topicOrFocus: 'Connected Solutions, Microcontrollers & Sensor Systems',
      bio: 'I am an IoT Engineer and mentor passionate about building connected solutions that bridge hardware, software, and real-world needs. My focus is on exploring how sensors, microcontrollers, communication technologies, and intelligent systems can be combined to solve practical problems and create meaningful social impact.',
      avatarUrl: '/avatar-iot.jpg',
      initials: 'CB',
      socials: {
        github: 'https://github.com/lekha35-24',
        linkedin: 'https://www.linkedin.com/in/chithralekhab',
        email: 'chithralekha.b.2025.ece@rajalakshmi.edu.in',
      },
    },
  ],
  resourcesData: [
    {
      id: 'iot-res-1',
      title: 'ESP32 Official Documentation',
      description:
        'A comprehensive reference for learning ESP32 from basic peripherals through networking, security, and advanced firmware development.',
      url: 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32/',
      type: 'Documentation',
      level: 'Beginner',
      cost: 'Free',
      authorOrProvider: 'Espressif Systems',
      tags: ['ESP32', 'Firmware', 'Hardware', 'Peripherals'],
      featured: true,
    },
    {
      id: 'iot-res-2',
      title: 'The Internet of Things: DIY Projects',
      description:
        'Practical project-oriented exposure to sensors, controllers, and connected devices for Arduino, Raspberry Pi, and BeagleBone.',
      url: 'https://www.mcgrawhill.com',
      type: 'Book',
      level: 'Beginner',
      cost: 'Paid',
      authorOrProvider: 'Donald Norris',
      tags: ['Arduino', 'Raspberry Pi', 'Sensors', 'DIY'],
    },
    {
      id: 'iot-res-3',
      title: 'MQTT Protocol Specification & Essentials',
      description:
        'Essential for understanding lightweight publish/subscribe communication used extensively in IoT telemetry and device control.',
      url: 'https://mqtt.org/',
      type: 'Documentation',
      level: 'Intermediate',
      cost: 'Free',
      authorOrProvider: 'OASIS / MQTT.org',
      tags: ['MQTT', 'Protocols', 'Telemetry', 'PubSub'],
    },
    {
      id: 'iot-res-4',
      title: 'FreeRTOS Official Reference Manual',
      description:
        'Introduces the real-time operating system concepts, scheduling algorithms, and inter-task communication needed for sophisticated embedded systems.',
      url: 'https://www.freertos.org/',
      type: 'Documentation',
      level: 'Advanced',
      cost: 'Free',
      authorOrProvider: 'Amazon Web Services',
      tags: ['FreeRTOS', 'RTOS', 'Concurrency', 'Kernel'],
    },
    {
      id: 'iot-res-5',
      title: 'TinyML: Machine Learning on Constrained Edge Devices',
      description:
        'Bridges embedded systems and machine learning by teaching how deep intelligence runs directly on ultra-low-power microcontrollers.',
      url: 'https://www.oreilly.com/library/view/tinyml/9781492052036/',
      type: 'Book',
      level: 'Advanced',
      cost: 'Paid',
      authorOrProvider: 'Pete Warden & Daniel Situnayake (O’Reilly)',
      tags: ['TinyML', 'Edge AI', 'TensorFlow Lite', 'Quantization'],
    },
    {
      id: 'iot-res-6',
      title: 'The Things Network (LoRaWAN Academy)',
      description:
        'Excellent hands-on resource for understanding LoRaWAN architectures, long-range wireless gateways, and large-scale low-power IoT networks.',
      url: 'https://www.thethingsnetwork.org/',
      type: 'Interactive',
      level: 'Intermediate',
      cost: 'Free',
      authorOrProvider: 'The Things Industries',
      tags: ['LoRa', 'LoRaWAN', 'Wireless', 'Long-Range'],
    },
  ],
  projectsData: [
    {
      id: 'iot-proj-easy',
      title: 'Ultrasonic Distance Radar & Proximity LED (Physical or Wokwi Simulator)',
      phase: 'Phase 1: Embedded Foundations',
      difficulty: 'Beginner',
      description:
        'The ideal hands-on hardware starter: wire an HC-SR04 ultrasonic distance sensor with an RGB LED and buzzer on a breadboard (or simulate it 100% free in-browser with Wokwi!). Measure physical distance in centimeters, trigger proximity light colors, and print live telemetry to the Serial Monitor.',
      techStack: ['Arduino Uno / ESP32', 'HC-SR04 Ultrasonic Sensor', 'RGB LED & Resistors', 'Wokwi Simulator / Breadboard', 'C/C++ (Arduino IDE)'],
      videoUrl: 'https://www.youtube.com/watch?v=ZejQOX69K5M',
      videoTitle: 'Paul McWhorter — Ultrasonic Distance Sensor Tutorial',
      learningOutcomes: [
        'Calculating distance mathematically from sound wave travel time using pulseIn()',
        'Writing fundamental GPIO control commands (pinMode, digitalRead, digitalWrite, analogWrite PWM)',
        'Building and testing circuits in the free in-browser Wokwi simulator with zero physical hardware needed',
        'Inspecting live signal logs using the Arduino Serial Monitor and Serial Plotter',
      ],
    },
    {
      id: 'iot-proj-0',
      title: 'Smart Environmental Weather & Telemetry Station',
      phase: 'Phase 1 - 2',
      difficulty: 'Beginner',
      description:
        'Build a desktop IoT monitoring station using an ESP32 or Arduino Uno that measures temperature, humidity, and environment metrics (DHT11/BME280). Start by logging readings over Serial Monitor, then graduate to rendering live formatted telemetry on an I2C OLED display with LED threshold alerts.',
      techStack: ['ESP32 / Arduino Uno', 'DHT11 / BME280', 'SSD1306 OLED (I2C)', 'LEDs & Buzzer', 'C/C++', 'Arduino IDE'],
      videoUrl: 'https://www.youtube.com/watch?v=68fE3E_3s8c',
      videoTitle: 'How To Mechatronics — ESP32 Weather Station & OLED',
      learningOutcomes: [
        'Interfacing digital (I2C) and analog sensors with microcontroller GPIO pins and ADC channels',
        'Writing clean embedded C/C++ firmware using non-blocking timing routines (millis instead of delay)',
        'Formatting and rendering live sensor telemetry graphics and alert icons on an I2C OLED screen',
        'Debugging hardware wiring issues using the Arduino IDE Serial Monitor and Serial Plotter',
      ],
    },
    {
      id: 'iot-proj-1',
      title: 'Industrial Predictive Maintenance System',
      phase: 'Phase 4 - 5',
      difficulty: 'Advanced',
      description:
        'Build an IoT system that monitors vibration, temperature, current and machine parameters to detect abnormal operating conditions and generate maintenance alerts.',
      techStack: ['ESP32 / STM32', 'MPU6050 IMU', 'Current Sensors', 'MQTT', 'Python', 'InfluxDB', 'Grafana', 'Docker'],
      videoUrl: 'https://www.youtube.com/watch?v=Zf1u1o3hH6g',
      videoTitle: 'Andreas Spiess — Sensor Monitoring with ESP32 & MQTT',
      learningOutcomes: [
        'Industrial sensor acquisition, telemetry streaming, and time-series analytics',
        'Edge/cloud architecture design and condition-based automated monitoring',
      ],
    },
    {
      id: 'iot-proj-2',
      title: 'Smart Agriculture & Environmental Monitoring Network',
      phase: 'Phase 2 - 3',
      difficulty: 'Intermediate',
      description:
        'Deploy multiple wireless sensor nodes that monitor soil and environmental conditions and automatically control irrigation based on real-time sensor data.',
      techStack: ['ESP32', 'LoRa / LoRaWAN', 'Soil-Moisture Sensors', 'BME280', 'MQTT', 'Node-RED', 'Grafana'],
      videoUrl: 'https://www.youtube.com/watch?v=mE98h7k8k6U',
      videoTitle: 'DroneBot Workshop — LoRa Wireless Networks with ESP32',
      learningOutcomes: [
        'Low-power wireless sensor network deployment and packet optimization',
        'Automated actuator control loops based on distributed environmental data',
      ],
    },
    {
      id: 'iot-proj-3',
      title: 'Autonomous Emergency Response IoT Network',
      phase: 'Phase 3 - 5',
      difficulty: 'Advanced',
      description:
        'Build a distributed network of sensor nodes capable of detecting environmental hazards, transmitting telemetry, and providing situational intelligence to an edge station.',
      techStack: ['ESP32 / STM32', 'LoRa', 'GNSS / GPS', 'IMU', 'LiDAR', 'MQTT', 'Raspberry Pi', 'Python'],
      videoUrl: 'https://www.youtube.com/watch?v=wXWpB8u5P1E',
      videoTitle: 'Andreas Spiess — Long-Range Mesh & Emergency Networks',
      learningOutcomes: [
        'Multi-node telemetry routing, sensor fusion, and local edge processing',
        'Designing reliable, fault-tolerant IoT systems for environments with intermittent connectivity',
      ],
    },
  ],
  prerequisites: {
    overview:
      'Essential building blocks in basic electronics and programming before interfacing with microcontrollers, wireless networks, and RTOS kernels.',
    items: [
      {
        title: 'Basic C / C++ or Embedded Logic',
        description:
          'Understanding variables, loops, conditional branching, functions, arrays, memory addresses, and basic pointer concepts.',
        level: 'Essential',
        skills: ['C/C++ Syntax', 'Functions & Loops', 'Memory & Pointers', 'Data Types'],
      },
      {
        title: 'Basic Electronics & Circuit Theory',
        description:
          'Understanding Ohm’s law (V=IR), voltage, current, resistance, circuit schematics, reading component datasheets, and breadboard prototyping.',
        level: 'Essential',
        skills: ['Ohm’s Law', 'Breadboarding', 'Resistors & LEDs', 'Grounding & Power'],
      },
      {
        title: 'Hardware & Flashing Setup',
        description:
          'An ESP32 or Arduino-compatible dev board, USB data cable, basic jumper wires, and Arduino IDE or VS Code with PlatformIO.',
        level: 'Recommended',
        skills: ['Arduino IDE / PlatformIO', 'Serial COM Ports', 'Jumper Wiring', 'Flashing Firmware'],
      },
    ],
  },
};
