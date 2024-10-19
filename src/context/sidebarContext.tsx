'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

interface SidebarProviderProps {
    children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return <SidebarContext.Provider value={{ isMenuOpen, toggleMenu }}>{children}</SidebarContext.Provider>;
};

export const useSidebar = (): SidebarContextProps => {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error('useSidebar precisa ser usado dentro de um SidebarProvider');
    }

    return context;
};
