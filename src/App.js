import HeroBanner from "components/Common/HeroBanner"
import Cards from "components/Common/Cards"
import Inputs from "components/Common/Inputs"
import TextTarea from "components/Common/TextTarea"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroBanner/>
      </header>
      <body>
        <Cards/>
        <Inputs></Inputs>
        <TextTarea></TextTarea>
      </body>
    </div>
  )
}

export default App
