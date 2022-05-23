import Search from "./Components/Search/Search";
import Weather from "./Components/Weather/Weather";

function App() {
    return (
        <div className="container">
            <div className={"wrapper"}>
                <Search/>
                <Weather/>
            </div>
        </div>
    );
}

export default App;
