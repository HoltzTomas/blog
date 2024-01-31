import { FC, ReactNode } from "react";

interface AnchorProperties {
    children: ReactNode;
    href: string;
}

export const ArticleAnchor: FC<AnchorProperties> = ({ children, href }) => {
    return (
        <a rel="noopener noreferrer" target="_blank" href={href} style={{ color: '#4770FF', textDecoration: 'underline' }}>
            {children}
        </a>
    );
};