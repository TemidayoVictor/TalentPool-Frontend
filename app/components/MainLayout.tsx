import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <div>
            <Header/>
                <div className="top-padding">
                    { children }
                </div>
            <Footer />
        </div>
    )
}

export default MainLayout