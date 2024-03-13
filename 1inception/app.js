const heading = React.createElement("h1", {
    id: "heading", xyz: "abc"
}, "Namaste from React!!!");

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(heading);

/*
        <div id=parent>
            <div id=child1>
                <h1>im child 1's h1</h1>
                <h2>im child 2's h2</h2>
            </div>
            <div id=child2>
                <h1>im child 1's h1</h1>
                <h2>im child 2's h2</h2>
            </div>
        </div>
*/


const para = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child1" }, [
            React.createElement("h1", {}, "I'm child 1's h1"), React.createElement("h2", {}, "I'm child 1's h2")
        ]),

        React.createElement("div", { id: "child2" }, [
            React.createElement("h1", {}, "I'm child 2's h1"), React.createElement("h2", {}, "I'm child 2's h2")
        ])
    ]);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(para);


// const root = ReactDOM.createRoot(document.getElementsByName("body"))
