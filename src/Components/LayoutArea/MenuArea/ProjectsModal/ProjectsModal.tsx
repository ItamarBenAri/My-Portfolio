import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import { AccountTree, AdsClick } from '@mui/icons-material';
import "./ProjectsModal.css";
import { Divider } from '@mui/material';
import AppComponentsStyle from '../../../../Theme/AppComponentsStyle';
import { ProjectsMenu } from '../ProjectsMenu/ProjectsMenu';

export function ProjectsModal(): JSX.Element {
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <div className="ProjectsModal">
            <React.Fragment>
                <Stack direction="row" spacing={1}>
                    <Button
                        variant="plain"
                        color="neutral"
                        onClick={() => setOpen(true)}
                    >
                        <span className="modalBtn">View Projects</span> &nbsp;<AdsClick />
                    </Button>
                </Stack>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <ModalDialog>
                        <ModalClose />
                        <DialogTitle><AccountTree />Select Project</DialogTitle>
                        <Divider variant='middle' />
                        <DialogContent>
                            <div onClick={() => setOpen(false)}>
                                <ProjectsMenu style={AppComponentsStyle.modalMenu}/>
                            </div>
                        </DialogContent>
                    </ModalDialog>
                </Modal>
            </React.Fragment>
        </div>
    );
}

export default ProjectsModal;
