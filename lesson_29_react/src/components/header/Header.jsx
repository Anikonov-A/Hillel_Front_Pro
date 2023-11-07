import styles from './Header.module.scss'
import Navigation from "../nav/Navigation";
import Button from "../button/Button";


export default function Header() {
    return (
        <div>
            <div className={styles.container}>
                <header className={styles.header}>
                    <img src='./react-logo.svg' alt="logo" className={`${styles.img} ${styles.rotating}`}/>
                    <Navigation />
                    <Button text='Click Me'/>
                </header>
            </div>
        </div>
    )

}
