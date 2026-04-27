import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

export default function Modal({ children}) {
    const ref = useRef(null);

    useEffect(() => {
        ref.current?.showModal();
    }, []);

    return createPortal(
        <dialog ref={ref} className={styles.modal}>
            {children}
        </dialog>,
        document.body
    );
}