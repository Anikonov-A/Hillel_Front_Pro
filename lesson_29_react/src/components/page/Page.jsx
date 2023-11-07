import Aside from "../aside-menu/Aside";
import styles from "./Page.module.scss"
import Main from "../main-content/Main";

export default function Page() {
    return (
        <div>
            <div className={styles.container}>
                <Aside/>
                <Main />
            </div>
        </div>
    )
}