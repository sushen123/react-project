import React from "react";
 export const reactElement = {
    type: 'a',
    prop: {
        href: "https://www.google.com",
        target: '_blank',
        children: "Click here to visit google.com"
    }
}


 export function CreatElement({element})  {
    const {type, prop} = element;
    const { children, ...attributes} = prop

    return React.createElement(type,attributes,children)
     
}

