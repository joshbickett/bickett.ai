export const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 0",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <a
        href="https://www.youtube.com/channel/UC_GSUTfPfsjcWFg4GBjAnmw"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 10px" }}
      >
        <i
          className="fab fa-youtube"
          style={{ fontSize: "30px", color: "red" }}
        ></i>
      </a>
      <a
        href="https://twitter.com/josh_bickett"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 10px" }}
      >
        <i
          className="fa-brands fa-x-twitter"
          style={{ color: "black", fontSize: "30px" }}
        ></i>
      </a>
      <a
        href="https://github.com/joshbickett/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 10px" }}
      >
        <i
          className="fab fa-github"
          style={{ fontSize: "30px", color: "black" }}
        ></i>
      </a>
    </div>
  );
};
