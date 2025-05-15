import './App.css'
// import Button from './Components/button/Button'
// import Screen from './Components/screen/Screen'
import { FiDelete } from "react-icons/fi";

const App = () =>{
  const btnArr = ['AC', '()', '%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.',`${<FiDelete/>}`,'=']
  return(
    <div>
      {/* <div className="screen">
        <Screen/>
      </div>
      <div className="buttons">
        {
          btnArr.map(item=><Button btnText={item}/>)
        }
      </div> */}
      <h1>Hello</h1>
    </div>
  )
}

export default App