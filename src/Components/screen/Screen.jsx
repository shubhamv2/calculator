import styles from './Screen.module.css'
import { useContext } from 'react'
import calContext from '../../context/calcContext'
const Screen = () => {
    const { handleOnChange, state, inputRef } = useContext(calContext)

    return (
        <form>
            <input ref={inputRef} className={styles.screen} onChange={(e) => handleOnChange(e)} value={state.screenText} type="text" />
        </form>
    )
}

export default Screen