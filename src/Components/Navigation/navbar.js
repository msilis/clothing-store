import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import nncLogo from '../../Media/favicon_io/NNCLogo.png';
import './navbar.css';
import { Link } from 'react-router-dom'


const loginButton = 'Sign In'
const loggedIn = 'Account'

function NavigationBar(props){
    const isLoggedIn = props.loggedIn
    const loginClick = props.loginClick
    console.log(props.loggedIn)

    
    return(
        <Navbar bg='light' sticky='top' className='navbar-main'>
            <Navbar.Brand>
                <Link to="/" className='text-decoration-none' >
                <img src={nncLogo} className="logo"/>
                {'  '}
                No-Name Clothing</Link></Navbar.Brand>
                <Navbar.Collapse className='justify-content-end'>
            <Nav className="nav_list" >
                <Link to="../Pages/products" className='text-decoration-none nav-list-item'>Products </Link>
                <Link to="../Pages/about" className='text-decoration-none nav-list-item'>About</Link>
            </Nav>
            <Button onClick={loginClick}>{isLoggedIn? loggedIn : loginButton }</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;

