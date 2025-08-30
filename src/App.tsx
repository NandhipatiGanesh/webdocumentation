import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DocsLayout from "./layouts/DocsLayout";
import GettingStarted from "./pages/docs/GetStarted";

import Installation from "./pages/docs/Installation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root (/) → /docs */}
        <Route path="/" element={<Navigate to="/docs" replace />} />

        {/* Docs layout route */}
        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<GettingStarted />} />
          <Route path="getting-started" element={<GettingStarted />} />
          {/* <Route path="pagination" element={<Pagination />} /> */}
          <Route path="installation" element={<Installation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
