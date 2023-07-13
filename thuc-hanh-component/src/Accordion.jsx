import { useState } from "react";
import {AnimatePresence, motion} from 'framer-motion';

export default function Accordion(){
    const accordionElements = accordions.map((accordion, index) => (
      <li className="accordion-item" key={index}>
        <AccordionItem accordion={accordion} />
      </li>
    ));
    return <div className="accordion-container">
        <ul className="accordion-list">
            {accordionElements}
        </ul>
    </div>;
}

function AccordionItem({accordion}){
    const [isExpand, setIsExpand] = useState(false);
    return (
      <>
        <div 
            className={isExpand? "accordion-heading--open" : "accordion-heading"}
            onClick={() => setIsExpand(!isExpand)}
        >
          <h3>{accordion.heading}</h3>
          <button
            className={"show-button"}
          >
            {isExpand ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            )}
          </button>
        </div>
        <AnimatePresence>
          {isExpand && (<motion.p 
              className="accordion-content"
              initial = {{height: 0}}
              animate = {{height: "auto"}}
              exit = {{height: 0}}
              transition={{duration: 0.15}}
              >
                  {accordion.content}
              </motion.p>
          )}
        </AnimatePresence>
      </>
    );
}

const accordions = [
  {
    heading: "Accordion Item #1",
    content:
      "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    heading: "Accordion Item #2",
    content:
      "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    heading: "Accordion Item #3",
    content:
      "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];