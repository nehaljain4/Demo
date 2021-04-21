import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import get from 'lodash/get';
import filter from 'lodash/filter';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import Hidden from '@material-ui/core/Hidden';
import Images from './Images/logo.svg';


const styleSheet = (theme) => ({
  appBar: {
    transition: theme.transitions.create('width'),
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    // boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.05), 0 4px 4px 0 rgba(0, 0, 0, 0.12)',
    borderBottom: 'none',
    paddingLeft: '0px'
  },
  downloadBlock: {
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: '#ececec',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12
  },
  closeIcon: {
    width: 20,
    height: 20,
    color: '#999999'
  },
  toolBar: {
    justifyContent: 'space-between'
  },
  logoIcon: {
    width: 140,
    height: 40,
    objectFit: 'contain'
  },
  navIconClassName: {
    padding: 0
  },
  [theme.breakpoints.up('lg')]: {
    appBar: {
      height: 80,
      display: 'flex',
      justifyContent: 'center',
      boxShadow: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.2)'
    },
    drawer: {
      width: '280px',
      marginTop: '80px'
    },
    appBarShift: {
      // width: 'calc(100% - 280px)',
    },
    navIconHide: {
      display: 'none'
    },
    title: { padding: '0px' },
    navIconClassName: {
      padding: 0,
      marginRight: 24,
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: 'transparent'
      },
      '&:focus': {
        textDecoration: 'none',
        backgroundColor: 'transparent'
      }
    }
  },
  [theme.breakpoints.down('sm')]: {
    grow: {
      flex: 'unset'
    },
    logoIcon: {
      width: 90,
      height: 24,
      objectFit: 'contain'
    },
    smHeader: {
      display: 'none'
    },
    install: {
      borderRadius: 4,
      backgroundColor: '#89308e',
      display: 'flex',
      alignItems: 'center'
    },
    installText: {
      fontFamily: 'RobotoMedium',
      fontSize: 12,
      fontWeight: 500,
      color: '#ffffff',
      margin: '7px 15px'
    },
    instructionText: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 7
    },
    downloadText: {
      fontFamily: 'RobotoMedium',
      fontSize: 12,
      fontWeight: 500,
      color: '#000000'
    },
    trialText: {
      fontFamily: 'RobotoRegular',
      fontSize: 10,
      color: '#666666',
      marginTop: 5
    },
    block: {
      display: 'flex',
      alignItems: 'center'
    },
    headerLogo: {
      marginLeft: 12,
      width: 36,
      height: 36
    }
  }
});

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openProfile: false,
      openDownloadApp: false
    };
  }

  handleRequestClose = () => {
    this.setState({ openProfile: false });
  };


  render() {
    const {
      classes,
      drawerDocked,
      expert,
      to = '/home/dashboard',
      user,
      showHeader = true,
      currentCohort,
      showMenuIcon = true
    } = this.props;
    const navIconClassName = classNames(classes.navIconClassName, {
      [classes.navIconHide]: drawerDocked
    });
    const appBarClassName = classNames(classes.appBar, {
      [classes.appBarShift]: drawerDocked
    });
    const titleLogo = drawerDocked ? Images.logo : Images.logo;
    const logoWidth = drawerDocked ? 151 : 30;
    let headerStyle = '';
    if (showHeader) {
      headerStyle = classes[`${showHeader}Header`] || '';
    }
    const { display_name: gradeName = '' } = (
      <h5>8th Grade</h5>
    );
    const userData = get(user, 'user') || { user_profiles: [] };
    const userProfiles =
      filter(userData.user_profiles, { app: { id: 4 } }) || [];
    const avatar = get(userProfiles, '0.avatar') || Images.logo;
    let isVisible = get(user, 'isAppBarVisible') || false;
   
    return (
      <div>
        {showHeader ? (
          <AppBar className={`${appBarClassName} ${headerStyle}`}>
            {!isVisible && (
              <Hidden mdUp>
                <div className={classes.downloadBlock}>
                  <div className={classes.block}>
                    <CloseIcon
                      className={classes.closeIcon}
                      onClick={this.props.close()}
                    />
                    <img
                      width={logoWidth}
                      src={titleLogo}
                      className={classes.headerLogo}
                      alt="titleLogo"
                    />
                    <div className={classes.instructionText}>
                      <div className={classes.downloadText}>Download App.</div>
                    </div>
                  </div>
                  <div className={classes.install}>
                    <div
                      className={classes.installText}
                      onClick={this.handleInstallClick}
                    >
                      Install
                    </div>
                  </div>
                </div>
              </Hidden>
            )}
            <Toolbar className={classes.toolBar}>
              {showMenuIcon && (
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  classes={{
                    root: classes.navIconClassName
                  }}
                  onClick={
                    this.props.handleDrawerToggle &&
                    this.props.handleDrawerToggle.bind(this, 'hamBurger')
                  }
                  className={navIconClassName}
                >
                  {/* <HamburgerMobile /> */}
                </IconButton>
              )}
              {
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  
                  to={to}
                  onClick={
                    this.props.handleDrawerToggle &&
                    this.props.handleDrawerToggle.bind(this, 'titleLogo')
                  }
                  className={classes.title}
                >
                  <img
                    width={logoWidth}
                    className={classes.logoIcon}
                    src={Images.logo}
                    alt="titleLogo"
                  />
                </IconButton>
              }
              {drawerDocked && <div className={classes.grow} />}
              {!expert && (
                <Button
                  classes={{
                    root: classes.listMenu
                  }}
                  onClick={this.handleClickDownloadApp}
                  style={{ minWidth: '30px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {drawerDocked ? (
                      <img
                        src={Images.phoneIcon}
                        style={{ marginRight: '8px' }}
                        alt="phoneIcon"
                      />
                    ) : (
                      <a
                        // href={AppConfig.downloadLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {' '}
                        <img
                          src={Images.phoneIcon}
                          style={{ marginRight: '8px' }}
                          alt="phoneIcon"
                        />{' '}
                      </a>
                    )}
                    {drawerDocked && (
                      <span className={classes.icons}>DOWNLOAD APP</span>
                    )}
                  </div>
                </Button>
              )}
              {(drawerDocked || expert) && (
                <ListItem
                  button
                  classes={{
                    root: classes.listMenu
                  }}
                  aria-haspopup="true"
                  aria-controls="profile-menu"
                  onClick={this.handleClick}
                >
                  <ListItemText
                    style={{ textAlign: 'right', padding: '0 16px' }}
                    primary={
                      <div
                        className={`${classes.primary} ${
                          this.state.openProfile ? classes.btnActive : ''
                        }`}
                      >
                        {userData.full_name || ''}
                      </div>
                    }
                    secondary={
                      <span
                        className={classes.secondary}
                        dangerouslySetInnerHTML={{ __html: gradeName }}
                      />
                    }
                  />
                  <Avatar
                    classes={{
                      root: classes.avatarRoot
                    }}
                    src={avatar}
                  />
                  {this.state.openProfile ? (
                    <ArrowDropUpIcon style={{ color: '#666666' }} />
                  ) : (
                    <ArrowDropDownIcon style={{ color: '#666666' }} />
                  )}
                </ListItem>
              )}
              <Menu
                id="profile-menu"
                anchorEl={this.state.anchorEl}
                open={this.state.openProfile}
                classes={{ paper: classes.menuRoot }}
                MenuListProps={{
                  style: {
                    width: 200
                  }
                }}
                onClose={this.handleRequestClose}
              >
                {
                  // <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
                  // <MenuItem onClick={this.handleRequestClose}>Settings</MenuItem>
                }
                <MenuItem onClick={this.handleProfileClick}>Profile</MenuItem>
                <MenuItem onClick={this.handleRequestLogout}>Logout</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        ) : null}
      </div>
    );
  }
}


;

export default 
  withStyles(styleSheet)
  (AppHeader);
