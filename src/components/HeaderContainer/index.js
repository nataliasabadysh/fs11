// Components
import { Navigation } from "../Navigation";
import { Search } from "../Search";
import Logo from "../Logo";
// Instruments 
import { wrapper } from "./inlineStyleExample";


export const Heeader = ()=> {
    return (
        <div style={wrapper}>
            <Logo />
            <Search />
            <Navigation/>
        </div>
    )
}