import { useState } from "react";
import {AnimatePresence, motion} from 'framer-motion';

export default function OffCanvas({children}){
    const [isOpen, setIsOpen] = useState(false);

    return <>
        {isOpen && (<SideModal handleClose={() => setIsOpen(false)} />)}
         {children}
        <button
            className="offCanvas-open-btn"
            onClick={() => setIsOpen(true)}
        >Open OffCanvas</button>
    </>;
}

function SideModal({handleClose}){
    return (
      <div className="side-modal" onClick={handleClose}>
        <AnimatePresence>
          <motion.div
            className="side-bar"
            initial={{ width: 0, opacity: 0}}
            animate={{ width: "300px", opacity: 1}}
            exit={{ width: 0, opacity: 0}}
            transition={{duration: 0.4}}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button className="side-bar-exit-btn" onClick={handleClose}>
                X
            </button>
            <p className="side-bar-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    );
}