import './App.css'
import Button from './Components/button/Button'
import Screen from './Components/screen/Screen'
import { FiDelete } from "react-icons/fi";
import calContext from './context/calcContext';
import { useReducer } from 'react';
import reducer from './reducer/reducer';



const App = () => {


  const initialState = {
    screenText: "",
    isOpen: true,
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const btnArr = [{label:'AC', value:'AC'}, 
    {label:'()', value:'()'}, 
    {label:'%', value:'%'}, 
    {label:'/', value:'/'},
    {label:'7', value:'7'}, 
    {label:'8', value:'8'}, 
    {label:'9', value:'9'},
    {label:'*', value:'*'},
    {label:'4', value:'4'}, 
    {label:'5', value:'5'},
    {label:'6', value:'6'},
    {label:'-', value:'-'},
    {label:'1', value:'1'},
    {label:'2', value:'2'},
    {label:'3', value:'3'},
    {label:'+', value:'+'},
    {label:'0', value:'0'},
    {label:'.', value:'.'},
    {label:'DEL', value:<FiDelete />},
    {label:'=', value:"="}
  ]

  const handleOnChange = (e) => {
    dispatch({
      type: "UPDATE_TEXT",
      value: e.target.value
    })
  }

  const helperFunction = (type, value)=>{

    if(type==='CLEAR_TEXT'){
       dispatch({type:'IS_OPEN', value:true})
    }

    if(type === 'CLOSE_ROUND' || type === 'OPEN_ROUND'){
      dispatch({type:'IS_OPEN', value:!state.isOpen})
    }
    dispatch({type:type, value:value})
  }

  const handleClick = (e) => {

    if (e.target.dataset.value === "AC") return helperFunction("CLEAR_TEXT", "" )

    if(e.target.dataset.value === 'DEL') return helperFunction('DEL_TEXT', state.screenText.slice(0,-1))

    if(e.target.dataset.value === '()'){
      if(!state.isOpen) return helperFunction('CLOSE_ROUND',state.screenText+')')
      return helperFunction('OPEN_ROUND',state.screenText+'(')
    }


    

    dispatch({
        type: "UPDATE_TEXT",
        value: state.screenText + e.target.textContent
      })

    }


    return (
      <calContext.Provider value={{ state, dispatch, handleOnChange, handleClick }}>
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