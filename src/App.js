
import React from "react";
import Contact from "./components/Contact";

export default function App() {
    return (
        <div className="contacts">
            <Contact name="Mr. Whiskerson" phone="123" email="cat@meow1.com"/>
            <Contact name="Mr. Whiskerson" phone="456" email="cat@meow2.com"/>
            <Contact name="Mr. Whiskerson" phone="789" email="cat@meow3.com"/>
            <Contact name="Mr. Whiskerson" phone="012" email="cat@meow4.com"/>
        </div>
    )
}