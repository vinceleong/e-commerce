import { ReactNode } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, Transition } from "framer-motion";
import useMediaQuery from "hooks/useMediaQuery";

interface props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<props> = ({ children, open, onClose }) => {
  const transition: Transition = {
    type: "spring",
    stiffness: 100,
    mass: 0.4,
    damping: 12
  }

  const isMd = useMediaQuery("md");


  return (
    <AnimatePresence>{
      open && <Root onClick={onClose}
        {...!isMd && {
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
          exit: {
            opacity: 0,
          }
        }
        }
        transition={transition}
      >
        <motion.div
          {...!isMd && {
            initial: {
              y: 500
            },
            animate: {
              y: 0
            },
            exit: {
              y: 500
            }
          }
          }
          className="content" onClick={(e) => e.stopPropagation()}
        >
          {children}
        </motion.div>
      </Root>

    }

    </AnimatePresence>

  );
};

const Root = styled(motion.div)(p => `
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.2rem);
  webkit-backdrop-filter: blur(0.2rem);
  ${p.theme.size.md(`
    justify-content: center;
  `)}

  .content {
    z-index: 20;
    background-color: white;
    padding: 1rem;
    border-radius: ${p.theme.borderRadius.lg} ${p.theme.borderRadius.lg} 0 0;
    width: 100%;
    max-height: 80%;
    min-height: 40%;
    overflow: auto;
    ${p.theme.size.md(`
      width: auto;
      max-height: auto;
      min-height: auto;
      border-radius: ${p.theme.borderRadius.lg};
    `)}
  }
`
);

export default Modal;
