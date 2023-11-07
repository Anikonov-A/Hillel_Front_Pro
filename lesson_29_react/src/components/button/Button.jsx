import styles from "./Button.module.scss"
import {string} from 'prop-types'
import {useState} from "react";

export default function  Button({text}){
    const [isClicked, setIsClicked] = useState(false);
    function handleClickFunction(){
         setIsClicked((isClicked)=>!isClicked)
    }
    return (
        <button type='button' className={`${styles.button} ${isClicked ? styles.clicked : styles.default}`} onClick={handleClickFunction}>{text}</button>
    )
}
Button.propTypes = {
    text: string.isRequired
}