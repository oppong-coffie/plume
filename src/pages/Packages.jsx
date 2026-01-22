import {
  LayoutDashboard,
  Home,
  Briefcase,
  Building,
  ArrowRight,
} from "lucide-react";

/**
 * Packages page displaying available product suites.
 */
const products = [
  {
    id: "panorama",
    name: "Haystack",
    subtitle: "Support Suite",
    price: "$1.99",
    unit: "per sub/mo",
    description:
      "Data-driven intelligence to optimize network operations and reduce support costs.",
    features: [
      "Predictive Truck Rolls",
      "Churn Risk Analysis",
      "Real-time Network Health",
      "Proactive Alerts",
    ],
    icon: LayoutDashboard,
    color: "blue",
    bg: "from-red-600",
  },
  {
    id: "homepass",
    name: "Plume Home",
    subtitle: "Residential",
    price: "$4.99",
    unit: "per sub/mo",
    description:
      "The ultimate smart home experience with adaptive WiFi and total control.",
    features: [
      "Adapt™: Self-Optimizing WiFi",
      "Control™: Parental Controls",
      "Guard™: Advanced Security",
      "Sense™: Motion Detection",
    ],
    icon: Home,
    color: "purple",
    bg: "from-white",
  },
  {
    id: "workpass",
    name: "WorkPass",
    subtitle: "Small Business",
    price: "$9.99",
    unit: "per location/mo",
    description:
      "Enterprise-grade connectivity and analytics built for small businesses.",
    features: [
      "Concierge™: Guest Analytics",
      "Keycard™: Staff Management",
      "Shield™: Cyber-protection",
      "Flow™: Motion Insights",
    ],
    icon: Briefcase,
    color: "orange",
    bg: "from-red-900",
  },
  {
    id: "uprise",
    name: "Uprise",
    subtitle: "Multi-Family",
    price: "$3.50",
    unit: "per unit/mo",
    description: "Instant-on connectivity for MDUs and property-wide roaming.",
    features: [
      "Seamless Roaming",
      "Instant WiFi Activation",
      "Property Manager Portal",
      "IoT Integration",
    ],
    icon: Building,
    color: "green",
    bg: "from-gray-100",
  },
];

const Packages = ({ setActivePage }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-display font-bold text-red-500 dark:text-white mb-2">
          Product Suite
        </h2>
        <p className="text-red-500/80 dark:text-gray-400">
          Manage your product offerings and pricing tiers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => setActivePage(product.id)}
            className="text-left group glass p-6 rounded-2xl relative overflow-hidden transition-all duration-300 hover:bg-surface-hover/50 dark:hover:bg-white/10 hover-lift border border-border flex flex-col h-full"
          >
            {/* Background Gradient */}
            <div
              className={`absolute top-0 right-0 p-32 opacity-5 bg-linear-to-bl ${product.bg} to-transparent rounded-bl-full transition-opacity group-hover:opacity-10`}
            />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`p-3 rounded-xl bg-primary/5 dark:bg-white/5 w-fit ${
                    product.color === "blue"
                      ? "text-neon-blue"
                      : product.color === "purple"
                        ? "text-purple-400"
                        : product.color === "orange"
                          ? "text-orange-400"
                          : "text-neon-green"
                  }`}
                >
                  <product.icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-red-500 dark:text-white">
                    {product.price}
                  </div>
                  <div className="text-xs text-gray-500">{product.unit}</div>
                </div>
              </div>

              {/* Content */}
              <div className="mb-6 grow">
                <h3 className="text-lg font-display font-bold text-red-500 dark:text-white leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs text-neon-blue font-medium mb-2 uppercase tracking-wider">
                  {product.subtitle}
                </p>
                <p className="text-sm text-red-500/60 dark:text-gray-400 leading-relaxed mb-4">
                  {product.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-4 border-t border-border dark:border-white/5 flex items-center justify-between group-hover:border-primary/20 dark:group-hover:border-white/10 transition-colors">
                <span className="text-xs font-medium text-red-500/80 dark:text-white/50 group-hover:text-red-500 dark:group-hover:text-white transition-colors">
                  Manage Product
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 dark:text-white/50 group-hover:text-primary dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Packages;
