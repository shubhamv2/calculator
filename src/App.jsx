import './App.css'
import Button from './Components/button/Button'
import Screen from './Components/screen/Screen'
import { FiDelete } from "react-icons/fi";
import calContext from './context/calcContext';
import { useReducer, useRef, useEffect } from 'react';
import reducer from './reducer/reducer';


const App = () => {


  const initialState = {
    screenText: "",
    isOpen: true,
  }


  const [state, dispatch] = useReducer(reducer, initialState)

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  const btnArr = [{ label: 'AC', value: 'AC' },
  { label: '()', value: '()' },
  { label: '%', value: '%' },
  { label: '/', value: '/' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '*', value: '*' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '-', value: '-' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '+', value: '+' },
  { label: '0', value: '0' },
  { label: '.', value: '.' },
  { label: 'DEL', value: <FiDelete /> },
  { label: '=', value: "=" }
  ]

  const handleOnChange = (e) => {
    dispatch({
      type: "UPDATE_TEXT",
      value: e.target.value
    })
  }

  const helperFunction = (type, value) => {

    dispatch({ type: type, value: value })
  }





  const handleClick = (e) => {

    if (e.target.dataset.value === "AC") {

      helperFunction('IS_OPEN', true)

      return helperFunction("CLEAR_TEXT", "")

    }


    if (e.target.dataset.value === 'DEL') {
      const updatedText = state.screenText.slice(0, -1);
      // First update the text
      helperFunction('DEL_TEXT', updatedText);
      // Then check brackets balance after deletion (based on updated text)
      const openCount = (updatedText.match(/\(/g) || []).length;
      const closeCount = (updatedText.match(/\)/g) || []).length;
      if (openCount > closeCount) {
        helperFunction('IS_OPEN', false);
      } else {
        helperFunction('IS_OPEN', true);
      }
      inputRef.current.focus();
      return;
    }



    if (e.target.dataset.value === '()') {
      if (!state.isOpen) {
        helperFunction('CLOSE_ROUND', state.screenText + ')')
        helperFunction('IS_OPEN', true)
        return;
      }

      helperFunction('IS_OPEN', false)
      helperFunction('OPEN_ROUND', state.screenText + '(')

      return;
    }


    if (e.target.dataset.value === "=") {

      if (state.screenText.includes('%')) {
        const splitArr = state.screenText.split('%')
        const newArr = splitArr.map(item => eval(item))
        if (!newArr[1]) return helperFunction('EVAL', eval(newArr[0] / 100))
        const percentage = (newArr[0] / newArr[1]) * 100
        helperFunction('EVAL', percentage.toString())
        inputRef.current.focus()
        return
      }
      helperFunction('EVAL', eval(state.screenText).toString())
      inputRef.current.focus()
      return;
    }


    inputRef.current.focus()
    helperFunction("UPDATE_TEXT", state.screenText + e.target.textContent)

  }


  return (
    <calContext.Provider value={{ state, dispatch, handleOnChange, handleClick, inputRef }}>
      <div className='cal-container'>
        <div className="screen">
          <Screen />
        </div>
        <div className="buttons">
          {
            btnArr.map((item) => <Button data={item.label} key={item.label} btnText={item.value} />)
          }
        </div>
      </div>
    </calContext.Provider>
  )
}

export default App