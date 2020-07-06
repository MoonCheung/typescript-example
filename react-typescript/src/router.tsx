import Drag from './views/Drag/index';
import Anime from './views/Anime/index';
import Counter from './views/Counter/index';
import DragHook from './views/DragHook/index';

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
  }
];

export default routes;
