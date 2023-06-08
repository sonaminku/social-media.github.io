import React from "react";
import Avatar from "./Avatar";

const FriendInfo = () => {
  return (
    <div className="flex gap-2">
      <Avatar />
      <div>
        <h3 className="font-bold text-xl">Jane Doe</h3>
        <div className="text-sm leading-3">5 mutual friends</div>
      </div>
    </div>
  );
};

export default FriendInfo;
