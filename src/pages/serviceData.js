

// data/serviceData.js
export const webData = {
  relatedProjects: [
    { id: 8, title: "Ecommerece Website", image: "/Projects/Website/Ecommerece/projectImg3.webp", link: "/web-projects/ecommerece-website" },
    { id: 9, title: "Rent a Car Website", image: "/HomeImage/projectImg2.webp", link: "/web-projects/rent-a-car-website" },
    { id: 10, title: "Tour Booking Website ", image: "/Projects/Website/Tour Booking/projectImg5.webp", link: "/web-projects/tour-booking-website" },
    { id: 3, title: "YumBite App", image: "/Projects/Mobile Application/YumBites/projectImg4.webp", link: "/app-projects/yumbite-app" },
    { id: 15, title: "AI Career Compass", image: "/Projects/AI agents/AI Career Compass/projectImg6.png", link: "/ai-agents/ai-career-compass" },
    { id: 16, title: "AI-Powered WhatsApp HR Assistant", image: "/Projects/AI agents/AI-Powered WhatsApp HR Assistant/projectImg1.png", link: "/ai-agents/ai-powered-whatsapp-hr-assistant" },

  ],
};

export const appData = {
  relatedProjects: [
    { id: 8, title: "Ecommerece Website", image: "/Projects/Website/Ecommerece/projectImg3.webp" },
    { id: 9, title: "Rent a Car Website", image: "/HomeImage/projectImg2.webp" },
    { id: 10, title: "Tour Booking Website ", image: "/Projects/Website/Tour Booking/projectImg5.webp" },
    { id: 3, title: "YumBite App", image: "/Projects/Mobile Application/YumBites/projectImg4.webp" },
        { id: 3, title: "YumBite App", description: "We built YumBites, a mobile app that blends culinary curiosity with useful tech to make cooking joyful. ", image: "/Projects/Mobile Application/YumBites/projectImg4.webp" },
    { id: 4, title: "SafeBite App", description: "SafeBite is a smart gluten-free companion app designed to help users make confident food choices every day. ", image: "/Projects/Mobile Application/project 1/thumnail.png" },
    { id: 5, title: "Cart n Mart App", description: "Cart n Mart is a smart grocery delivery mobile application designed to simplify everyday shopping. ", image: "/Projects/Mobile Application/project 2/thumnail.png" },
    { id: 6, title: "CampusKart App", description: "CampusKart is a unified campus commerce platform designed to streamline everyday student needs.", image: "/Projects/Mobile Application/project 3/thumnai.png" },
    { id: 7, title: "LifeLine Connect App", description: "LifeLine Connect is a real-time emergency response platform designed to bridge the gap between patients.", image: "/Projects/Mobile Application/project 4/thumnail.png" },
    { id: 17, title: "Culina App", description: "Culina is a thoughtfully crafted mobile experience designed for today’s food enthusiasts. ", image: "/Projects/Mobile Application/project 5/thumnail.png" },
    { id: 18, title: "FlowRider Smart Delivery Companion App", description: "FlowRider is a modern rider-focused delivery management application built to streamline last-mile logistics. ", image: "/Projects/Mobile Application/project 6/thumnail.png" },
    { id: 15, title: "AI Career Compass", image: "/Projects/AI agents/AI Career Compass/projectImg6.png" },
    { id: 16, title: "AI-Powered WhatsApp HR Assistant", image: "/Projects/AI agents/AI-Powered WhatsApp HR Assistant/projectImg1.png" },
  ],
};

export const mlData = {
  relatedProjects: [
    { id: 8, title: "Ecommerece Website", image: "/Projects/Website/Ecommerece/projectImg3.webp", link: "/web-projects/ecommerece-website" },
    { id: 9, title: "Rent a Car Website", image: "/HomeImage/projectImg2.webp", link: "/web-projects/rent-a-car-website" },
    { id: 10, title: "Tour Booking Website ", image: "/Projects/Website/Tour Booking/projectImg5.webp", link: "/web-projects/tour-booking-website" },
    { id: 3, title: "YumBite App", image: "/Projects/Mobile Application/YumBites/projectImg4.webp", link: "/app-projects/yumbite-app" },
    { id: 15, title: "AI Career Compass", image: "/Projects/AI agents/AI Career Compass/projectImg6.png", link: "/ai-agents/ai-career-compass" },
    { id: 16, title: "AI-Powered WhatsApp HR Assistant", image: "/Projects/AI agents/AI-Powered WhatsApp HR Assistant/projectImg1.png", link: "/ai-agents/ai-powered-whatsapp-hr-assistant" },
  ],
};

