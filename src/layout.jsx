import { Navigation } from "./components/Navigation/Navigation";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner";
import { GenerateHistory } from "./components/GenerateHistory";
import { ScanHistory } from "./components/ScanHistory";

export const Layout = () => {
  return (
    <div >
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/qr-code/generate" element={<QrCodeGenerator />} />
          <Route path="/qr-code/scan" element={<QrCodeScanner />} />
          <Route path="/qr-code/generateHistory" element={<GenerateHistory/>} />
          <Route path="/qr-code/scanHistory" element={<ScanHistory/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
