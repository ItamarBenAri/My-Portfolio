import "./FloatingButton.css";
import { Action, Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { Add, Call, Sms, WhatsApp } from "@mui/icons-material";
import { useState } from "react";

export function FloatingButton(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const closeBtn = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <div className="FloatingButton">
            <Fab
                mainButtonStyles={{ backgroundColor: "#1976D2" }}
                style={{ bottom: 84 }}
                icon={<div className="iconWrapper" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <Add fontSize="large" /> : <Sms sx={{ transform: "scaleX(-1)" }} />}</div>}
                text={isOpen ? "Close" : "Contact me"}
                event="click"
            >
                <a href="https://wa.me/548806891?text=Hello!+Contact+me+please." rel="noreferrer" target="_blank" onClick={closeBtn}>
                    <Action
                        about="Send whatsapp message"
                        text="Whatsapp"
                        style={{ backgroundColor: "#25D366", marginLeft: "45px" }}
                    >
                        <WhatsApp fontSize="large" />
                    </Action>
                </a>
                <a href="tel:054-880-6891" rel="noreferrer" target="_blank" onClick={closeBtn}>
                    <Action
                        about="Make a phone call"
                        text="Call"
                        style={{ backgroundColor: "rgb(25, 118, 210)", marginLeft: "45px" }}
                        onClick={closeBtn}
                    >
                        <Call fontSize="large" />
                    </Action>
                </a>
            </Fab>
        </div>
    );
}
