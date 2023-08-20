import React, { useState, useEffect } from "react";
import Terms from "./terms";

function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>로딩 중...</p> {}
        </div>
      ) : (
        <div className="content">
          <Terms />
        </div>
      )}
    </div>
  );
}

export default Loading;