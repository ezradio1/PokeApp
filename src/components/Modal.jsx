import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import CloseIcon from '../assets/icon/close.svg';
import Button from '../components/Button';

const ModalBackDrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;
const ModalContentWraper = styled.div`
  z-index: 10000;
  position: fixed;
  width: 20vw;
  height: fit-content;
  background: #fff;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px 30px 30px;
  border-radius: 5px;

  @media (max-width: 960px) {
    width: 40vw;
  }

  @media (max-width: 480px) {
    width: 75vw;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ModalImg = styled.img`
  width: 150px;
`;
const ModalTitle = styled.div`
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin: 20px 0;
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
const Modal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    };
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          <ModalBackDrop>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: 0.3,
                },
              }}
            />
          </ModalBackDrop>
          <ModalContentWraper>
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                scale: 0,
                transition: {
                  delay: 0.3,
                },
              }}>
              <motion.div
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.3,
                  },
                }}
                exit={{
                  x: 100,
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}>
                <CloseButtonContainer>
                  <Button
                    onlyIcon={true}
                    icon={CloseIcon}
                    type='transparent'
                    onClick={() => setOpen(false)}
                  />
                </CloseButtonContainer>
                <ImgContainer>
                  <ModalImg src={props.image} />
                </ImgContainer>
                <ModalTitle>{props.title}</ModalTitle>
                {props.children}
              </motion.div>
            </motion.div>
          </ModalContentWraper>
        </>
      )}
    </AnimatePresence>
  );
});

export default Modal;
