import './main.css'

const main = () => {
    return (
        <main className='flex'>

            <section className='flex left-section'>
                <button className='active'>All Project</button>
                <button>Html & Css</button>
                <button>JavaScript</button>
                <button>React Js</button>
                <button>Express Js</button>
            </section>

            <section className='right-section flex'>
                {["aa", "bb", "cc","dd"].map((item) => {
                    return(
                        <article className='card'>
                            <img src="./1.jpg" width={266} alt="" />
                            <div style={{width:"266px"}} className="box">
                                <h1 className='title'>Landing Page 2</h1>
                                <p className='sub-title'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consequatur saepe eveniet quo ex explicabo labore corrupti culpa porro rem! Eveniet nobis porro nulla quibusdam ad provident ipsa repudiandae quae!</p>
                                
                                <div className='flex icons'>
                                    <div style={{gap:"11px"}} className='flex'>
                                        <div className="icon-link"></div>
                                        <div className="icon-github"></div>
                                    </div>
                                    <a href="" className='link flex'>more 
                                        <span className='icon-arrow-right'></span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>

        </main>
    )
}

export default main;


