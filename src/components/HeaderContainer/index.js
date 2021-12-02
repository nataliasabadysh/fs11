// Components
import { Navigation } from "../Navigation";
import { Search } from "../Search";
import Logo from "../Logo";
// Instruments 
import { wrapper } from "./inlineStyleExample";

export const Header = ({ count, onSearch })=> {
    return (
        <div style={wrapper}>
            <Logo />
            <Search onSearch={onSearch} />
            <Navigation count={count}/>
        </div>
    )
}