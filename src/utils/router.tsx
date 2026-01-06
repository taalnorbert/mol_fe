
import HomePage from '@/pages/HomePage';
import RequestCreatePage from '@/pages/RequestCreatePage';
import RequestListPage from '@/pages/RequestListPage';
import { type RouterConfig } from '@/utils/definitions';


export const router: RouterConfig = {
    elements: [
        { 
            mode: "PROTECTED",
            path: "/",
            component: <HomePage/>,
            navbar: true,
        },
        {
            mode: "PROTECTED",
            path: "/requests/new",
            component: <RequestCreatePage/>,
            navbar: true,
        },
        {
            mode: "PROTECTED",
            path: "/requests/list",
            component: <RequestListPage/>,
            navbar: true
        }
    ],

    protectedFailRedirect: "/auth",
    guestOnlyFailRedirect: "/"
}