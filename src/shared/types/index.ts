import { ReactNode } from "react";

export interface RenderIfType {
    children: ReactNode,
    conditions: ReactNode,
    renderelse: ReactNode
};
