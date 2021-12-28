
import T from 'prop-types';

const FriendListItem = ({ name }) => {  
    return (
        <>name</>
    )
}


FriendListItem.propTypes = {
    name: T.string.isRequired 
};


export default FriendListItem;