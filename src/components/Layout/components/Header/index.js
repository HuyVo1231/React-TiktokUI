import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";

import classNames from "classnames/bind";
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsis,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLeftLong,
    faLongArrowAltUp,
    faMagnifyingGlass,
    faMessage,
    faPlus,
    faPlusCircle,
    faSignOut,
    faSpinner,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
//
import images from "../../../../asset/images";
import { Wrapper as PopperWrapper } from "../../../../components/Pooper";
import styles from "./Header.module.scss";
import "tippy.js/dist/tippy.css";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import Menu from "../../../../components/Pooper/Menu";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng việt",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                console.log("Language");
            default:
                break;
        }
    };
    const currentUser = true;
    const menuUser = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View profile",
            to: "/profile",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get coins",
            to: "/getcoins",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: "/settings",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo} alt="logo" />
                <HeadlessTippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx("search_result")}>
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <input placeholder="Search accounts and videos" />
                        <button className={cx("clear")}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx("loading")}
                            icon={faSpinner}
                        />
                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx("action")}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Upload videos"
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>
                                <FontAwesomeIcon
                                    className={cx("plus")}
                                    icon={faPlus}
                                />
                                Tải lên
                            </Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? menuUser : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <img
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=a5d48078&x-expires=1711166400&x-signature=F8kMPCtApPcmNkMMEXPHEfT4pHM%3D"
                                className={cx("avatar")}
                                alt="Hoa"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
