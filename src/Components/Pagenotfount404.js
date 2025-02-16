import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Pagenotfount404.css";
import BounceLoader from "react-spinners/BounceLoader";
import { useEffect } from "react";

function Pagenotfount404() {
  const [loading, setLoading] = useState(true);

  const loadFunc = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loadFunc();
  }, []);

  return (
    <>
      {loading ? (
        <BounceLoader className="loader" color="#643baa" size={150} />
      ) : (
        <div className="pageerror">
          <div className="page404">
            <div>
              404
              <br />
              Page Not Found
            </div>
            <Link
              to={"/"}
              className="link p-2"
              style={{
                fontSize: "15px",
                color: "white",
                backgroundColor: "#643baa",
                borderRadius: "8px",
              }}
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Pagenotfount404;
