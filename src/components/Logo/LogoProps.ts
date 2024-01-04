import { AnchorHTMLAttributes } from 'react';

type LogoType = 'only-logo' | 'logo-and-name' | 'logo-main-layout';

export interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    type?: LogoType;
}