import { FC } from "react";
import "./sm-avatar.css";

export interface SmAvatarProps {
  url: string;
  alt?: string;
}

export const SmAvatar: FC<SmAvatarProps> = ({ url, alt }) => {
  return (
    <div className="sm-avatar sm-avatar__round">
      <img src={url} alt={alt ? alt : ""} />
    </div>
  );
};
