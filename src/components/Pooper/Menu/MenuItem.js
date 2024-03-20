import Button from "../../Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

function MenuItem({ data }) {
    console.log(data);
    return (
        <Button className={cx("menu-item")} to={data.to}>
            <div className={cx("icon")}>{data.icon}</div>
            {data.title}
        </Button>
    );
}

export default MenuItem;
