import { Suspense } from 'react';

// project imports
import Loader, { LoaderProps } from './loaders/Bar';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component: any) => (props: LoaderProps) => {
    // console.log(typeof Component);
    return (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    );
};

export default Loadable;
