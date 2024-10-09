import {
    MAIN_PAGE_ROUTE,
    ABOUT_ROUTE,
    LAYOUT_ROUTE,
    INSTRUCTION_ROUTE,
    GALLERY_ROUTE,
    LOCATION_ROUTE,
} from "../utils/consts";
import MainPage from "../pages/MainPage/MainPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import LocationPage from "../pages/LocationPage/LocationPage";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import LayoutPage from "../pages/LayoutPage/LayoutPage";
import InstructionPage from "../pages/InstructionPage/InstructionPage";

export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutPage
    },
    {
        path: LAYOUT_ROUTE,
        Component: LayoutPage
    },
    {
        path: GALLERY_ROUTE,
        Component: GalleryPage
    },
    {
        path: INSTRUCTION_ROUTE,
        Component: InstructionPage
    },
    {
        path: LOCATION_ROUTE,
        Component: LocationPage
    },
]