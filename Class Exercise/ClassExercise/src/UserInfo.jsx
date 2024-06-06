import Avatar from "./Avatar";

function UserInfo(props) {
  return (
    <div className="UserInfo">
      {" "}
      <Avatar avatar={props.avatarUrl}></Avatar>
      {/* the user info is one aspect of the comment */}
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  );
}
export default UserInfo;
