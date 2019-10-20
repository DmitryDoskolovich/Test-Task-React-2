import React from "react";
import "./MessageList.css";
import classNames from "classnames";
import MessageItem from "../MessageItem/MessageItem";

const MessageList = ({ className, data }) => {
  return (
    <div className={classNames("message-list", className)}>
      {data.map(item => (
        <MessageItem
          className="message-list__item"
          title={item["title"]}
          body={item["body"]}
          key={item["id"]}
        />
      ))}
    </div>
  );
};

export default MessageList;
