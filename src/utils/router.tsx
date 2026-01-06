
import RequestCreatePage from '@/pages/RequestCreatePage';
import { type RouterConfig } from '@/utils/definitions';


export const router: RouterConfig = {
    elements: [
        
        {
            mode: "PROTECTED",
            path: "/",
            component: <RequestCreatePage/>,
            navbar: false,
        }
    ],

    protectedFailRedirect: "/auth",
    guestOnlyFailRedirect: "/"
}