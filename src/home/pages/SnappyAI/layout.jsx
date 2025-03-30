import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col items-center justify-center relative bg-white dark:bg-[#2e2e2c] w-full h-screen overflow-auto ">
        <SidebarTrigger 
          className="absolute left-1 top-2 md:top-3 z-50 text-gray-800 hover:bg-gray-200 
            dark:text-white dark:hover:bg-[#1a1918] dark:hover:text-white" 
        />
        {children}
      </main>
    </SidebarProvider>
  );
}