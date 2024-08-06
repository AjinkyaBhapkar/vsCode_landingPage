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
          width: "1240px",
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
        id="message"
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          height: "54.4px",
          color: "#9ba3b4",
          padding: "8px 12px",
          fontWeight: "600",
          fontSize: "14px",
          textAlign: "center",
        }}
      >
        <p style={{ margin: "0 auto" }}>
          <u style={{ color: "#4daafc" }}>Version 1.92</u> is now available!
          Read about the new features and fixes from July.
        </p>
        <img
          style={{ height: "20px" }}
          src="https://img.icons8.com/?size=100&id=6483&format=png&color=9ba3b4"
          alt=""
        />
      </div>
      <div
        id="hero"
        style={{
          height: "604px",
          background: "linear-gradient(180deg, #0e0e0e 0%, #141414 100%)",
        }}
      >
        <div
          style={{
            margin: "32px auto 96px auto",
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ padding: "32px", margin: "auto 0" }}>
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
      <div
        id="section1"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "96px 0 64px 0",
          marginBottom: "48px",
        }}
      >
        <div style={{ padding: "0 40px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "600",
              color: "rgb(233, 234, 235)",
            }}
          >
            Code in any language
          </h2>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            VS Code supports almost every major
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            programming language. Several ship in the box,
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            like JavaScript, TypeScript, CSS, and HTML, but
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            extensions for others can be found in the VS
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            Code Marketplace.
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            padding: "0 40px",
            rowGap: "8px",
          }}
        >
          <div
            style={{
              width: "278px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src="https://code.visualstudio.com/assets/home/language-js.png"
            ></img>
            <span
              style={{
                marginLeft: "8px",
                color: "rgb(155, 163, 180)",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              JavaScript
            </span>
          </div>
          <div
            style={{
              width: "278px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src="https://code.visualstudio.com/assets/home/language-ts.png"
            ></img>
            <span
              style={{
                marginLeft: "8px",
                color: "rgb(155, 163, 180)",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              TypeScript
            </span>
          </div>
          <div
            style={{
              width: "278px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src="https://code.visualstudio.com/assets/home/language-python.png"
            ></img>
            <span
              style={{
                marginLeft: "8px",
                color: "rgb(155, 163, 180)",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Python
            </span>
          </div>
          <div
            style={{
              width: "278px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src="https://code.visualstudio.com/assets/home/language-cs.png"
            ></img>
            <span
              style={{
                marginLeft: "8px",
                color: "rgb(155, 163, 180)",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              C#
            </span>
          </div>
          <div
            style={{
              width: "278px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src="	https://code.visualstudio.com/assets/home/language-cpp.png"
            ></img>
            <span
              style={{
                marginLeft: "8px",
                color: "rgb(155, 163, 180)",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              C++
            </span>
          </div>
          <div
            style={{
              width: "278px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src="https://code.visualstudio.com/assets/home/language-html.png"
            ></img>
            <span
              style={{
                marginLeft: "8px",
                color: "rgb(155, 163, 180)",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              HTML
            </span>
          </div>
          <div
            style={{
              width: "278px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src="	https://code.visualstudio.com/assets/home/language-java.png"
            ></img>
            <span
              style={{
                marginLeft: "8px",
                color: "rgb(155, 163, 180)",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Java
            </span>
          </div>
          <div
            style={{
              width: "278px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src="https://code.visualstudio.com/assets/home/language-json.png"
            ></img>
            <span
              style={{
                marginLeft: "8px",
                color: "rgb(155, 163, 180)",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              JSON
            </span>
          </div>
          <div
            style={{
              width: "278px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src="https://code.visualstudio.com/assets/home/language-php.png"
            ></img>
            <span
              style={{
                marginLeft: "8px",
                color: "rgb(155, 163, 180)",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              PHP
            </span>
          </div>
          <div
            style={{
              width: "278px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src="https://code.visualstudio.com/assets/home/language-markdown.png"
            ></img>
            <span
              style={{
                marginLeft: "8px",
                color: "rgb(155, 163, 180)",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Markdown
            </span>
          </div>
          <div
            style={{
              width: "278px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src="	https://code.visualstudio.com/assets/home/language-powershell.png"
            ></img>
            <span
              style={{
                marginLeft: "8px",
                color: "rgb(155, 163, 180)",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Powershell
            </span>
          </div>
          <div
            style={{
              width: "278px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "40px" }}
              src="https://code.visualstudio.com/assets/home/language-yaml.png"
            ></img>
            <span
              style={{
                marginLeft: "8px",
                color: "rgb(155, 163, 180)",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              YAML
            </span>
          </div>
        </div>
      </div>
      <div
        id="section2"
        style={{ display: "flex", justifyContent: "center", padding: "64px 0" }}
      >
        <div style={{ padding: "0 40px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "600",
              color: "rgb(233, 234, 235)",
            }}
          >
            Code with extensions
          </h2>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            Whether you're a beginner or an expert, we've
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            got you covered. Choose from hundreds of
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            extensions to power up your VS Code experience.
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            <u style={{ color: "rgb(77, 170, 252)" }}>
              Learn more about extensions
            </u>
          </span>
        </div>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              gap: "16px",
              padding: "0 55px",
              maskImage: "linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.1))",
            }}
          >
            <div
              style={{
                width: "222.4px",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                display: "flex",
                padding: "16px",
              }}
            >
              <img
                style={{ height: "40px" }}
                src="	https://code.visualstudio.com/assets/images/python-extension.png"
                alt=""
              />
              <div style={{ marginLeft: "12px" }}>
                <p
                  style={{
                    margin: "0 0 4px 0",
                    color: "rgb(233, 234, 235)",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Python
                </p>
                <span
                  style={{
                    color: "rgb(155, 163, 180)",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Adds rich language support for Python
                </span>
              </div>
            </div>
            <div
              style={{
                width: "222.4px",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                display: "flex",
                padding: "16px",
              }}
            >
              <img
                style={{ height: "40px" }}
                src="	https://code.visualstudio.com/assets/images/copilot-extension.png"
                alt=""
              />
              <div style={{ marginLeft: "12px" }}>
                <p
                  style={{
                    margin: "0 0 4px 0",
                    color: "rgb(233, 234, 235)",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  GitHub Copilot
                </p>
                <span
                  style={{
                    color: "rgb(155, 163, 180)",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Your AI pair programmer
                </span>
              </div>
            </div>
            <div
              style={{
                width: "222.4px",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                display: "flex",
                padding: "16px",
              }}
            >
              <img
                style={{ height: "40px" }}
                src="https://code.visualstudio.com/assets/images/c-extension.png"
                alt=""
              />
              <div style={{ marginLeft: "12px" }}>
                <p
                  style={{
                    margin: "0 0 4px 0",
                    color: "rgb(233, 234, 235)",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  C/C++
                </p>
                <span
                  style={{
                    color: "rgb(155, 163, 180)",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Adds rich language support for C/C++
                </span>
              </div>
            </div>
            <div
              style={{
                width: "222.4px",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                display: "flex",
                padding: "16px",
              }}
            >
              <img
                style={{ height: "40px" }}
                src="https://code.visualstudio.com/assets/images/jupyter-extension.png"
                alt=""
              />
              <div style={{ marginLeft: "12px" }}>
                <p
                  style={{
                    margin: "0 0 4px 0",
                    color: "rgb(233, 234, 235)",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Jupyter
                </p>
                <span
                  style={{
                    color: "rgb(155, 163, 180)",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Language support for Jupyter Notebooks
                </span>
              </div>
            </div>
            <div
              style={{
                width: "222.4px",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                display: "flex",
                padding: "16px",
              }}
            >
              <img
                style={{ height: "40px" }}
                src="https://code.visualstudio.com/assets/images/gitlens-extension.png"
                alt=""
              />
              <div style={{ marginLeft: "12px" }}>
                <p
                  style={{
                    margin: "0 0 4px 0",
                    color: "rgb(233, 234, 235)",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  GitLens
                </p>
                <span
                  style={{
                    color: "rgb(155, 163, 180)",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Superchage your Git experience
                </span>
              </div>
            </div>
            <div
              style={{
                width: "222.4px",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                display: "flex",
                padding: "16px",
              }}
            >
              <img
                style={{ height: "40px" }}
                src="	https://code.visualstudio.com/assets/images/cs-dev-kit-extension.png"
                alt=""
              />
              <div style={{ marginLeft: "12px" }}>
                <p
                  style={{
                    margin: "0 0 4px 0",
                    color: "rgb(233, 234, 235)",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  C# Dev Kit
                </p>
                <span
                  style={{
                    color: "rgb(155, 163, 180)",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Powerful tools for your C# environment
                </span>
              </div>
            </div>
            <div
              style={{
                width: "222.4px",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                display: "flex",
                padding: "16px",
              }}
            >
              <img
                style={{ height: "40px" }}
                src="https://code.visualstudio.com/assets/images/github-pull-requests-extension.png"
                alt=""
              />
              <div style={{ marginLeft: "12px" }}>
                <p
                  style={{
                    margin: "0 0 4px 0",
                    color: "rgb(233, 234, 235)",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  GitHub Codespaces
                </p>
                <span
                  style={{
                    color: "rgb(155, 163, 180)",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Fully configured dev environments in the cloud
                </span>
              </div>
            </div>
            <div
              style={{
                width: "222.4px",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                display: "flex",
                padding: "16px",
              }}
            >
              <img
                style={{ height: "40px" }}
                src="https://code.visualstudio.com/assets/images/github-pull-requests-extension.png"
                alt=""
              />
              <div style={{ marginLeft: "12px" }}>
                <p
                  style={{
                    margin: "0 0 4px 0",
                    color: "rgb(233, 234, 235)",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  GitHub Pull Requests
                </p>
                <span
                  style={{
                    color: "rgb(155, 163, 180)",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Collaborate on issues and pull requests
                </span>
              </div>
            </div>
            <div
              style={{
                width: "222.4px",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                display: "flex",
                padding: "16px",
              }}
            >
              <img
                style={{ height: "40px" }}
                src="https://code.visualstudio.com/assets/images/remote-extension.png"
                alt=""
              />
              <div style={{ marginLeft: "12px" }}>
                <p
                  style={{
                    margin: "0 0 4px 0",
                    color: "rgb(233, 234, 235)",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Remote Development
                </p>
                <span
                  style={{
                    color: "rgb(155, 163, 180)",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Open folders in a container on a remote machine
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p
              style={{
                color: "rgb(155, 163, 180)",
                fontSize: "13px",
                fontWeight: "500",
              }}
            >
              View 50k+ extensions in the{" "}
              <u style={{ color: "#4daafc" }}>Extension Marketplace</u>
            </p>
          </div>
        </div>
      </div>
      <div
        id="section3"
        style={{ display: "flex", justifyContent: "center", padding: "64px 0" }}
      >
        <div style={{ padding: "0 40px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "600",
              color: "rgb(233, 234, 235)",
            }}
          >
            Code with GitHub Copilot
          </h2>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            Write code faster and smarter with GitHub
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            Copilot, your AI pair programmer.
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            <u style={{ color: "#4daafc" }}>
              Try GitHub Copilot free for 30 days
            </u>
          </span>
          <br />
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            <u style={{ color: "#4daafc" }}>Completions</u> present suggestions
            automatically
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            to help you code more efficiently.
          </span>
          <br />
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            <u style={{ color: "#4daafc" }}>Copilot Chat</u> understands the
            context of your
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            code, workspace, extensions, settings, and more.
          </span>
          <br />
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            <u style={{ color: "#4daafc" }}>Inline Chat</u> enables you to
            iteratively generate
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            edits and get answers to quick questions, directly
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            on your code.
          </span>
          <br />
        </div>
        <img
          style={{ width: "800px", padding: "0 40px" }}
          src="https://code.visualstudio.com/assets/home/swimlane-copilot.png"
          alt=""
        />
      </div>
      <div
        id="section4"
        style={{ display: "flex", justifyContent: "center", padding: "64px 0" }}
      >
        <div style={{ padding: "0 40px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "600",
              color: "rgb(233, 234, 235)",
            }}
          >
            Code fully customized
          </h2>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            Customize your VS Code UI and layout so that it
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            fits your coding style.
          </span>
          <br />
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            <u style={{ color: "#4daafc" }}>Color themes</u> let you modify the
            colors in VS
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            Code's user interface to suit your preferences and
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            work environment.
          </span>
          <br />
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            <u style={{ color: "#4daafc" }}>Settings Sync</u> enables you to
            share your user
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            settings across your VS Code instances with the
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            Settings Sync feature.
          </span>
          <br />
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            <u style={{ color: "#4daafc" }}>Profiles</u> let you create sets of
            customizations and
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            quickly switch between them or share them with
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            others.
          </span>
          <br />
        </div>
        <img
          style={{ width: "800px", padding: "0 40px" }}
          src="	https://code.visualstudio.com/assets/home/swimlane-customized.png"
          alt=""
        />
      </div>
      <div
        id="section5"
        style={{ display: "flex", justifyContent: "center", padding: "64px 0" }}
      >
        <div style={{ padding: "0 40px" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "600",
              color: "rgb(233, 234, 235)",
            }}
          >
            Code anywhere
          </h2>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            Code wherever you're most productive, whether
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            you're connected to the cloud, a remote
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            repository, or in the browser with VS Code for
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            the Web (vscode.dev).
          </span>
          <br />
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            <u style={{ color: "#4daafc" }}>Built-in Source Control</u> empowers
            you with Git
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            support out-of-the-box. Many other source
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            control providers are available through
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            extensions.
          </span>
          <br />
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            <u style={{ color: "#4daafc" }}>GitHub Codespaces</u> provides
            cloud-powered
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            development environments for any activity -
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            whether it's a long-term project, or a short-term
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            task like reviewing a pull request.
          </span>
          <br />
        </div>
        <img
          style={{ width: "800px", padding: "0 40px" }}
          src="https://code.visualstudio.com/assets/home/swimlane-anywhere.png"
          alt=""
        />
      </div>
      <div id="section6">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "32px 0",
            padding: "16px",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "600",
              color: "rgb(233, 234, 235)",
            }}
          >
            Code with rich features
          </h2>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            There's a lot more to an editor. Whether it's using built-in
            features or
          </span>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgb(155, 163, 180)",
              lineHeight: "25.6px",
            }}
          >
            rich extensions, there's something for everyone.
          </span>
        </div>
        <div style={{ display: "grid" }}></div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
