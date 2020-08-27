import { connect } from 'react-redux';
import { sendMessage } from '../../store/messages/actions';
import NewMessageContainer from './NewMessageContainer';

const mapStateToProps = ({ activeUser }) => ({ activeUser })

const mapDispatchToProps = {
  sendMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageContainer);