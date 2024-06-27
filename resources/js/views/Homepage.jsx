import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/Contents/MainContent";
import ListContent from "./components/Contents/ListContent";

export default function Homepage() {
    return (
        <div>
            <Navbar />
            <MainContent />
            <ListContent />
        </div>
    );
}
