import Loadable from 'react-loadable';
import Loading from '@components/loading';

const timeout = 1000;

export const Top = Loadable({
    loader: () => import('@components/top'),
    loading: Loading,
    timeout: timeout,
});

export const Bottom = Loadable({
    loader: () => import('@components/bottom'),
    loading: Loading,
    timeout: timeout,
});