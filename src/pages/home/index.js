import Loadable from 'react-loadable';
import Loader from '~/components/loader';

export default Loadable({
  loader: () => import('./Home'),
  loading: Loader,
});
