import Projets from "../Projets";

const App = () => {
    return (
        <>
            <div className="container">
                <h1>GitHub API</h1>
                <div id="repos">
                    <Projets />
                </div>
            </div>
        </>
    );
};

export default App;