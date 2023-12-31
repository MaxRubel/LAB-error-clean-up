import '../styles/main.scss';
import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/sortingBtn';
import events from '../components/events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};
startApp();
