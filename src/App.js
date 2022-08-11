import logo from "./logo.svg";
import "./App.css";
import coding from "./assets/coding.png";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "black", height: "100vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={coding}
              alt="tron"
              style={{ width: "100px", borderRadius: "50%", margin: "10px" }}
            />
            <div
              style={{
                fontSize: "20px",
              }}
            >
              Josh Bickett
            </div>
          </div>

          {/* <div>test</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
