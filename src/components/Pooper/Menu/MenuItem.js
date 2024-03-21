import Button from "../../Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx("menu-item", {
        separate: data.separate,
    });
    return (
        <Button className={classes} to={data.to} onClick={onClick}>
            {data.icon && <div className={cx("icon")}>{data.icon}</div>}
            {data.title}
        </Button>
    );
}

export default MenuItem;
