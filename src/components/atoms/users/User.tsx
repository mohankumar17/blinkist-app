import React from "react";

export type userType = {
  userId: number;
  userName: string;
  orderedBooks: Set<number>;
};
export let user: userType = {
  userId: 1,
  userName: "Mohan",
  orderedBooks: new Set(),
};

function User() {
  return <></>;
}

export default User;
