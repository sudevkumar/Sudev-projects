import { Stack, Typography } from "@mui/material";

import React from "react";
import Icon from "../../assets/logo-image/gym.png";

function BodyPart({ item, bodyPart, setBodyPart }) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card "
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderTopLeftRadius: "20px",
        width: "250px",
        height: "250px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="dumbles" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyPart;
