import React from "react";
import styles from "./Avatar.module.css";

//Different Users 
const IMAGE_SIZE = 48;

export function Avatar({ name, otherStyles }: { otherStyles: string; name: string }) {
  return (
    <div className={`${styles.avatar} ${otherStyles} h-9 w-9`} data-tooltip={name}>
      <img
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`}
        className={styles.avatar_picture}
        alt={name}
      />
    </div>
  );
}

export default Avatar