import { HTMLAttributes, ReactNode } from 'react';

export interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}