import "./index.css";
import React from "react";
import { render } from "react-dom";
import { AppRouter } from "./AppRouter"; // ✅ gọi router thay cho App

render(<AppRouter />, document.getElementById("root"));
