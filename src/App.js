import logo from "./logo.svg";
import "./App.css";
import coding from "./assets/coding.png";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "black", height: "100vh" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={coding}
              alt="tron"
              style={{ width: "100px", borderRadius: "50%", margin: "10px" }}
            />
            <div
              style={{
                fontSize: "30px",
              }}
            >
              Josh Bickett
            </div>
          </div>
          <div
            style={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>projects</div>
            <div>github</div>
            <div>writing</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
