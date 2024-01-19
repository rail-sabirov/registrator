import { Dispatch, HTMLProps, SetStateAction } from 'react';

export interface AgencyEditProps extends HTMLProps<HTMLDivElement> {
    switchEditMode: Dispatch<SetStateAction<boolean>>;
}