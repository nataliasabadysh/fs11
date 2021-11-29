
/*
const UserName = ({ username }) => {
    return <> {username}</>
}
const PostLike = ({ name }) => {
    return <> {name} +++++  <UserName username={name}/></>
}
const PostUserName = ({ name }) => {
    return <> {name}</>
}
const PostComment = ({ name }) => {
    return <> {name}</>
}
*/

export const UserProfile = ()=> {
    const name = 'Natasha';

    return(
        <>
            <h1>Profile: {name}</h1>
            {/* <PostLike name={name}/>
            <PostUserName name={name}/>
            <PostComment name={name}/> */}
        </>
    )
}