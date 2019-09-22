import React from 'react';
import { Sidebar, Icon, Sidenav, Nav, Dropdown, Navbar, Avatar } from 'rsuite';
import ges from './../../assets/img/gest1.png';
import { Link } from 'react-router-dom';

  const iconStyles = {
    width: 56,
    height: 56,
    lineHeight: '56px',
    textAlign: 'center'
  };

  const navcolor = 'white';

const NavToggle = ({ expand, onChange }) => {
    const valw = expand ? 260 : 56;
    return (
      <Navbar appearance="subtle" className="nav-toggle" style={{backgroundColor: navcolor,position: 'absolute',
      bottom: 0,
      width:valw }}>
        <Navbar.Body>
          <Nav>
            <Dropdown
              placement="topStart"
              trigger="click"
              renderTitle={children => {
                return <Icon style={iconStyles} icon="cog" />;
              }}
            >
              <Dropdown.Item>Help</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </Nav>
  
          <Nav pullRight>
            <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
              <Icon icon={expand ? 'angle-left' : 'angle-right'} />
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  };

  
export default class NavBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          expand: true
        };
        this.handleToggle = this.handleToggle.bind(this);
      }

    handleToggle() {
        this.setState({
          expand: !this.state.expand
        });
      }

    goTo = (link) =>{
        this.props.history.push(link);
    }

    render() {
        const { expand } = this.state;
        return (
            <Sidebar
                style={{ display: 'flex', flexDirection: 'column',backgroundColor: navcolor }}
                width={expand ? 260 : 56}
                collapsible>

                    <Sidenav.Header>
                    <div style={headerStyles}>
                        <Avatar className="navbar-brand logo" src={ges} circle style={{marginLeft: '-10px',marginTop:'-10px'}}/>
                        <span style={{ marginLeft: 12 ,position: 'relative',top: '-12px',}}> GestionaH</span>
                    </div>
                </Sidenav.Header>

                <Sidenav
                    expanded={expand}
                    style={{backgroundColor: navcolor}}
                    defaultOpenKeys={['3']}
                    appearance="subtle">
                        <Sidenav.Body>
                            <Nav>
                                <Nav.Item onClick={()=>this.goTo('/home')} eventKey="1" active icon={<Icon icon="dashboard" />}>
                                    Dashboard
                                </Nav.Item>

                                <Nav.Item onClick={()=>this.goTo('/admin')} as={Link} to="/admin" eventKey="2" icon={<Icon icon="peoples" />}>
                                    Admin
                                </Nav.Item>

                                <Nav.Item onClick={()=>this.goTo('/companies')} eventKey="2" icon={<Icon icon="industry" />}>
                                    Companies
                                </Nav.Item>

                                <Nav.Item eventKey="2" onClick={()=>this.goTo('/currencies')} icon={<Icon icon="money" />}>
                                    Currencies
                                </Nav.Item>

                                <Nav.Item eventKey="2" onClick={()=>this.goTo('/plans')} icon={<Icon icon="order-form" />}>
                                    Plans
                                </Nav.Item>

                                <Nav.Item eventKey="2" onClick={()=>this.goTo('/types')} icon={<Icon icon="tag" />}>
                                    Company Types
                                </Nav.Item>

                                <Nav.Item eventKey="2" onClick={()=>this.goTo('/logs')} icon={<Icon icon="project" />}>
                                    Logs
                                </Nav.Item>
                            </Nav>
                        </Sidenav.Body>
                </Sidenav>
                <NavToggle expand={expand} onChange={this.handleToggle} />
              </Sidebar>
        );
    }
}

const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  };