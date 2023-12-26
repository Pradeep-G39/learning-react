const heading = React.createElement("h1",{id : "heading"},"Hello ", React.createElement("i",{},'Pradeep')," Good Morning!");

const parent = React.createElement(
    "div",
    {id : 'parent'},
    [React.createElement('div',{id : 'child1'},React.createElement("h1",{className : "heading"},'hello world!')),
    React.createElement('div',{id : 'child2'},
    React.createElement("h1",{className : "heading"},'hello world!'))]
    )
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);