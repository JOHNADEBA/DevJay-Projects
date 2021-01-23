import { useState } from 'react';
import { site } from './site'

const Projects = () =>{
     const [projects, setProjects] = useState(site)

     const  handleToggle = (type)=>{
        const filt =  site.filter(project =>{
            return project.type === type
        })
        setProjects(filt)
    }

    return(
        <>
            <nav>
                    <button onClick={()=>setProjects(site)} >
                        All
                    </button>

                    <button className='mh3' onClick={()=>handleToggle('react')}>
                        React
                    </button>

                    <button onClick={()=>handleToggle('html')}>
                        HTML/CSS/JS
                    </button>
                
            </nav>
        
            <div >
                
                {projects.map(project =>{
                    const {id, link, tools, thumbnail, title} = project
                    return <article key={id} className='br3 ba1 dib ma4 '>
                                <a target='_blank ' rel='noreferrer' href={link}  
                                    className=' no-underline'>
                                    <img className='w-100' src={thumbnail} alt='pic'/>
                                    <h4  className='black tl pl2 mt0 red'>{title}</h4>
                                    <p className='black mb1 f7 b tr pr2 green'>{tools}</p>
                                </a> 
                        </article>
                })}
            
            </div>
        </>
    )
}
export default Projects;