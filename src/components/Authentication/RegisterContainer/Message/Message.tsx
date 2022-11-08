import React, { useState } from "react";
import Style from "./message.module.scss";
import { X } from "react-feather";
import { Alert } from "reactstrap";
interface IPropTypes {
  text: string;
}

const Message = ({ text }: IPropTypes) => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className={Style.messageHolder}>
          <span className={Style.closeBtn} onClick={() => setShow(false)}>
            <X color="red" size={20} />
          </span>
          <Alert style={{marginBottom:0}}>{text}</Alert>
        </div>
      )}
    </>
  );
};

export default Message;
