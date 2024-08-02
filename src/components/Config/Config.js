
const Config = {
  controlTower: {
    title: "Control Tower",
    step: 1,
    image: "/images/control-tower.png",
    description:"Streamlines mining operations by assigining cehicles to designated areas, optimizing dispatch planning and costs, while seamlessly integrating with I3MS and ERPs.",
  },
  transporter: {
    title: "Transporter",
    step: 2,
    image: "/images/transporter_park.png",
    description: "Swiftly responds to dispatch permits, issuinig QR code DO slips and RFID tagging for seamless vehicle deployment to designated mining areas."
  },
  entryGate: {
    title: "Entry Gate",
    step: 3,
    image: "/images/entryGate.png",
    description: "At the entry gate, security verifies trucks and drivers, utilizing RFID-based access control for entry processes."
  },
  tareWeight: {
    title: "Tare Weight",
    step: 4,
    image: "/images/weight-bridge.png",
    description: "ANPR and RFID based man-less weight capture, eliminates man intervention and malpractices. At the man-less weightbridges, empty truck's weight is recorded."
  },
  grossWeight: {
    title: "Gross Weight",
    step: 6      ,
    image: "/images/grossWeight.png",
    description: "ANPR and RFID based man-less weight capture, eliminates man intervention and malpractices. At the man-less weightbridges, Loaded truck's weight is recorded."
  },
  documentation: {
    title: "Documentation",
    step: 7,
    image: "/images/office.png",
    description: "Documentations are generated & printed automatically without any manual intervention, mission complete! The truck exits smoothly, equipped with all necessary documents."
  },
  loadingPoint: {
    title: "Loading Point",
    description: "After entering the mine, trucks load assigned materials from designated stacks.       "
  },
  telematics: {
    title: "Telematics",
    image: "/images/telematics.png",
    description: "Have complete vision and control over your dedicate as well as market fleet. "
  },

  //Main Card
  pulse: {
    image: "/images/mainCard/pulse.png",
    title: "PULSE",
    description: "Enhance the productivity of your mining operations by leveraging our Pulse Module. ",
    module: [
      {
        title: "Masteriing Job Allocation",
        image: "/images/mainCard/pulse/mastering.png"
      },
      {
        title: "Automatic Dumper Detection",
        image: "/images/mainCard/pulse/automatic.png"
      },
      {
        title: "Strategic Material Planning",
        image: "/images/mainCard/pulse/strategic.png"
      },
      {
        title: "Idle Loader Management",
        image: "/images/mainCard/pulse/idle.png"
      }
    ],
    benefits: [
      {
        title: "Improved Visibility",
        image: "/images/mainCard/pulse/improve.png"
      },
      {
        title: "Enhanced Efficiency",
        image: "/images/mainCard/pulse/enhance.png"
      },
      {
        title: "Productivity Optimization",
        image: "/images/mainCard/pulse/productivity.png"
      },
      {
        title: "Cost Reduction",
        image: "/images/mainCard/pulse/cost.png"
      }
    ]
  },
  cortex: {
    image: "/images/mainCard/cortex.png",
    title: "CORTEX",
    description: "Cortex revolutionizes logistics with Road Digitalization: AI-powered, RPA-driven, and quasi-blockchain enabled.",
    module: [
      {
        title: "Digital Transaction Points",
        image: "/images/mainCard/cortex/digital.png"
      },
      {
        title: "Man-Less Weighbridges",
        image: "/images/mainCard/cortex/man-less.png"
      },
      {
        title: "E-Pod & Automatic Documentation",
        image: "/images/mainCard/cortex/E-pod.png"
      },
      {
        title: "Security & Safety Compliance",
        image: "/images/mainCard/cortex/security.png"
      }
    ],
    benefits: [
      {
        title: "Reduced TAT",
        image: "/images/mainCard/cortex/reduce.png"
      },
      {
        title: "Increased Capacity",
        image: "/images/mainCard/cortex/increase.png"
      },
      {
        title: "Enhanced Collaboration",
        image: "/images/mainCard/cortex/enhance.png"
      },
      {
        title: "Cost Reduction",
        image: "/images/mainCard/cortex/cost.png"
      }
    ]
  },
  vision: {
    image: "/images/mainCard/vision.png",
    title: "VISION",
    description: "VISION lets you have complete vision and control over your dedicate as well and market fleet." ,
    module: [
      {
        title: "Advanced Driver Assistance System (ADAS)",
        image: "/images/mainCard/vision/advance.png"
      },
      {
        title: "Driver Monitoring System (DMS)",
        image: "/images/mainCard/vision/driver.png"
      },
      {
        title: "Comprehensive Fuel and Engine Analytics",
        image: "/images/mainCard/vision/comprehense.png"
      },
      {
        title: "Live Asset Tracking",
        image: "/images/mainCard/vision/live.png"
      }
    ],
    benefits: [
      {
        title: "Reduced Theft",
        image: "/images/mainCard/vision/reduce.png"
      },
      {
        title: "Better Control",
        image: "/images/mainCard/vision/better.png"
      },
      {
        title: "Driving Better Compliance",
        image: "/images/mainCard/vision/driving.png"
      },
      {
        title: "Enhanced Safety",
        image: "/images/mainCard/vision/enhance.png"
      }
    ]
  },
  iris: {
    image: "/images/mainCard/iris.png",
    title: "IRIS",
    description: "IRIS offers comprehensive features such as real-time management & tracking of railway rakes. ",
    module: [
      {
        title: "Intelligent Indent Management",
        image: "/images/mainCard/iris/intelligent.png"
      },
      {
        title: "Uberization of Locos to wagon Tipplers",
        image: "/images/mainCard/iris/uberization.png"
      },
      {
        title: "Integration with FOIS, EWB, etc",
        image: "/images/mainCard/iris/integration.png"
      },
      {
        title: "On Rounte Rake Tracking",
        image: "/images/mainCard/iris/route.png"
      }
    ],
    benefits: [
      {
        title: "Reduced Demurrages",
        image: "/images/mainCard/iris/reduce.png"
      },
      {
        title: "Enhanced Collaboration",
        image: "/images/mainCard/iris/enhance.png"
      },
      {
        title: "Actionable Intelligence",
        image: "/images/mainCard/iris/actionable.png"
      },
      {
        title: "Cost Reduction",
        image: "/images/mainCard/iris/cost.png"
      }
    ]
  }
};

export default Config
