import { Settings as SettingsIcon } from "lucide-react";

/**
 * Settings page (Placeholder).
 */
const Settings = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-display font-bold text-red-500 dark:text-white mb-2">
          Settings
        </h2>
        <p className="text-red-500/80 dark:text-gray-400">
          Global application configuration and user preferences.
        </p>
      </div>

      <div className="glass p-8 rounded-2xl text-center">
        <SettingsIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-red-500 dark:text-white">
          General Settings
        </h3>
        <p className="text-red-500/60 dark:text-gray-500">
          Configuration module coming soon.
        </p>
      </div>
    </div>
  );
};

export default Settings;
