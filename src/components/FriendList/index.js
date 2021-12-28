import FriendListItem from "./FriendItem";
// FETCH GET 
import Type from 'prop-types';

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
    {name: 'Page B', uv: 200, pv: 1000, amt: 2400}
]; // Currect api data 



export const FriendList  = ({ friends, name="Defaul name"}) => (
    <ul >
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />

            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    </ul>
);

FriendList.propTypes = {
    friends: Type.arrayOf(
        Type.shape({
            avatar: Type.string.isRequired,
            name: Type.string.isRequired,
            isOnline: Type.bool.isRequired,
            id: Type.number.isRequired,
        }).isRequired
    ),
    name: Type.string,
};

export default FriendList;