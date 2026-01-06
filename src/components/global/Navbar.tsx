import type React from "react";
import szelogo from '@/assets/sze_logo.png'
import { useSidebar } from "../../providers/SideBarProvider";

const Navbar: React.FC = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <main className="bg-primary h-16 flex items-center px-3">
            <img onClick={toggleSidebar} src={szelogo} alt="" className="cursor-pointer h-8 w-10" />
        </main>
    )
}

export default Navbar;