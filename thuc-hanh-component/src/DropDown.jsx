import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const actions = [
    "Profile",
    "Cài đặt",
    "Đâng suất"
]

export default function DropDown(){
    const [isExpand, setIsExpand] = useState(false);
    const actionElements = actions.map((action,index) => <li key={index} onClick={()=>setIsExpand(false)}>{action}</li>)
    return (
      <>
        <div className="dropDown-container">
          <button
            className="dropDown-btn"
            onClick={() => {
              setIsExpand(!isExpand);
            }}
          >
           <span>Dropdown button</span>
            {isExpand ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-up"
                viewBox="0 0 16 16"
              >
                <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-down"
                viewBox="0 0 16 16"
              >
                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
              </svg>
            )}
          </button>
          <AnimatePresence>
            {isExpand && (
              <motion.ul
                className="dropDown-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {actionElements}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </>
    );
}


