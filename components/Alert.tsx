import React from "react";
import create from "zustand";
import Modal from "./Modal";

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
        {content}
        <button>OK</button>
    </Modal>
}

export default Alert;



