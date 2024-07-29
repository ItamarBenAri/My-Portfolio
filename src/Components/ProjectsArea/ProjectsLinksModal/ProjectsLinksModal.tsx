import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import { NavLink } from "react-router-dom";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";
import { AccountTree, AdsClick } from '@mui/icons-material';
import "./ProjectsLinksModal.css";
import { Divider } from '@mui/material';
import { myProjects } from '../../../Constants/MyProjects';

export function ProjectsLinksModal(): JSX.Element {
    const [open, setOpen] = React.useState<boolean>(false);
    const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
    return (
        <div className="ProjectsLinksModal">
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
                            <div style={AppComponentsStyle.modalMenu}>
                                {myProjects.map(p => (
                                    <NavLink
                                        key={p.id}
                                        end
                                        to={p.projectLink.link}
                                        style={({ isActive }) => AppComponentsStyle.getLinkStyle(isActive, hoveredLink === p.name)}
                                        onMouseEnter={() => setHoveredLink(p.name)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        onClick={()=> setOpen(false)}
                                    >
                                        {p.projectLink.icon} {p.name}
                                    </NavLink>
                                ))}
                            </div>
                        </DialogContent>
                    </ModalDialog>
                </Modal>
            </React.Fragment>
        </div>
    );
}

export default ProjectsLinksModal;
