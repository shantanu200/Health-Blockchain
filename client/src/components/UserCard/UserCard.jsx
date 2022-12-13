import { QRCodeCanvas } from "qrcode.react";
import React, { useEffect, useState } from "react";
import { Profile } from "../../api/api";

const UserCard = ({_id}) => {
  const [query, setQuery] = useState(
    _id ? `http://127.0.0.1:5173/user/${_id}` : null
  );

  const RenderQR = () => {
    return (
      <QRCodeCanvas
        id="qrCode"
        value={query}
        bgColor={"white"}
        level={"H"}
      />
    );
  };

  return (<div>
  
  </div>)
};

export default UserCard;
