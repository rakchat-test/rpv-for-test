import { RPConfig } from "@pdf-viewer/react";
import "./App.css";
import AppPdfViewer from "./components/AppPdfViewer";
import { dependencies } from "../package.json";

function App() {
  const pdfViewerVersion = dependencies["@pdf-viewer/react"];

  return (
    <>
      <RPConfig>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <h3 style={{ margin: 0, padding: 0, color: "green" }}>
            RPV: v{pdfViewerVersion}
          </h3>
        </div>
        <div style={{ width: "1100px" }}>
          <AppPdfViewer />
        </div>
      </RPConfig>
    </>
  );
}

export default App;
