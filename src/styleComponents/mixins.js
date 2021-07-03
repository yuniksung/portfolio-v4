export const flexCen = () => {
    return `
    display: flex;
    justify-content: center;
    align-items: center;
    `
}

export const listStyle = () => {
    return `
    list-style: none;
    padding: 5px 10px;
    `
}

export const listStyle2 = () => {
    return `
    list-style: none;
    padding: 5px 20px;
    `
}

export const anchorStyle = () => {
    return `
    text-decoration: none;
    color: $anchor-text;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
    `
}
export const sectionShadow = () => {
    return `
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .3);
    ${easeOut};

    &:hover{
        box-shadow: 0 3px 8px rgba(0, 0, 0, .1);
        
    }
    `
}
export const easeOut = () => {
    return `
    transition: ease-out 0.5s;
    `
}
export const sectionTitle = () => {
    return `
    font-size: 42px;
    text-transform: uppercase;
    color: #979797;
    `
}
export const sectionTitle2 = () => {
    return `
    width: 75%;
    margin: auto;
    text-align: end;
    padding: 2em;
    text-transform: uppercase;
    font-size: 45px;
    color: #cfb776;
    letter-spacing: 5px;
    `
}

export const SourceSans = () => {
    return `font-family: 'Source Sans Pro', sans-serif;`
}

export const OpenSans = () => {
    return `font-family: 'Open Sans', sans-serif;`
}