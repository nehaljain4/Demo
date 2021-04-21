import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
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
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  
  });
export default function Test(){

const classes = useStyles();
const [state, setState] = React.useState({
  left: false,
  
});

const toggleDrawer = (anchor, open) => (event) => {
  if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
  <div
    className={clsx(classes.list, {
      [classes.fullList]: anchor === 'top' || anchor === 'bottom',
    })}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
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
    
  </div>
);

return (
  <div>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    
    {['left'].map((anchor) => (
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
    ))}
  </div>
);
}
