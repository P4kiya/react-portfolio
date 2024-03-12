import './main.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { myProjects } from './myProjects'

const main = () => {
    const [currentActive, setcurrentActive] = useState('all');
    const [arr, setArr] = useState(myProjects);

    const handleClick = (buttonCategory) => {

        setcurrentActive(buttonCategory);
        
        const newArr = myProjects.filter((item) => {
    
            const ZZZ = item.category.find(myItem => {
                return myItem === buttonCategory;
            });
            return ZZZ === buttonCategory;
        });
        setArr(newArr);
    };
    
    return (
        <main className='flex'>

            <section className='flex left-section'>

                <button onClick={() => { setcurrentActive('all'); setArr(myProjects); }} 
                    className={currentActive === 'all' ? 'active' : null}>All Project
                </button>

                <button onClick={() => { handleClick("css"); }}
                    className={currentActive === 'css' ? 'active' : null}>Css
                </button>

                <button onClick={() => { handleClick("javascript"); }}
                    className={currentActive === 'javascript' ? 'active' : null}>JavaScript
                </button>

                <button onClick={() => { handleClick("react"); }}
                    className={currentActive === 'react' ? 'active' : null}>React Js
                </button>

                <button onClick={() => { handleClick("express"); }}
                    className={currentActive === 'express' ? 'active' : null}>Express Js
                </button>

            </section>

            <section className='right-section flex'>
                <AnimatePresence>
                {arr.map((item) => {
                    return (
                        <motion.article 
                        layout
                        initial={{transform:"scale(0)"}}
                        animate={{transform:"scale(1)"}}
                        key={item.imgPath}
                        transition={{type:'spring',damping:8,stiffness:50}}
                        className='card'>
                            <img src={item.imgPath} width={266} />
                            <div style={{ width: "266px" }} className="box">
                                <h1 className='title'>{item.projectTitle}</h1>
                                <p className='sub-title'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consequatur saepe eveniet quo ex explicabo labore corrupti culpa porro rem! Eveniet nobis porro nulla quibusdam ad provident ipsa repudiandae quae!</p>

                                <div className='flex icons'>
                                    <div style={{ gap: "11px" }} className='flex'>
                                        <div className="icon-link"></div>
                                        <div className="icon-github"></div>
                                    </div>
                                    <a href="" className='link flex'>more
                                        <span className='icon-arrow-right'></span>
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
                </AnimatePresence>
            </section>

        </main>
    )
}

export default main;


