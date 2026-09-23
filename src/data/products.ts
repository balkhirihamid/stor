export const info = {
  name: "TENDER",
  description: "A curated selection of high-quality products across various categories.", 
};

export const products = [
  {
    id: 1,
    name: "4MP Outdoor IP Security Camera",
    slug: "4mp-outdoor-ip-security-camera",
    category: "Camera",
    price: 89.99,
    oldPrice: 109.99,
    currency: "USD",

    rating: 4.8,
    reviews: 142,

    stock: 24,
    sku: "CAM-001",

    description:
      "A professional 4MP outdoor IP security camera designed for reliable day and night surveillance. It features high-resolution video, infrared night vision and weather-resistant construction for residential and commercial installations.",

    shortDescription:
      "4MP outdoor IP camera with infrared night vision and weather-resistant design.",

    features: [
      "4MP high-resolution video",
      "Infrared night vision",
      "Outdoor weather-resistant housing",
      "Wide viewing angle",
      "Motion detection",
      "Network connectivity",
    ],

    colors: [
      {
        name: "White",
        value: "#ffffff",
      },
      {
        name: "Black",
        value: "#111827",
      },
    ],

    sizes: ["Standard"],

    images: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200",
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=1200",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200",
    ],

    tags: ["camera", "ip-camera", "security", "surveillance", "outdoor"],
  },

  {
    id: 2,
    name: "8MP 4K PTZ Security Camera",
    slug: "8mp-4k-ptz-security-camera",
    category: "Camera",
    price: 249.99,
    oldPrice: 299.99,
    currency: "USD",

    rating: 4.9,
    reviews: 87,

    stock: 12,
    sku: "CAM-002",

    description:
      "A high-performance 8MP 4K PTZ security camera designed for advanced surveillance applications. The motorized pan, tilt and zoom system provides flexible monitoring of large areas while maintaining detailed image quality.",

    shortDescription:
      "8MP 4K PTZ camera with motorized pan, tilt and zoom for large-area surveillance.",

    features: [
      "8MP 4K ultra HD video",
      "Motorized pan and tilt",
      "Optical zoom",
      "Infrared night vision",
      "Motion tracking",
      "Remote network access",
    ],

    colors: [
      {
        name: "White",
        value: "#ffffff",
      },
      {
        name: "Black",
        value: "#111827",
      },
    ],

    sizes: ["Standard"],

    images: [
      "https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=1200",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200",
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200",
    ],

    tags: ["camera", "ptz", "4k", "security", "surveillance"],
  },

  // =========================
  // DVR
  // =========================

  {
    id: 3,
    name: "8 Channel Full HD DVR",
    slug: "8-channel-full-hd-dvr",
    category: "DVR",
    price: 119.99,
    oldPrice: 139.99,
    currency: "USD",

    rating: 4.7,
    reviews: 96,

    stock: 18,
    sku: "DVR-001",

    description:
      "An 8-channel digital video recorder designed for professional CCTV surveillance systems. It supports multiple camera inputs, local recording, playback and remote monitoring through a network connection.",

    shortDescription:
      "8-channel DVR for reliable CCTV recording, playback and remote monitoring.",

    features: [
      "8 camera channels",
      "Full HD recording",
      "H.265 video compression",
      "Motion detection recording",
      "Remote mobile monitoring",
      "USB backup support",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
    ],

    sizes: ["8 Channel"],

    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1200",
    ],

    tags: ["dvr", "cctv", "recorder", "security", "surveillance"],
  },

  {
    id: 4,
    name: "16 Channel 5MP Hybrid DVR",
    slug: "16-channel-5mp-hybrid-dvr",
    category: "DVR",
    price: 219.99,
    oldPrice: 259.99,
    currency: "USD",

    rating: 4.8,
    reviews: 71,

    stock: 10,
    sku: "DVR-002",

    description:
      "A 16-channel hybrid DVR designed for medium and large CCTV installations. It supports high-resolution recording, multiple camera technologies and remote access for convenient surveillance management.",

    shortDescription:
      "16-channel hybrid DVR supporting high-resolution CCTV recording and remote access.",

    features: [
      "16 camera channels",
      "Up to 5MP recording",
      "Hybrid camera support",
      "H.265 compression",
      "Smart motion detection",
      "Remote smartphone access",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
    ],

    sizes: ["16 Channel"],

    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1200",
    ],

    tags: ["dvr", "hybrid-dvr", "cctv", "recorder", "security"],
  },

  // =========================
  // NETWORK SWITCHES
  // =========================

  {
    id: 5,
    name: "8 Port Gigabit PoE Switch",
    slug: "8-port-gigabit-poe-switch",
    category: "Switch",
    price: 79.99,
    oldPrice: 99.99,
    currency: "USD",

    rating: 4.8,
    reviews: 118,

    stock: 32,
    sku: "SWT-001",

    description:
      "An 8-port Gigabit PoE network switch designed for IP cameras, access points and other network devices. It combines data connectivity and power delivery in a compact and reliable solution.",

    shortDescription:
      "8-port Gigabit PoE switch for IP cameras and network devices.",

    features: [
      "8 Gigabit Ethernet ports",
      "PoE power delivery",
      "Plug and play installation",
      "High-speed data transfer",
      "LED status indicators",
      "Compact metal housing",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
    ],

    sizes: ["8 Port"],

    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    ],

    tags: ["switch", "poe", "gigabit", "network", "ethernet"],
  },

  {
    id: 6,
    name: "24 Port Gigabit Managed PoE Switch",
    slug: "24-port-gigabit-managed-poe-switch",
    category: "Switch",
    price: 349.99,
    oldPrice: 399.99,
    currency: "USD",

    rating: 4.9,
    reviews: 63,

    stock: 8,
    sku: "SWT-002",

    description:
      "A professional 24-port managed Gigabit PoE switch designed for enterprise networks and large IP surveillance systems. It provides centralized network management, reliable PoE power delivery and high-speed connectivity.",

    shortDescription:
      "24-port managed Gigabit PoE switch for enterprise networks and IP surveillance.",

    features: [
      "24 Gigabit Ethernet ports",
      "Managed network configuration",
      "PoE power delivery",
      "VLAN support",
      "High-speed uplink ports",
      "Rack-mountable metal chassis",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
    ],

    sizes: ["24 Port"],

    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    ],

    tags: ["switch", "managed-switch", "poe", "gigabit", "network"],
  },

  // =========================
  // NVR
  // =========================

  {
    id: 7,
    name: "8 Channel 4K Network Video Recorder",
    slug: "8-channel-4k-network-video-recorder",
    category: "NVR",
    price: 179.99,
    oldPrice: 209.99,
    currency: "USD",

    rating: 4.8,
    reviews: 104,

    stock: 15,
    sku: "NVR-001",

    description:
      "An 8-channel 4K network video recorder designed for IP surveillance systems. It provides centralized recording, playback and management of network cameras with support for high-resolution video.",

    shortDescription:
      "8-channel 4K NVR for IP camera recording and centralized surveillance management.",

    features: [
      "8 IP camera channels",
      "4K video recording",
      "H.265 video compression",
      "Remote viewing",
      "Motion detection",
      "Hard drive recording support",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
    ],

    sizes: ["8 Channel"],

    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1200",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    ],

    tags: ["nvr", "ip-camera", "4k", "recorder", "surveillance"],
  },

  {
    id: 8,
    name: "32 Channel 4K Enterprise NVR",
    slug: "32-channel-4k-enterprise-nvr",
    category: "NVR",
    price: 499.99,
    oldPrice: 579.99,
    currency: "USD",

    rating: 4.9,
    reviews: 48,

    stock: 6,
    sku: "NVR-002",

    description:
      "A powerful 32-channel enterprise network video recorder designed for large-scale IP surveillance installations. It provides high-capacity recording, advanced camera management and reliable remote monitoring.",

    shortDescription:
      "32-channel enterprise NVR for large-scale 4K IP surveillance systems.",

    features: [
      "32 IP camera channels",
      "4K ultra HD recording",
      "H.265+ compression",
      "Multiple hard drive support",
      "Advanced camera management",
      "Remote monitoring and playback",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
    ],

    sizes: ["32 Channel"],

    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1200",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200",
    ],

    tags: ["nvr", "enterprise", "4k", "ip-surveillance", "recorder"],
  },

  // =========================
  // NAS SERVER
  // =========================

  {
    id: 9,
    name: "2 Bay Network Attached Storage Server",
    slug: "2-bay-network-attached-storage-server",
    category: "NAS Server",
    price: 289.99,
    oldPrice: 329.99,
    currency: "USD",

    rating: 4.7,
    reviews: 92,

    stock: 11,
    sku: "NAS-001",

    description:
      "A compact 2-bay NAS server designed for centralized file storage, backups and private cloud applications. It provides reliable network storage for homes, small businesses and professional users.",

    shortDescription:
      "Compact 2-bay NAS server for centralized storage, backup and private cloud.",

    features: [
      "2 drive bays",
      "Network file sharing",
      "Automatic backup support",
      "Private cloud functionality",
      "RAID storage support",
      "Gigabit Ethernet connectivity",
    ],

    colors: [
      {
        name: "White",
        value: "#ffffff",
      },
      {
        name: "Black",
        value: "#111827",
      },
    ],

    sizes: ["2 Bay"],

    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1200",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    ],

    tags: ["nas", "nas-server", "storage", "backup", "network-storage"],
  },

  {
    id: 10,
    name: "4 Bay Business NAS Server",
    slug: "4-bay-business-nas-server",
    category: "NAS Server",
    price: 649.99,
    oldPrice: 749.99,
    currency: "USD",

    rating: 4.9,
    reviews: 57,

    stock: 7,
    sku: "NAS-002",

    description:
      "A high-performance 4-bay NAS server designed for businesses that require centralized storage, data protection and reliable backup solutions. It provides multiple drive configurations and fast network connectivity.",

    shortDescription:
      "High-performance 4-bay NAS server for business storage, backup and data protection.",

    features: [
      "4 drive bays",
      "RAID storage configurations",
      "High-speed network connectivity",
      "Centralized file management",
      "Automatic backup support",
      "Private cloud applications",
    ],

    colors: [
      {
        name: "Black",
        value: "#111827",
      },
      {
        name: "Silver",
        value: "#d1d5db",
      },
    ],

    sizes: ["4 Bay"],

    images: [
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1200",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    ],

    tags: ["nas", "nas-server", "business", "storage", "backup", "raid"],
  },
];
