import { CarContextProvider } from "../contexts/car";
import Home from "./home";

function App() {
    return (
        <CarContextProvider>
            <Home />
        </CarContextProvider>
    )
}

export default App