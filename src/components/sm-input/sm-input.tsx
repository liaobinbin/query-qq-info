import React, { FC } from "react";
import "./sm-input.css";

export interface SmInputProps {
  prefix?: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
}

export const SmInput: FC<SmInputProps> = ({
  prefix,
  onChange,
  value,
  error,
}) => {
  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="sm-input">
      {prefix && <span className="sm-input-prefix">{prefix}</span>}
      <input
        type="string"
        defaultValue={value}
        onChange={change}
        style={{ borderColor: error ? "red" : "#000" }}
      />
      {error && <span className="sm-input-error">{error}</span>}
    </div>
  );
};
