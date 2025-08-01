import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WcMs = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "Hello World!";
  const typingSpeed = 200; // 1 second per letter

  useEffect(() => {
    // Typing effect
    if (currentIndex < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimer);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    // Cursor blinking effect
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 400); // Blink every 500ms

    return () => clearInterval(cursorTimer);
  }, []);

  const [responsiveFontSize, setResponsiveFontSize] = useState(
    "clamp(1.5rem, 8vw, 4rem)"
  );

  useEffect(() => {
    function handleResize() {
      if (window.matchMedia("(max-width: 576px)").matches) {
        setResponsiveFontSize("1.8rem"); // XS
      } else if (window.matchMedia("(max-width: 768px)").matches) {
        setResponsiveFontSize("2.2rem"); // SM
      } else {
        setResponsiveFontSize("clamp(1.5rem, 8vw, 5rem)"); // Default
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-top min-vh-100 rounded-4 w-100"
      style={{
        // background: "linear-gradient(135deg, #b3b7caff 0%, #6268e7ff 100%)",
        fontFamily: "'Courier New', 'Monaco', monospace",
      }}
    >
      <div className="text-center w-100 my-4">
        <h1
          className="fw-bold user-select-none"
          style={{
            fontSize: responsiveFontSize,
            textShadow: "4px 4px 8px rgba(0,0,0,0.5)",
            letterSpacing: "0.1em",
            lineHeight: "1.2",
          }}
        >
          {displayedText}
          <span
            className="cursor"
            style={{
              opacity: showCursor ? 1 : 0,
              transition: "opacity 0.1s ease-in-out",
              // color: "#fff",
              fontSize: "inherit",
              fontWeight: "bold",
              marginLeft: "0px",
            }}
          >
            |
          </span>
        </h1>
        {currentIndex >= fullText.length && (
          <div
            className="mt-4 animate-fade-in"
            style={{
              animation: "fadeIn 2s ease-in-out",
            }}
          >
            <p
              className="text-dark-50 fs-4 fw-bold mb-4"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                letterSpacing: "0.05em",
              }}
            >
              Welcome to my portfolio!
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to={`/my-portfolio/about-me`} className="nav-link">
                <button
                  className="btn btn-light px-5 py-3 fw-bold shadow text-dark-50 fs-5 badge-bg"
                  style={{
                    borderRadius: "50px",
                    transition: "all 0.3s ease",
                    transform: "translateY(0)",
                  }}
                  onMouseOver={(e: any) =>
                    (e.target.style.transform = "translateY(-3px)")
                  }
                  onMouseOut={(e: any) =>
                    (e.target.style.transform = "translateY(0)")
                  }
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Animated particles background */}
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                position: "absolute",
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
                background: "rgba(255,255,255,0.3)",
                borderRadius: "50%",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 6 + 4}s linear infinite`,
                animationDelay: Math.random() * 2 + "s",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fadeIn 2s ease-in-out;
        }

        .particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }

        .particle {
          pointer-events: none;
        }

        .cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        /* Responsive font sizing */
        @media (max-width: 768px) {
          h1 {
            font-size: clamp(2rem, 10vw, 4rem) !important;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: clamp(1.5rem, 8vw, 3rem) !important;
          }
        }

        /* Smooth button transitions */
        .btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2) !important;
        }

        /* Prevent text selection on the main title */
        .user-select-none {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Enhanced cursor visibility */
        @media (prefers-reduced-motion: no-preference) {
          .cursor {
            animation: blink 1s infinite step-end;
          }
        }

        /* Fallback for reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .cursor {
            animation: none;
            opacity: 1;
          }

          .particle {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default WcMs;
