import { useState } from "react";
import { Alert } from "react-bootstrap";
const PageLoadTimeCapture = () => {
  const [ShowPageLoadTimeAlert, setShowPageLoadTimeAlert] = useState(true);
  const { timing } = window.performance;
  const loadTime = timing.domContentLoadedEventEnd - timing.navigationStart;
  if (ShowPageLoadTimeAlert) {
    return (
      <Alert
        variant="success"
        onClose={() => setShowPageLoadTimeAlert(false)}
        dismissible
      >
        Page load time: {loadTime} milliseconds
      </Alert>
    );
  }
};
export default PageLoadTimeCapture;
