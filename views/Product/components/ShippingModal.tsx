import create from "zustand";
import styled from "styled-components";

import Modal from "components/Modal";

interface State {
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
}

export const useShippingModal = create<State>(set => ({
    open: false,
    handleOpen: () => set({
        open: true,
    }),
    handleClose: () => set({
        open: false,
    }),
}))

const ShippingModal: React.FC = () => {
    const open = useShippingModal(state => state.open);
    const handleClose = useShippingModal(state => state.handleClose);

    return <Modal open={open} onClose={handleClose}>
        <Root>
            <h5>Shipping Fees Information</h5>
            <DataRow>
                <span>POS Laju</span>
                <span>RM1.90 - RM4.90</span>
            </DataRow>
            <DataRow>
                <span>Receive by</span>
                <span>6 - 11 Aug</span>
            </DataRow>
            <div>RM3.00 off shipping</div>
        </Root>
    </Modal>
}

const Root = styled.div(({ theme }) => `
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    ${theme.size.md(`
        width: 400px;
        height: 200px;
    `)}
`)

const DataRow = styled.div`
    display: flex;
    justify-content: space-between;
`

export default ShippingModal;