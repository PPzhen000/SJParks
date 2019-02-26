import React from 'react';
import NavButton from '../UI/Generic/NavButton';
import makeRequest from '../../utils/makeRequest';
import { NavContainer } from './styles';

function openNav() {
  document.getElementById('navbar').style.marginTop = '0px';
  document.getElementById('hid').style.display = 'block';
}

function closeNav() {
  document.getElementById('navbar').style.marginTop = '-400px';
  document.getElementById('hid').style.display = 'none';
}

class SideBar extends React.Component {
  state = {
    menuIcon: 'fa fa-bars',
    menu: false,
    active: 'Updates'
  };

  logout = async () => {
    const request = await makeRequest('/logout');
    if (request.status === 200) window.location.replace('/login');
  };

  toggleMenu = () => {
    if (this.state.menuIcon === 'fa fa-bars') {
      openNav();
      this.setState({
        menuIcon: 'fa fa-times',
        menu: true
      });
    } else {
      closeNav();
      this.setState({
        menuIcon: 'fa fa-bars',
        menu: false
      });
    }
  };

  toggleActive = name => {
    this.setState({
      active: { name }
    });
  };

  render() {
    const { active, menuIcon } = this.state;
    const { user } = this.props;

    return (
      <NavContainer>
        <div className="title">
          <h1>SJParks</h1>
          <p>Admin</p>
        </div>
        <div className="menuIcon" onClick={this.toggleMenu}>
          <i className={menuIcon} />
        </div>

        <div id="navbar">
          <ul>
            <li>
              <NavButton
                to={`/admin/${user._id}/updates`}
                name="Updates"
                action="updatePage"
                active={active}
                toggleActive={this.toggleActive}
              />
            </li>
            <li>
              <NavButton
                to={`/admin/${user._id}/parks`}
                name="Parks"
                action="parkPage"
                active={active}
                toggleActive={this.toggleActive}
              />
            </li>
            <li>
              <NavButton
                to={`/admin/${user._id}/users`}
                name="Users"
                action="userPage"
                active={active}
                toggleActive={this.toggleActive}
              />
            </li>
          </ul>
          <div className="logout">
            <NavButton
              onClick={this.logout}
              type="submit"
              name="Logout"
              action="logoutPage"
            />
          </div>
        </div>
        <div id="hid" onClick={this.toggleMenu} />
      </NavContainer>
    );
  }
}

export default SideBar;