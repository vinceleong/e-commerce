import React from "react";
import create from "zustand";
import Modal from "./Modal";

import styled, { ThemeProps } from "styled-components";

type alertType = "success" | "failure";
interface config {
    type: alertType
}

interface state {
    open: boolean;
    type: alertType;
    content: string;
    openAlert: (content: string, config: config) => void;
    handleClose: () => void;
}


export const useAlert = create<state>(set => ({
    open: false,
    content: "",
    type: "success",
    openAlert: (content, { type }) =>
        set({
            open: true,
            type: type ?? "success",
            content,
        }),
    handleClose: () =>
        set({
            open: false,
            type: "success",
            content: ""
        }),


}));

const Alert: React.FC = () => {
    const content = useAlert((state) => state.content);
    const open = useAlert((state) => state.open);
    const handleClose = useAlert((state) => state.handleClose);

    return <Modal open={open} onClose={handleClose}>
        <Root>
            <div>
                {content}
            </div>
            <div className="action-btn-container">
                <button className="action-btn" onClick={handleClose}>OK</button>
            </div>
        </Root>
    </Modal>
}

const Root = styled.section(({ theme }) => `
    padding: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 1rem;
    align-items: center;

    ${theme.size.md(`
        row-gap: 3rem;
    `)}

    .action-btn-container {
        padding: 0.5rem;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        ${theme.size.md(`
            position: relative;
            padding: 0;
        `)}
    }

    .action-btn {
        width: 100%;
    }
`)



export default Alert;



