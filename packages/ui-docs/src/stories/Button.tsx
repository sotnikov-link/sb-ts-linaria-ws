import React, { FC, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren<{}> {
  children: React.ReactNode;

  /**
   * Simple click handler
   */
  onClick?: React.MouseEventHandler;
}

/**
 * The world's most _basic_ button
 */
export const Button: FC<ButtonProps> = ({
  children,
  onClick = () => {},
}: ButtonProps) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);
