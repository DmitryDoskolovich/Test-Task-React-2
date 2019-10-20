import React from "react";
import "./MessageItem.css";
import classNames from "classnames";

const MessageItem = ({ className, body, title }) => {
  return (
    <div className={classNames("message-item", className)}>
      <div className="message-item__user-avatar">
        <div className="message-item__user-status-online"></div>
      </div>
      <div className="message-item__text-content">
        <div className="message-item__title-time-container">
          <p className="message-item__title">{title}</p>
          <time className="message-item__time" dateTime="11:20 AM">
            11:20 AM
          </time>
        </div>
        <p className="message-item__body">{body}</p>
      </div>
    </div>
  );
};

export default MessageItem;
