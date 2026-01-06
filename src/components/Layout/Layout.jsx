import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children, activePage, setActivePage }) => {
  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-neon-blue/20 selection:text-neon-blue">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-blue/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neon-purple/5 blur-[120px]" />
      </div>

      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="relative z-10 pl-64 flex flex-col min-h-screen">
        <Header title={activePage} />
        <main className="flex-1 p-6 lg:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
