import FriendCard from "./FriendCard"

function FriendList(){
    var arr = [1,2,3,4,5]
    return(
        <div className = 'friend-list'>
            {arr.map((idx) => (
                <FriendCard />
            ))}
        </div>
    )
}

export default FriendList