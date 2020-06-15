import React, { FC } from 'react';

export interface ButtonProps {
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
