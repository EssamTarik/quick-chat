import { connect } from 'react-redux';
import MessageListContainer from './MessageListContainer';

const mapStateToProps = ({ messages, activeUser }) => ({ messages, activeUser });

export default connect(mapStateToProps)(MessageListContainer);