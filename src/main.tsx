import { createRoot } from 'react-dom/client'
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router';

import '@/styles/main.css';
import { router } from '@/utils/router';
import Navbar from '@/components/global/Navbar';
import Sidebar from '@/components/global/Sidebar';
import { SidebarProvider } from '@/providers/SideBarProvider';
import '@/locales/i18n';


const runtimeConfig = window.ENV || {};
const apiURL = runtimeConfig.VITE_API_URL;

axios.defaults.baseURL = apiURL ?? import.meta.env.VITE_API_URL ?? "";
axios.defaults.withCredentials = true;


createRoot(document.getElementById('root')!).render(
    <SidebarProvider>
        <BrowserRouter>
            <Routes>
                {
                    router.elements.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <div className='flex flex-col h-screen'>
                                    {route.navbar && <Navbar />}
                                    <div className='flex flex-1 overflow-hidden relative'>
                                        <Sidebar />
                                        <div className='flex-1 overflow-auto'>
                                            {route.component}
                                        </div>
                                    </div>
                                </div>}
                        />
                    ))
                }
            </Routes>
        </BrowserRouter>
    </SidebarProvider>
)
