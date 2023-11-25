import { ReactNode, InputHTMLAttributes } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  elementRight?: ReactNode,
}
