// Components
import { Navigation } from "../Navigation";
import { Search } from "../Search";
import Logo from "../Logo";
// Instruments 
import { wrapper } from "./inlineStyleExample";

export const Header = ({ onSearch, selectedGood, onDelete })=> {
    return (
        <div style={wrapper}>
            <Logo />
            <Search onSearch={onSearch} />
            <Navigation selectedGood={selectedGood} onDelete={onDelete}/>
        </div>
    )
}