import { type ReactNode } from "react";
type SidebarContextType = {
    isOpen: boolean;
    toggleSidebar: () => void;
    openSidebar: () => void;
    closeSidebar: () => void;
};
export declare const SidebarProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useSidebar: () => SidebarContextType;
export {};
