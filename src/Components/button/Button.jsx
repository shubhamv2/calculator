import calContext from '../../context/calcContext'
import styles from './Button.module.css'
import { useContext } from 'react'
const Button = ({btnText,data}) =>{
    const {handleClick} = useContext(calContext)
    return(
        <button data-value={data} onClick={handleClick} className={styles.button}>{btnText}</button>
    )
}

export default Button