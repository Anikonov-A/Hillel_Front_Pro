import Button from "../button/Button";
import styles from "./Aside.module.scss"

export default function Aside() {
    return (
        <div>
            <div className={styles.container}>
                <Button text="I'm the same component"/>
                <Button text="I'm the same component"/>
                <Button text="I'm the same component"/>
                <Button text="I'm the same component"/>
                <Button text="I'm the same component"/>
                <Button text="I'm the same component"/>
                <Button text="I'm the same component"/>
            </div>
        </div>
    )
}