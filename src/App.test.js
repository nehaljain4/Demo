import { render, screen } from '@testing-library/react';
import App from './App';
import Drawer from '@material-ui/core/Drawer';
import "@testing-library/jest-dom/extend-expect";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import RestorePageOutlinedIcon from '@material-ui/icons/RestorePageOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nehal/i);
  expect(linkElement).toBeInTheDocument();
});
it('should render',() => {
  render(<PhoneIphoneIcon/>)
});
it('should render',() => {
  render(<AccountCircleIcon/>)
});
it('should render',() => {
  render(<HomeIcon/>)
});
it('should render',() => {
  render(<LocalLibraryOutlinedIcon/>)
});
it('should render',() => {
  render(<AssignmentOutlinedIcon/>)
});
it('should render',() => {
  render(<BookmarkBorderOutlinedIcon/>)
});
it('should render',() => {
  render(<PlayCircleOutlineOutlinedIcon/>)
});
it('should render',() => {
  render(<RestorePageOutlinedIcon/>)
});
it('should render',() => {
  render(<GetAppOutlinedIcon/>)
});
it('should render',() => {
  render(<AnnouncementOutlinedIcon/>)
});
it('should render',() => {
  render(<CollectionsBookmarkOutlinedIcon/>)
});
it('should render',() => {
  render(<Drawer/>)
});

// just for practice snapshot testing
it('will check the matchers and pass', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
  });
});

// Snapshot
exports[`will check the matchers and pass 1`] = `
Object {
  "createdAt": Any<Date>,
  "id": Any<Number>,
  "name": "LeBron James",
}
`;