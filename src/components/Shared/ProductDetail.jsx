import { ArrowLeft, Check } from "lucide-react";

/**
 * Shared Product Detail template for package-specific views.
 */
const ProductDetail = ({
  title,
  subtitle,
  price,
  description,
  metrics,
  features,
  colorTheme,
  setActivePage,
}) => {
  const themeColor =
    {
      blue: "text-neon-blue border-neon-blue/20 bg-neon-blue/10",
      purple: "text-white border-white/20 bg-white/10",
      orange: "text-red-500 border-red-500/20 bg-red-500/10",
      green: "text-white border-white/20 bg-white/5",
    }[colorTheme] || "text-white";

  const borderColor = {
    blue: "border-neon-blue",
    purple: "border-white",
    orange: "border-red-500",
    green: "border-white/50",
  }[colorTheme];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setActivePage("packages")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-red-500/60 dark:text-gray-400">
            Back to Packages
          </span>
        </button>

        <div>
          <h2 className="text-3xl font-display font-bold text-red-500 dark:text-white mb-2">
            {title}
          </h2>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className={`px-3 py-1 rounded-full border ${themeColor}`}>
              Price: {price}
            </span>
            <span>•</span>
            <span>{subtitle}</span>
          </div>
          <p className="mt-4 text-red-500/80 dark:text-gray-300 max-w-2xl text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Key Metrics / Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className={`glass p-6 rounded-2xl border-l-4 ${borderColor} h-full`}
          >
            <div className="mb-4">
              <metric.icon className={`w-8 h-8 ${themeColor.split(" ")[0]}`} />
            </div>
            <h3 className="text-lg font-bold text-red-500 dark:text-white">
              {metric.label}
            </h3>
            <p
              className={`text-2xl font-bold my-2 ${
                metric.trend === "up"
                  ? "text-neon-blue"
                  : "text-red-500 dark:text-white"
              }`}
            >
              {metric.value}
            </p>
            <p className="text-sm text-red-500/60 dark:text-gray-400 leading-relaxed">
              {metric.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Deep Dive Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3 glass p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-red-500 dark:text-white mb-6">
            Included Features
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feat, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-red-500/80 dark:text-gray-300"
              >
                <div
                  className={`p-1 rounded-full mt-1 bg-primary/5 dark:bg-white/5`}
                >
                  <Check className={`w-3 h-3 ${themeColor.split(" ")[0]}`} />
                </div>
                <span className="text-sm leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
          <button
            className={`w-full md:w-auto px-8 mt-8 py-3 rounded-xl font-bold text-white bg-black dark:text-black dark:bg-white hover:opacity-90 transition-opacity`}
          >
            Manage Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
