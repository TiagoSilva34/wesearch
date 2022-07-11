import { CarContextProvider } from "./car";
import Home from "./home";

function App() {
    return (
        <CarContextProvider>
            <Home />
        </CarContextProvider>
    )
}

export default App