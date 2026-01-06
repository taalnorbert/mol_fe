export type RouterConfig = {
    elements: RouterElement[];
    protectedFailRedirect: string;
    guestOnlyFailRedirect: string;
};
export type RouterElement = {
    mode: RouterElementMode;
    path: string;
    component: React.ReactNode;
    navbar: boolean;
};
export type RouterElementMode = "GUEST_ONLY" | "PROTECTED";
