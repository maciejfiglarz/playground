import store from 'store';
import { Provider } from 'react-redux';
import {
    QueryClient,
    QueryClientProvider
} from 'react-query';

import { CssBaseline, StyledEngineProvider } from '@mui/material';
// import { ThemeProvider, Theme } from '@mui/material/styles';
//import project
import { AppContextProvider } from 'contexts/AppContext';
import { JWTContextProvider } from 'contexts/JWTContext';

// routing
import Routes from 'routes';

// load mock apis
import '_mockApis';

// ==============================|| APP ||============================== //

const queryClient = new QueryClient();

const App = () => (
    <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <CssBaseline />
                <JWTContextProvider>
                    <AppContextProvider>
                        <Routes />
                    </AppContextProvider>
                </JWTContextProvider>
            </Provider>
        </QueryClientProvider>
    </StyledEngineProvider>
);

export default App;
