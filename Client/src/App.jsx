import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      {/* <button
        onClick={() => setDark(!dark)}
        className="fixed top-4 right-4 bg-black text-white px-3 py-1 rounded"
      >
        Toggle
      </button> */}
 
      <AppRoutes />
    </div>
  );
}

export default App;   