import { ReactNode, RefObject } from 'react';

export interface HeaderType {
  loc?: string;
}

export interface ModalRenderType {
  bodyNode?: ReactNode | JSX.Element | string;
  title?: string;
}

export type ToastIconType = 'success' | 'error' | 'info' | 'warning' | undefined;

export interface ToastRenderType {
  type?: ToastIconType;
  icon?: ReactNode | JSX.Element;
  content?: string | JSX.Element;
  title?: string;
}
