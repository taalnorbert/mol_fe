import type React from "react";
import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <main className="grid place-items-center h-full">
            <span className="font-bold text-sze-1 text-2xl">Főoldal</span>
        </main>
    )
}

export default HomePage;