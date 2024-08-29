
// import global style
import "./styles/Global.css"
import "./App.css";

// import card component
import Card from "./components/Global/Card";

function App() {

  return (
    <div id="app">
      <section className="product-list">
        <div className="title">
          <h1>Produtos</h1>
        </div>{/* div - title */}

        <ul className="list">
          <Card />
        </ul>{/* ul - to list products */}
      </section>{/* section - product-list */}
    </div>// div - app
  )
}

export default App;
