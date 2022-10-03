import { useContext, useState } from 'react';

//project imports
import AppContext from 'contexts/AppContext';
import Login from './Login';
import Register from './Register';
import Modal from 'ui-component/Modal';

//material ui
// import { Tabs, Tab } from '@mui/material';

// type Tabs = {
//     tab: number;
//     setTab: React.Dispatch<React.SetStateAction<number>>;
// };

const Auth = () => {
    const { authModal, setAuthModal } = useContext(AppContext);
    // const [tab, setTab] = useState('login');
    const [isLoading, setIsLoading] = useState(false);
    // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //     setTab(newValue);
    // };
    const handleClose = () => {
        setAuthModal(null);
    };

    return (
        <>
            <Modal
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                isOpen={authModal === 'register' ? true : false}
                handleClose={handleClose}
            >
                <>
                    <Login />
                    <Register />
                </>
            </Modal>
        </>
    );
};

export default Auth;
