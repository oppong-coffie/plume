import { Megaphone, PieChart, Target } from "lucide-react";

const Engage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display font-bold text-white mb-2">
          Engage
        </h2>
        <p className="text-gray-400">
          Marketing campaigns and subscriber segmentation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass p-8 rounded-2xl border-l-4 border-neon-purple">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Upsell Opportunity
              </h3>
              <p className="text-gray-400">
                High bandwidth users on legacy plans
              </p>
            </div>
            <div className="p-3 rounded-xl bg-neon-purple/10 text-neon-purple">
              <Target className="w-6 h-6" />
            </div>
          </div>
          <div className="flex items-end gap-3 mb-6">
            <span className="text-4xl font-bold text-white">1,204</span>
            <span className="text-sm text-green-400 mb-2">
              +12% vs last month
            </span>
          </div>
          <button className="w-full py-3 rounded-xl bg-neon-purple text-white font-medium hover:bg-neon-purple/90 transition-all shadow-lg shadow-neon-purple/20">
            Launch Campaign
          </button>
        </div>

        <div className="glass p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-6">
            Campaign Performance
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-400 mb-1">
                <span>Gigabit Upgrade Promo</span>
                <span>45% Conv.</span>
              </div>
              <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple w-[45%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-400 mb-1">
                <span>WorkPass Bundle</span>
                <span>22% Conv.</span>
              </div>
              <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple w-[22%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engage;
