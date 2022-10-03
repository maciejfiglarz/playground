import { useState } from 'react';

//project imports
import CreatePost from './Post';
import CreateGraphic from './Graphic';
import Modal from 'ui-component/Modal';
import Navigation from './Navigation';

//material ui
import { Button } from '@mui/material';

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// interface InitialState {
//     type: number
// }

// const initialState:InitialState = {
//     type: 0
// };

const Create = ({ isOpen, setIsOpen }: Props) => {
    const [tab, setTab] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };
    const saveForm = async () => {};
    return (
        <Modal
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isOpen={isOpen}
            handleClose={handleClose}
            size="md"
            title="Dodaj"
        >
            <>
                <Navigation tab={tab} setTab={setTab} />

                {/* <Box
                component="form"
                sx={
                    {
                        // '& .MuiTextField-root': { m: 1 }
                    }
                }
                noValidate
                autoComplete="off"
            > */}
                {tab === 0 && <CreatePost />}
                {tab === 1 && <CreateGraphic />}

                <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={saveForm}
                >
                    Opublikuj
                </Button>
            </>
        </Modal>
    );
};

export default Create;
