import { FC } from "react";
import { SmAvatar } from "../";
import "./sm-info.css";

export interface SmInfoProps {
  qlogo: string;
  name: string;
  qq: string;
}

export const SmInfo: FC<SmInfoProps> = ({ qlogo, name, qq }) => {
  return (
    <section className="sm-info-card sm-info-card__round">
      <SmAvatar url={qlogo} />
      <div className="sm-info-detail">
        <h4>{name}</h4>
        <span>{qq}</span>
      </div>
    </section>
  );
};
