import Pages9Header from "./pages9-header";
import Pages9Container from "./pages9-container";
import Pages9Footer from "./pages9-footer";
import { useState } from "react";

import { LanguageProvider } from "./languageContext";




export default function Pages9() {
    
    
    return (
        <LanguageProvider>
            <div className="pages9">            
                <Pages9Header/>
                <Pages9Container/>
                <Pages9Footer/>
            </div>   
        </LanguageProvider>
    );
}