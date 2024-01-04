import { Stack, Typography } from "@mui/material";
import { Form } from "react-bootstrap";
const Notification = () => {
  return (
    <div>
      <Typography
        style={{
          textTransform: "uppercase",
          fontWeight: "500",
          padding: "10px 0",
        }}
      >
        real-time notification
      </Typography>
      <Stack>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Enable/disable real-time notifications"
        />
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Enable/disable sound"
        />
      </Stack>
    </div>
  );
};

export default Notification;
