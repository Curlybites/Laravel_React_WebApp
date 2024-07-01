import { MdHomeFilled } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
const Navlinks = [
    {
        icon: <MdHomeFilled />,
        url: "/Admin/Home",
        navLinkname: "Home",
    },
    {
        icon:<TbCategoryFilled />,
        url: "/Admin/Category",
        navLinkname: "Category",
    },
    {
        icon:<PiArticleNyTimesFill />,
        url: "/Admin/Article",
        navLinkname: "Article",
    },
    {
        icon:<FaUsers />,
        url: "/Admin/User",
        navLinkname: "User",
    },
];

export default Navlinks;
