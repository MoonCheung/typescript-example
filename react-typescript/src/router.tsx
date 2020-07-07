import Drag from './views/Drag/index';
import Anime from './views/Anime/index';
import Counter from './views/Counter/index';
import DragHook from './views/DragHook/index';
import ProgressBar from './views/ProgressBar/index';

const routes = [
  {
    path: '/drag',
    main: Drag
  },
  {
    path: '/counter',
    main: Counter
  },
  {
    path: '/anime',
    main: Anime
  },
  {
    path: '/drags',
    main: DragHook
  },
  {
    path: '/progress',
    main: ProgressBar
  }
];

export default routes;
