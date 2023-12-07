import * as React from "react";

interface Props {
  visible: boolean;
  text: string;
}

export default function NotificationBox({visible,  text}: Props): JSX.Element {

  if (!visible) {
    return <></>;
  }

  return <div className="notification fixed bottom-[1rem] left-[1rem] width:20% height-[8vh] bg-gray-700  text-white" style={{zIndex:100}}>{text}</div>;
}