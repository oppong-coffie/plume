import {
  Home,
  Activity,
  Network,
  Zap,
  Globe,
  Briefcase,
  Building,
  Users,
  Wifi,
} from "lucide-react";
import ProductDetail from "../components/Shared/ProductDetail";

/**
 * Detail views for specific packages.
 */

export const HomePassView = (props) => (
  <ProductDetail
    {...props}
    title="Plume Home"
    subtitle="The ultimate smart home experience"
    price="$4.99 /sub/mo"
    description="Delight your subscribers with self-optimizing WiFi, advanced parental controls, and cyber-security protection for every device."
    colorTheme="purple"
    metrics={[
      {
        label: "Adapt™",
        value: "AI WiFi",
        desc: "Self-optimizing connectivity",
        icon: Home,
      },
      {
        label: "Control™",
        value: "Unlimited",
        desc: "Detailed parental & guest controls",
        icon: Activity,
      },
      {
        label: "Guard™",
        value: "24/7",
        desc: "Advanced IoT cyber-protection",
        icon: Network,
      },
      {
        label: "Sense™",
        value: "Motion",
        desc: "Whole-home awareness",
        icon: Zap,
      },
    ]}
    features={[
      "App for iOS & Android",
      "Whole-Home WiFi Guarantee",
      "24/7 Customer Support",
      "Hardware Replacement Program",
      "Rolling 30-day History",
    ]}
  />
);

export const WorkPassView = (props) => (
  <ProductDetail
    {...props}
    title="WorkPass"
    subtitle="Enterprise-grade connectivity for SMBs"
    price="$9.99 /loc/mo"
    description="Empower small businesses with enterprise-level security, guest analytics, and employee management tools without the complexity."
    colorTheme="orange"
    metrics={[
      {
        label: "Concierge™",
        value: "Portal",
        desc: "Guest login & branding tools",
        icon: Globe,
      },
      {
        label: "Keycard™",
        value: "Profiles",
        desc: "Staff & device management",
        icon: Briefcase,
      },
      {
        label: "Shield™",
        value: "Secure",
        desc: "Enterprise-grade security",
        icon: Network,
      },
      {
        label: "Flow™",
        value: "Insights",
        desc: "Motion-based business analytics",
        icon: Activity,
      },
    ]}
    features={[
      "Guest Analytics & Captive Portal",
      "Employee Device Management",
      "Cyber-threat Protection",
      "Compatible with SuperPod Hardware",
    ]}
  />
);

export const UpriseView = (props) => (
  <ProductDetail
    {...props}
    title="Uprise for MDUs"
    subtitle="Connectivity & Property Management"
    price="$3.50 /unit/mo"
    description="Instant-on WiFi and smart property management for Multi-Dwelling Units. Seamless roaming and IoT integration out of the box."
    colorTheme="green"
    metrics={[
      {
        label: "Roaming",
        value: "Seamless",
        desc: "Property-wide connectivity",
        icon: Building,
      },
      {
        label: "Onboarding",
        value: "Instant",
        desc: "Zero-touch activation",
        icon: Wifi,
      },
      {
        label: "Smart Hub",
        value: "Integrated",
        desc: "Matter/Zigbee/BLE support",
        icon: Home,
      },
      {
        label: "Management",
        value: "Portal",
        desc: "Full property oversight",
        icon: Users,
      },
    ]}
    features={[
      "Seamless Roaming Everywhere",
      "Pre-installed Hardware",
      "Property Manager Tools",
      "IoT Device Integration (Locks, Thermostats)",
    ]}
  />
);
