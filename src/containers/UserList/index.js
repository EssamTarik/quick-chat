import { connect } from 'react-redux';
import { setActiveUser } from '../../store/users/actions';
import UserListContainer from './UserListContainer';

const mapStateToProps = ({ users, activeUser }) => ({ users, activeUser });
const mapDispatchToProps = {
  setActiveUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);