// data/serviceData.js
export const allProjects = [

  // App Data Put here  
  {
    id: 3,
    category: "App",
    hero: {
      title: "YumBite App",
      subtitle:
        "We built YumBites, a mobile app that blends culinary curiosity with useful tech to make cooking joyful. At onboarding we record dietary restrictions and taste preferences so suggestions suit your life. Search and save recipes, see a daily featured dish, and build weekly meal plans with calendar entries for special occasions. Profile settings, privacy controls, and direct support keep your routine simple and reliable. It helps home cooks and busy people eat better everyday.",
      image:
        "/Projects/Mobile Application/YumBites/projectImg4.webp",
    },
    overview: {

      heading2:
        "We designed YumBites to learn from each user: a brief onboarding captures dietary limits and flavor likes, then our recommendation engine serves personalized recipes. The app keeps a simple bottom navigation for quick access to Home, Favorites, Planner and Profile. We prioritize privacy, smooth account control, and rapid support, and iterate on feedback. Daily features speed choice.",
      projectTitle: ["Recipes", "Mealplanning", "Dietary", "Cooking", "Application"],
      Platform: "Mobile  Application",
      project: "YumBites",
      category: "Food App",
      designBy: "LeadsNite",
      Date: "17th July 2025",
      features: [
        {
          title: "Smart Personalized Feed",
          description: "Our feed learns tastes and suggests daily recipes you'll actually make.",
          icon: "GrOptimize"
        },
        {

          title: "Weekly Meal Planner",
          description: "Plan meals on a visual calendar, add recipes to days and save special menus.",
          icon: "FaRegLightbulb"
        },
        {
          title: "Easy Profile & Privacy",
          description: "Manage account, adjust dietary settings, control privacy and reach support.",
          icon: "CiSettings"
        }
      ],
      featureImage: "/Projects/Mobile Application/YumBites/App Portfolio Thumbnail.webp",
    },
  },
  {
    id: 4,
    category: "App",
    hero: {
      title: "SafeBite App",
      subtitle:
        "SafeBite is a smart gluten-free companion app designed to help users make confident food choices every day. From browsing curated safe recipes to verifying packaged products in real time, the app simplifies healthy living. Users can explore trusted restaurants, bakeries, and markets across Jordan, discover verified brands, and unlock exclusive in-app rewards all within a clean, intuitive, and performance-focused mobile experience.",
      image:
        "/Projects/Mobile Application/project 1/thumnail.png",
    },
    overview: {

      heading2:
        "SafeBite is a comprehensive gluten-free lifestyle platform built to eliminate uncertainty around food safety. The app combines recipe discovery, real-time product verification powered by Open Food Facts, location-based restaurant exploration, and curated safe brands. With secure authentication and an engaging rewards system, it delivers reliability, convenience, and trust in one seamless digital solution.",
      projectTitle: ["GlutenFree", "Verification", "Safety", "Discovery", "Lifestyle", "Rewards"],
      Platform: "Mobile  Application",
      project: "SafeBite",
      category: "Food App",
      designBy: "LeadsNite",
      Date: "17th July 2025",
      features: [
        {
          title: "Real-Time Product Safety Checks",
          description: "Integrated with Open Food Facts to instantly validate ingredients and determine whether products are safe or not.",
          icon: "GrOptimize"
        },
        {

          title: "Verified Safe Locations",
          description: "Explore trusted restaurants, bakeries, and markets with map-based navigation for easy and secure dining choices.",
          icon: "FaRegLightbulb"
        },
        {
          title: "Curated Gluten-Free Cookbook",
          description: "A categorized recipe library featuring safe, easy-to-follow meal options tailored to gluten-sensitive users.",
          icon: "CiSettings"
        },
        {
          title: "In-App Rewards & Promotions",
          description: "Built-in coupon system offering exclusive discounts to enhance user engagement and long-term retention.",
          icon: "GrOptimize"
        }
      ],
      featureImage: "/Projects/Mobile Application/project 1/project showase.png",
    },

  },
  {
    id: 5,
    category: "App",
    hero: {
      title: "Cart n Mart App",
      subtitle:
        "Cart n Mart is a smart grocery delivery mobile application designed to simplify everyday shopping. Users can browse categorized products, explore detailed listings with nutrition insights, add items to favorites, and manage their cart seamlessly. With secure checkout, multiple payment options, delivery scheduling, and real-time order summaries, the app delivers a smooth, reliable, and convenient shopping experience from selection to doorstep.",
      image:
        "/Projects/Mobile Application/project 2/thumnail.png",
    },
    overview: {

      heading2:
        "Cart n Mart is a full-featured grocery e-commerce platform built for speed, clarity, and usability. The app enables users to search products, browse structured categories, view detailed product information, manage favorites, and complete purchases through a streamlined cart and checkout flow. Integrated payment methods, delivery time selection, and order tracking ensure a frictionless end-to-end digital shopping journey.",
      projectTitle: ["Ecommerce", "Grocery", "Delivery", "Marketplace", "Mobile", "Retail"],
      Platform: "Mobile  Application",
      project: "Cart n Mart",
      category: "Food App",
      designBy: "LeadsNite",
      Date: "17th July 2025",
      features: [
        {
          title: "Structured Product Categorization",
          description: "Intuitive category hierarchy with search functionality to help users quickly discover produce, dairy, pantry items, and more.",
          icon: "GrOptimize"
        },
        {

          title: "Detailed Product Insights",
          description: "Comprehensive product pages including pricing, discounts, descriptions, and nutrition information for informed purchasing decisions.",
          icon: "FaRegLightbulb"
        },
        {
          title: "Seamless Cart & Checkout Flow",
          description: "Dynamic cart management with quantity controls, saved carts, delivery scheduling, and transparent billing breakdown.",
          icon: "CiSettings"
        },
        {
          title: "Secure & Flexible Payments",
          description: "Multiple payment methods including cash, card, and digital wallet options to ensure convenience and transaction reliability.",
          icon: "GrOptimize"
        }
      ],
      featureImage: "/Projects/Mobile Application/project 2/project showcase.png",
    },

  },
  {
    id: 6,
    category: "App",
    hero: {
      title: "CampusKart App",
      subtitle:
        "CampusKart is a unified campus commerce platform designed to streamline everyday student needs. The app connects store, canteen, and cafeteria services into one intuitive mobile experience. Students can browse items, place orders, track purchases, and manage profiles seamlessly. With real-time order updates, categorized listings, and a simplified checkout flow, CampusKart enhances on-campus convenience through a fast, structured, and reliable digital system.",
      image:
        "/Projects/Mobile Application/project 3/thumnai.png",
    },
    overview: {

      heading2:
        "CampusKart is a multi-service campus marketplace that digitizes institutional retail and food ordering. The platform integrates store inventory, cafeteria menus, order management, and student accounts within a single ecosystem. With categorized navigation, order history tracking, manager dashboards, and streamlined purchase confirmations, it delivers operational efficiency for administrators and a frictionless experience for students.",
      projectTitle: ["Campus", "Marketplace", "Ordering", "Institutional", "Commerce", "Management"],
      Platform: "Mobile  Application",
      project: "CampusKart",
      category: "Campus App",
      designBy: "LeadsNite",
      Date: "17th July 2025",
      features: [
        {
          title: "Multi-Service Integration",
          description: "Unified access to Store, Canteen, and Cafeteria within one structured application flow.",
          icon: "GrOptimize"
        },
        {

          title: "Smart Order Management",
          description: "Real-time order tracking with status updates such as Processing and Picked Up for complete transparency.",
          icon: "FaRegLightbulb"
        },
        {
          title: "Categorized Product & Menu Listings",
          description: "Well-organized sections for uniforms, stationery, meals, snacks, and daily essentials.",
          icon: "CiSettings"
        },
        {
          title: "Administrative Control Panel",
          description: "Dedicated manager interface enabling service oversight and operational control.",
          icon: "GrOptimize"
        }
      ],
      featureImage: "/Projects/Mobile Application/project 3/project showcase.png",
    },

  },
  {
    id: 7,
    category: "App",
    hero: {
      title: "LifeLine Connect App",
      subtitle:
        "LifeLine Connect is a real-time emergency response platform designed to bridge the gap between patients, nearby hospitals, and trained volunteers during critical situations. Users can instantly report emergencies, access first aid guidance, locate nearby healthcare facilities, and store vital medical details. The system enables rapid case notifications, volunteer coordination, and faster medical intervention when every second matters most.",
      image:
        "/Projects/Mobile Application/project 4/thumnail.png",
    },
    overview: {

      heading2:
        "LifeLine Connect is a comprehensive digital emergency coordination solution built to simplify and accelerate medical assistance. The app allows users to report emergencies with one tap, discover nearby hospitals, access daily health resources, and securely manage personal medical information such as blood group and emergency contacts. A dedicated volunteer dashboard ensures real-time case visibility and faster response, strengthening community-driven lifesaving support.",
      projectTitle: ["Emergency", "Healthcare", "Response", "Safety", "Coordination"],
      Platform: "Mobile  Application",
      project: "LifeLine Connect",
      category: "Emergency App",
      designBy: "LeadsNite",
      Date: "17th July 2025",
      features: [
        {
          title: "Instant Emergency Trigger",
          description: "A bold, high-visibility emergency button with categorized reporting ensures accurate, fast-response handling during critical situations.",
          icon: "GrOptimize"
        },
        {

          title: "Intelligent Hospital Locator",
          description: "Location-based discovery with ratings, specialties, 24/7 status, call, and navigation support for immediate access to nearby healthcare facilities.",
          icon: "FaRegLightbulb"
        },
        {
          title: "Volunteer Response System",
          description: "Real-time case dashboard for volunteers with proximity insights, availability toggle, and structured case acceptance workflow.",
          icon: "CiSettings"
        },
        {
          title: "Secure Medical Profile Storage",
          description: "Protected user medical data including blood group, age, and emergency contacts — accessible when it matters most.",
          icon: "GrOptimize"
        }
      ],
      featureImage: "/Projects/Mobile Application/project 4/project showcase.png",
    },

  },
  {
    id: 17,
    category: "App",
    hero: {
      title: "Culina App",
      subtitle:
        "Culina is a thoughtfully crafted mobile experience designed for today’s food enthusiasts. Blending elegant design with functional depth, the platform transforms recipe discovery into an immersive and intuitive journey. From curated dishes to detailed nutrition insights, every interaction is structured with clarity, balance, and visual refinement creating a seamless culinary ecosystem built for inspiration and everyday cooking.",
      image:
        "/Projects/Mobile Application/project 5/thumnail.png",
    },
    overview: {

      heading2:
        "Culina enables users to explore diverse recipes, follow professional chefs, save favorites, share reviews, and access detailed ingredient and nutrition breakdowns — all within a clean, structured interface. The app emphasizes intuitive navigation, refined layouts, and engaging visual presentation to elevate the digital cooking experience while maintaining simplicity and usability.",
      projectTitle: ["Culinary", "Recipes", "FoodTech", "Cooking", "MobileApp", "UIUX","Nutrition","Discovery","Community","Lifestyle"],
      Platform: "Mobile  Application",
      project: "Culina App",
      category: "FoodTech App",
      designBy: "LeadsNite",
      Date: "17th July 2025",
      features: [
        {
          title: "Refined Recipe Discovery System",
          description: "Smart search, curated categories, and structured browsing enhance exploration and reduce friction.",
          icon: "GrOptimize"
        },
        {

          title: "Comprehensive Cooking Details",
          description: "Clear ingredient lists, preparation procedures, ratings, and chef insights create a guided and confident cooking flow.",
          icon: "FaRegLightbulb"
        },
        {
          title: "Personalized Culinary Profiles",
          description: "Users can follow chefs, manage saved collections, post reviews, and build a tailored recipe library.",
          icon: "CiSettings"
        },
        {
          title: "Integrated Nutrition Transparency",
          description: "Well-organized nutritional data provides clarity and health awareness without overwhelming the interface.",
          icon: "GrOptimize"
        }
      ],
      featureImage: "/Projects/Mobile Application/project 5/project showcase.png",
    },

  },
  {
    id: 18,
    category: "App",
    hero: {
      title: "FlowRider Smart Delivery Companion App",
      subtitle:
        "FlowRider is a modern rider-focused delivery management application built to streamline last-mile logistics. Designed with clarity and operational efficiency in mind, the platform enables real-time order tracking, route navigation, delivery status management, and rider profile control. With structured workflows and map-based tracking, it enhances coordination between stores, riders, and customers for faster and more reliable deliveries.",
      image:
        "/Projects/Mobile Application/project 6/thumnail.png",
    },
    overview: {

      heading2:
        "FlowRider empowers delivery personnel with an intuitive dashboard to manage assigned orders, monitor delivery progress, navigate optimized routes, update vehicle details, and maintain profile information. The app integrates real-time mapping, structured order timelines, and clear status transitions to ensure smooth logistics execution and improved operational transparency.",
      projectTitle: ["Logistics", "Delivery", "RiderApp", "Tracking", "LastMile", "Fleet","Navigation","Orders","ECommerce","Operations"],
      Platform: "Mobile  Application",
      project: "FlowRider App",
      category: "Logistics App",
      designBy: "LeadsNite",
      Date: "17th July 2025",
      features: [
        {
          title: "Real-Time Route Tracking",
          description: "Integrated map system displaying live pickup and delivery routes with distance markers and status updates.",
          icon: "GrOptimize"
        },
        {

          title: "Structured Order Management",
          description: "Clear delivery timeline (Placed → Shipped → Out for Delivery → Delivered) with actionable controls.",
          icon: "FaRegLightbulb"
        },
        {
          title: "Rider Profile & Vehicle Control",
          description: "Editable personal details, vehicle type selection, and secure account management.",
          icon: "CiSettings"
        },
        {
          title: "Pickup & Drop Coordination",
          description: "Detailed pickup and customer address information with call shortcuts and navigation integration.",
          icon: "GrOptimize"
        }
      ],
      featureImage: "/Projects/Mobile Application/project 6/project showcase.png",
    },

  },


  // Web Data Put here  
  {
    id: 8,
    category: "Web",
    hero: {
      title: "Ecommerece Website",
      subtitle:
        "ElectroMart is a full-featured e-commerce site crafted to make buying electronics simple and satisfying. Users can browse clear categories like laptops, cameras, home appliances, audio gear, and accessories and they can view product details, compare options, and checkout securely with multiple payment choices. Thoughtful navigation, prominent deals, wishlist and cart features, fast responsive pages and helpful customer support deliver a confident, pleasant shopping experience on any device.",
      image:
        "/Projects/Website/Ecommerece/projectImg3.webp",
    },
    overview: {

      heading2: "Our goal was to build an e-commerce platform that balances functionality with a clean, modern design. We focused on creating a user-centered experience that simplifies browsing, ordering, and tracking. Each section was carefully structured to highlight featured products, while backend optimizations ensure fast load times, secure payments, and smooth cart management across devices.",
      projectTitle: ["E-commerce", "Electronics", "Responsive", "	Shopping", "WebDevelopment"],
      Platform: "Web-based Application",
      project: "VerdaBuy",
      category: "E-commerce",
      designBy: "LeadsNite",
      Date: "9th Sep 2025",
    },
    gallery: [
      "/Projects/Website/Ecommerece/1.webp",
      "/Projects/Website/Ecommerece/2.webp",
      "/Projects/Website/Ecommerece/3.webp",
    ],
  },
  {
    id: 9,
    category: "Web",
    hero: {
      title: "Rent a Car Website",
      subtitle:
        "CarMaxel is a vibrant online platform crafted for car buyers, simplifying vehicle shopping with ease. Users explore categories like sedans, SUVs, coupes, convertibles, and pickups, viewing detailed specs, comparing models, and purchasing securely with varied payment methods. Clear navigation, attractive deals, wishlist and cart tools, fast responsive pages, and dedicated support ensure a smooth, confident shopping journey on any device, making car buying straightforward and pleasant.",
      image:
        "/HomeImage/projectImg2.webp",
    },
    overview: {
      heading2: "We aimed to build an automotive e-commerce site blending strong features with a sleek, modern look. Our focus was a user-centric design, easing vehicle searches, orders, and tracking. Every section highlights top vehicles and deals, with backend work ensuring quick load times, safe payments, and seamless cart use across devices, delivering a reliable and engaging experience for all users.",
      projectTitle: ["Ecommerce", "Automotive", "Responsive", "Shopping", "Web"],
      Platform: "Web-based Application",
      project: "RentNexim",
      category: " E-commerce",
      designBy: "LeadsNite",
      Date: "22nd Oct 2025",
    },
    gallery: [
      "/Projects/Website/Rent a car/1.webp",
      "/Projects/Website/Rent a car/2.webp",
      "/Projects/Website/Rent a car/3.webp",
    ],
  },
  {
    id: 10,
    category: "Web",
    hero: {
      title: "Tour Booking Website",
      subtitle:
        "Travolo is a dynamic travel platform crafted to make trip planning effortless and exciting. Users explore global destinations, curated tours, and travel essentials, viewing detailed itineraries, comparing packages, and booking securely with varied payment methods. Clear navigation, special offers, wishlist and booking tools, fast responsive pages, and reliable support create a smooth, inspiring experience across devices, ensuring every traveler plans with confidence and ease.",
      image:
        "/Projects/Website/Tour Booking/projectImg5.webp",
    },
    overview: {

      heading2: "We aimed to build a travel site blending strong features with a vibrant, approachable design. Our focus was an intuitive setup that simplifies destination searches, tour bookings, and itinerary tracking. Each section highlights top destinations and offers, with backend work ensuring fast load times, secure payments, and seamless booking management across devices, delivering a dependable and engaging experience for users.",
      projectTitle: ["	Travel", "Tourism", "Responsive", "Booking", "Web"],
      Platform: "Web-based Application",
      project: "Travolo",
      category: "E-commerce",
      designBy: "LeadsNite",
      Date: "22nd Oct 2025",
    },
    gallery: [
      "/Projects/Website/Tour Booking/1.webp",
      "/Projects/Website/Tour Booking/2.webp",
      "/Projects/Website/Tour Booking/3.webp",
    ],
  },
  // Add after id: 14
  // ML Data Put here  
  {
    id: 15,
    category: "ML",
    hero: {
      title: "AI Career Compass",
      subtitle:
        "This workflow automates job hunting by scraping LinkedIn daily with AI-generated alternate titles and multi-keyword searches, filters duplicates, and uses Mistral LLMs to score resume-to-job fit with evidence. It generates cover letters and practical resume edits (ADD/QUANTIFY), logs all outputs to Google Sheets for centralized tracking, prioritizes top matches, and sends a single daily digest listing the five best roles with clear next steps. for efficient action.",
      image:
        "/Projects/AI agents/AI Career Compass/projectImg6.png",
    },
    overview: {
      heading2: "We built an n8n workflow that scrapes LinkedIn, uses AI-generated alternate titles, and removes repeats via dataset comparison. Mistral LLMs score resume-to-job fit with evidence, generate tailored cover letters, and suggest precise resume edits. All outputs sync to Google Sheets and one daily digest highlights the highest-scoring matches for quick review. Tracks an audit trail.",
      projectTitle: ["Automation", "AI", "Jobs", "Resume", "Workflow"],
      Platform: "n8n",
      project: " AI Career Compass",
      category: "AI Agent",
      designBy: "LeadsNite",
      Date: "23rd Sep 2025",
    },

    challengesData: [
      {
        challenge: {
          title: "Ensuring Accurate Job Relevance",
          description: "Jobs often contain vague or inconsistent descriptions."
        },
        solution: [
          "Used AI-driven semantic matching for precision.",
          "Applied custom job title filters using Mistral logic.",
          "Verified top matches manually through score review."
        ]
      },
      {
        challenge: {
          title: "Avoiding Duplicate Job Listings",
          description: "Multiple job sources can repeat the same postings."
        },
        solution: [
          "Implemented dataset comparison using n8n nodes.",
          "Filtered results against existing Google Sheets data.",
          "Logged each job with unique URL-based identifier."
        ]
      },
      {
        challenge: {
          title: "Maintaining Resume Personalization",
          description: "Generic resumes reduce impact on job applications."
        },
        solution: [
          "Automated AI cover letter and resume customization.",
          "Inserted [ADD] and [QUANTIFY] hints for each section.",
          "Personalized tone to match job and company context."
        ]
      },
      {
        challenge: {
          title: "Streamlining Daily Job Tracking",
          description: "Manual tracking often becomes slow and disorganized."
        },
        solution: [
          "Centralized all job data into structured Google Sheets.",
          "Designed automated timestamp-based job entries.",
          "Enabled quick sort and filter for match score review."
        ]
      },
      {
        challenge: {
          title: "Delivering Digestible Daily Insights",
          description: "Users can get overwhelmed by multiple notifications."
        },
        solution: [
          "Compiled a single HTML digest summarizing top roles.",
          "Highlighted match scores with direct job links.",
          "Limited daily output to top five personalized matches."
        ],
        isWide: true
      },

    ],
  },
  {
    id: 16,
    category: "ML",
    hero: {
      title: "AI-Powered WhatsApp HR Assistant",
      subtitle:
        "This workflow transforms WhatsApp into an intelligent HR assistant powered by LLM and automation. It captures incoming messages, classifies them by intent, and routes them to specialized agents for leave, attendance, FAQs, complaints, and hiring tasks. Integrated with Google Sheets, Calendar, and policy embeddings, it automates routine HR actions and delivers clear, interactive responses directly on WhatsApp for faster, reliable employee support.",
      image:
        "/Projects/AI agents/AI-Powered WhatsApp HR Assistant/projectImg1.png",
    },
    overview: {
      heading2: "We designed a modular n8n workflow that blends OpenAI LLMs with smart routing and automation. Each WhatsApp message is analyzed, categorized, and sent to the right AI agent for instant handling. Integrated APIs ensure access to Sheets, Calendar, and vector search tools. The result is a seamless, always-on HR system that manages employee interactions and automates repetitive HR operations efficiently.",
      projectTitle: ["Automation", "WhatsApp", "HR", "Ai", "WorkFLow"],
      Platform: "n8n",
      project: " Whatsapp HR Assistant",
      category: "AI Agent",
      designBy: "LeadsNite",
      Date: "3rd Sep 2025",
    },

    challengesData: [
      {
        challenge: {
          title: "Handling High Message Volume",
          description: "Managing multiple WhatsApp queries efficiently."
        },
        solution: [
          "Added LLM-driven message classification logic.",
          "Implemented Switch Node to direct each request.",
          "Automated replies for faster employee response."
        ]
      },
      {
        challenge: {
          title: "Inconsistent Query Categorization",
          description: "HR queries vary in tone and structure."
        },
        solution: [
          "Trained LLM with custom HR prompt templates.",
          "Used intent-based message scoring logic.",
          "Improved model through feedback iterations."
        ]
      },
      {
        challenge: {
          title: "Delayed HR Responses",
          description: "Manual handling caused time and communication gaps."
        },
        solution: [
          "Enabled auto-routing to dedicated AI agents.",
          "Integrated live data from Google Sheets.",
          "Configured alerts for time-sensitive issues."
        ]
      },
      {
        challenge: {
          title: "Policy and Data Access Issues",
          description: "Employees lacked quick access to policy details."
        },
        solution: [
          "Embedded company policies using vector search.",
          "Linked policy data to OpenAI for retrieval.",
          "Automated policy-based answers in chat."
        ]
      },
      {
        challenge: {
          title: "Scalability Across Departments",
          description: "Hard to extend system to new HR functions."
        },
        solution: [
          "Designed modular nodes for easy agent addition.",
          "Enabled category expansion with Switch Node.",
          "Used cloning pattern to add new bot workflows."
        ],
        isWide: true
      }
    ],
  },
];

