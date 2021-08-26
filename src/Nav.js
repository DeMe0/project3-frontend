import React from 'react'
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faWallet, faStore, faUsers, faCartArrowDown} from '@fortawesome/free-solid-svg-icons';

const tabs = [{
    route: "/menu",
    icon: faTable,
    label: "Menu"
  },{
    route: "/offers",
    icon: faWallet,
    label: "Offers"
  },
  {
    route: "/",
    icon: faStore,
    label: "Home"
  },
   {
    route: "/about",
    icon: faUsers,
    label: "About"
  },{
    route: "/cart",
    icon: faCartArrowDown,
    label: "Cart"
  }]

const Navigation = () => {
    return (
        <div className="nav">
           <nav className="navbar fixed-bottom navbar-light bottom-tab-nav" role="navigation">
            <Nav className="w-100">
          <div className="d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) =>(
                <NavItem key={`tab-${index}`}>
                  <NavLink to={tab.route} className="nav-link" activeClassName="active">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <div className='navicons'>
                      <FontAwesomeIcon className="icon" icon={tab.icon}/>
                      {tab.label}
                      </div>
                      
                      
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
        </nav>
        </div>
    )
}

export default Navigation