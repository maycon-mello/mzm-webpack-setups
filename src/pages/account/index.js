import React from "react";
import Loadable from 'react-loadable';
import Loader from '~/components/loader';

export default Loadable({
  loader: () => import('./Account'),
  loading: Loader,
});
