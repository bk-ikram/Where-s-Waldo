import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

export default function Modal({ children, isOpen }) {
    const ref = useRef(null);

    useEffect(() => {
        if (isOpen) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [isOpen]);

    return createPortal(
        <dialog ref={ref} className={styles.modal}>
            {children}
        </dialog>,
        document.body
    );
}