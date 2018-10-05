import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
})

export default connect(mapStateToProps, null)(Splash);