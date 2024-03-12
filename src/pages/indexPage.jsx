import { Header } from "../components/HeaderComponent/HeaderComponent"
import { NavBar } from "../components/NavBarComponent/NavBarComponent"
import './rootDiv.css';


export const IndexPage = () => {
    return <>
    <div className="rootDiv">
    <NavBar/>
    <Header/>
    </div>
    </>
}