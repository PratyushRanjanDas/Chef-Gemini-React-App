import React from "react";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);


    return (
        <>
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                backgroundColor: "#f0f0f0",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h1 style={{ fontSize: "2.5rem", color: "#333" }}>counter</h1>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <button
                    onClick={() => count>0 ? setCount(count - 1) : setCount(0)}
                    style={{
                        padding: "10px 20px",
                        fontSize: "1.5rem",
                        backgroundColor: "black",
                        color: "cyan",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }}
                >
                    -
                </button>
                <h2 style={{ fontSize: "2rem", margin: "0", color: "#333" }}>{count}</h2>
                <button
                    onClick={() => setCount(count+1)}
                    style={{
                        padding: "10px 20px",
                        fontSize: "1.5rem",
                        backgroundColor: "black",
                        color: "cyan",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }}
                >
                    +
                </button>
            </div>
        </main></>
    );
}
