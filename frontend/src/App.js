import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen'
import { Container } from "react-bootstrap";

function App() {
    return (
        <div>
            <Header />
            <Container>
                <main className="py-3">
                    <HomeScreen/>
                </main>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
