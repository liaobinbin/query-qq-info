import { PropsWithChildren, FC } from "react";

export interface SmLoadingProps {
  show: boolean;
}

export const SmLoading: FC<PropsWithChildren<SmLoadingProps>> = ({
  show,
  children,
}) => {
  return (
    <>
      {show && <span>Loading...</span>}
      {!show ? children : null}
    </>
  );
};
