import styles from './Screen.module.css'
import { useContext } from 'react'
import calContext from '../../context/calcContext'
const Screen = () => {
    const { handleOnChange, state } = useContext(calContext)

    return (
        <form>
            <input className={styles.screen} onChange={(e) => handleOnChange(e)} value={state.screenText} type="text" />
        </form>
    )
}

export default Screen