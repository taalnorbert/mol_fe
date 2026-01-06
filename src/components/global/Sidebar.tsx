import type React from "react";
import { useSidebar } from "../../providers/SideBarProvider";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";

const Sidebar: React.FC = () => {
    const { isOpen, closeSidebar } = useSidebar();
    const { t } = useTranslation();
    const location = useLocation();

    useEffect(()=>{
        if(isOpen) {
            closeSidebar();
        }
    },[location])

    return (
        <main className={`overflow-hidden bg-primary text-white ${isOpen ? "w-[250px]" : "w-0"} absolute left-0 top-0 h-fit z-10`}>
            {isOpen && (
                <ul className="flex flex-col">
                    <Link to="/">
                        <li className="p-4 hover:bg-primary-hover bg-primary cursor-pointer">{t("sideBarOptions.home")}</li>
                    </Link>

                    <Link to="/requests/new">
                        <li className="p-4 hover:bg-primary-hover bg-primary cursor-pointer">{t("sideBarOptions.newRequest")}</li>
                    </Link>
                    <Link to="/requests/list">
                        <li className="p-4 hover:bg-primary-hover bg-primary cursor-pointer">{t("sideBarOptions.listRequests")}</li>
                    </Link>
                </ul>
            )}
        </main>
    );
};

export default Sidebar;