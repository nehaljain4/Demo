import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import RestorePageOutlinedIcon from '@material-ui/icons/RestorePageOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#fff',
    
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="#000000"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
      {['Home'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon> 
            <HomeIcon /> 
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
       {['BYJU\'S Classes'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon> 
            <LocalLibraryOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      {['Adaptive Practice Questions'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon> 
            <AssignmentOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      {['Chapter-Wise Tests'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon> 
            <CollectionsBookmarkOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      {['Ask a doubt'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon> 
            <AnnouncementOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      {['Revision'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon> 
            <RestorePageOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      {['Downloads'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon> 
            <GetAppOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      {['Popular Videos'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon> 
            <PlayCircleOutlineOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
      {['Bookmark'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon> 
            <BookmarkBorderOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
          
        })}
  
      >
        <div className={classes.drawerHeader} />
        
        <Typography paragraph >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        
      </main>
    </div>
  );
}
