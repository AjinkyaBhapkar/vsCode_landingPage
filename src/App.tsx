import "./App.css";
import { navbarLogo } from "./assets/navbarLogo";
function App() {
  return (
    <div
      style={{
        margin: "auto",

        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif",
      }}
    >
      <div
        id="navbar"
        style={{
          width: "1320px",
          margin: "4px auto 0 auto",
          display: "flex",
          backgroundColor: "rgb(14,14,14)",
          color: "rgb(155, 163, 180)",
          alignItems: "center",
          padding: "0 40px",
        }}
      >
        <img src={navbarLogo} style={{ height: "25px" }} alt="" />

        <span
          id="logo"
          style={{
            color: "rgb(233, 234, 235)",
            fontWeight: "600",
            fontSize: "20px",
            padding: "15px 15px 15px 15px",
          }}
        >
          Visual Studio Code
        </span>
        <span
          style={{
            color: "#9ba3b4",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          <span style={{ padding: "0 12px" }}>Docs</span>
          <span style={{ padding: "0 12px" }}>Updates</span>
          <span style={{ padding: "0 12px" }}>Blog</span>
          <span style={{ padding: "0 12px" }}>API</span>
          <span style={{ padding: "0 12px" }}>Extensions</span>
          <span style={{ padding: "0 12px" }}>FAQ</span>
          <span style={{ padding: "0 12px" }}>Learn</span>
        </span>
        <span
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          <span
            id="theme"
            style={{ marginRight: "4px", padding: "1px 6px 1px 6px" }}
          >
            <img
              style={{ height: "20px" }}
              src="https://code.visualstudio.com/assets/icons/theme-light.svg"
              alt=""
            />
          </span>
          <span
            style={{
              borderRadius: "4px",
              border: "1px solid rgba(255,255,255,0.15)",
              // padding: "5px",
              marginRight: "8px",
              // height: "31.6px !important",
              display: "flex",
            }}
          >
            <img
              src="https://code.visualstudio.com/assets/icons/search-dark.svg"
              alt=""
              style={{ color: "black", zIndex: "100", padding: "0 6px" }}
            />
            <input
              type="text"
              placeholder="Search Docs"
              style={{
                border: "none",
                // padding: "5px 0px 5px 12px",
                height: "31.6px",
                width: "200px",
                backgroundColor: "inherit",
              }}
            ></input>
          </span>
          <button
            style={{
              color: "rgb(255, 255, 255)",
              backgroundColor: "rgb(0, 105, 185)",
              border: "none",
              padding: "7px 15px",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: 600,
              margin: "0px",
            }}
          >
            Download
          </button>
        </span>
      </div>
      <div
        id="hero"
        style={{
          background: "linear-gradient(180deg, #0e0e0e 0%, #141414 100%)",
        }}
      >
        <div style={{ height: "54.4px" }}></div>
        <div
          style={{
            height: "604px",
            margin: "32px 0",
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ padding: "32px" }}>
            <span
              style={{
                borderRadius: "32px",
                color: "#9ba3b4",
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "8px 12px",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Free. Built on open source. Runs everywhere.
            </span>
            <h1
              style={{
                fontSize: "56px",
                marginTop: "10px",
                marginBottom: "32px",
                color: "#e9eaeb",
              }}
            >
              Code Editing.
              <br /> Redefined.
            </h1>
            <div>
              <button
                style={{
                  color: "#fff",
                  padding: "12px 24px",
                  fontSize: "18px",
                  fontWeight: "600",
                  borderRadius: "4px",
                  backgroundColor: "rgb(0, 120, 212)",
                  border: "none",
                }}
              >
                Download for Windows
              </button>
              <br />
              <div
                style={{
                  color: "#4daafc",
                  fontSize: "14px",
                  fontWeight: "500",
                  margin: "16px 0",
                }}
              >
                <u>Web</u>, <u>Insiders edition</u>, or <u>other platforms</u>
              </div>

              <span style={{ fontSize: "11px", color: "#9ba3b4" }}>
                By using VS Code, you agree to its{" "}
                <u style={{ color: "#4daafc" }}>license</u> and{" "}
                <u style={{ color: "#4daafc" }}>privacy statement</u>.
              </span>
            </div>
          </div>
          <img
            style={{ height: "507px", padding: "0 40px" }}
            src="https://code.visualstudio.com/assets/home/home-screenshot-mac-2x-v2.png"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;
