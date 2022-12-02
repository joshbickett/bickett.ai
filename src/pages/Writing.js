import { NavigationBar } from "../components/NavigationBar";
export const Writing = ({ isMobile }) => {
  const ready = false;
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <NavigationBar active={"writing"} isMobile={isMobile} />
        {!ready && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "50px 200px",
            }}
          >
            <div style={{ textAlign: "center", fontSize: "30px" }}>
              COMING NOT SO SOON...
            </div>
          </div>
        )}
        {ready && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 5fr 1fr",
              gap: "20px",
              marginTop: "50px",
            }}
          >
            <div>a</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                borderRight: "1px solid gray",
              }}
            >
              <div style={{ margin: "10px" }}>General</div>
              <div
                style={{
                  margin: "10px",
                  borderRadius: "40%",
                  padding: "10px",
                  border: "1px solid black",
                }}
              >
                Books
              </div>
            </div>
            <div>
              <h1>Benjamin Franklin, An American Life</h1>
              <p>
                This book has some significants in my life. I've derived many
                lessons and habits from Benjamin.
              </p>
            </div>
            <div>
              <h6>Significant pages</h6>
              <ul>
                <li>49</li>
                <li>89</li>
                <li>296</li>
                <li>445</li>
                <li>458</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// color: black;
//   border-radius: 40%;
//   padding: 10px;
//   border: 1px solid black;
//   margin: 0 5px;
