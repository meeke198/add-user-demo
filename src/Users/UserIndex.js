import Card from '../UI/Card';
import classes from './UserIndex.module.css'
const UserIndex = (props) => {

return (
  <Card className={classes.users}>
    <ul>
      {props.data.map((user) => (
        <li key={user.userName}>
          {user.userName} {user.age} year(s) old
        </li>
      ))}
    </ul>
  </Card>
);
}

export default UserIndex;