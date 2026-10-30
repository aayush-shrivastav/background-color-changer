
import ReactDOM from "react-dom/client";
import SetColor from "./src/componant/colorpic";  
function App(){

  
  return(
    <>
      <SetColor/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>);