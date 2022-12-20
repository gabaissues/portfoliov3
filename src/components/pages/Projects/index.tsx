import React from 'react';
import Repo from '../../../interfaces/Repo';
import ProjectComponent from '../../global/Project';
import ProjectDetailComponent from '../../global/ProjectDetail/ProjectDetail';

interface Props {
    repos: Repo[]
}

const ProjectsComponent = (props: Props) => {
    return(
        <section id="projetos" className='mt-16 flex flex-col max-w-5xl'>

            <div className='mb-10 flex justify-center items-center'>
              <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.9286 4.00001H12.8636L10.4711 0.820007C10.2782 0.565211 10.0257 0.35809 9.73407 0.215573C9.44246 0.0730562 9.12006 -0.000811958 8.79321 6.73162e-06H2.07143C1.52205 6.73162e-06 0.995175 0.21072 0.606707 0.585793C0.218239 0.960866 0 1.46957 0 2.00001V24C0 24.5304 0.218239 25.0391 0.606707 25.4142C0.995175 25.7893 1.52205 26 2.07143 26H26.9286C27.4779 26 28.0048 25.7893 28.3933 25.4142C28.7818 25.0391 29 24.5304 29 24V6C29 5.46957 28.7818 4.96086 28.3933 4.58579C28.0048 4.21072 27.4779 4.00001 26.9286 4.00001ZM26.9286 24H2.07143V8H9.6425C10.1919 8 10.7188 7.78929 11.1072 7.41422C11.4957 7.03914 11.7139 6.53044 11.7139 6H2.07143V2.00001H8.79321L11.4964 5.59001C11.5928 5.7174 11.7191 5.82096 11.8649 5.89222C12.0107 5.96348 12.1719 6.00041 12.3354 6H26.9286V24Z" fill="black" />
              </svg>

              <h1 className='text-[24px] font-semibold pl-2'>Projetos</h1>
            </div>
            <div className='flex items-center flex-wrap justify-center w-full md:m-auto'>



            </div>
            <div className='flex flex-wrap items-center justify-center'>

              {props.repos.map((repo, index: number) => (

                <ProjectComponent key={index} name={repo.name} url={repo.html_url} description={repo.description ? `${repo.description.slice(0, 200)}...` : 'Este projeto não tem descrição ainda...'} dataAos={"fade-up"} dataAosDuration={`${index} * 1000`} dataAosEasing={"ease"} />

              ))}

            </div>
            <div className='flex flex-wrap items-center justify-center'>

                <ProjectDetailComponent projects={30} work={2019} icon={'html.svg'}  />
                <ProjectDetailComponent projects={30} work={2019} icon={'css.svg'}  />
                <ProjectDetailComponent projects={35} work={2018} icon={'javascript.svg'}  />
                <ProjectDetailComponent projects={44} work={2018} icon={'nodejs.svg'} />
                <ProjectDetailComponent projects={26} work={2019} icon={'react.svg'}  />
                <ProjectDetailComponent projects={22} work={2021} icon={'nextjs.svg'}  />
                <ProjectDetailComponent projects={30} work={2020} icon={'reactnative.svg'}  />
                <ProjectDetailComponent projects={30} work={2018} icon={'express.svg'}  />
                <ProjectDetailComponent projects={12} work={2022} icon={'typescript.svg'}  />
                <h1 className="mt-2 text-center text-[12px]">Esses dados são estimativas, tanto a quantidade de projetos quanto quando comecei a programar. Eu comecei a programar em 2018 com Node.JS, mas parti pro front logo após. Tenho mais de 45 projetos no github de javascript :)</h1>

            </div>

          </section>
    )
}

export default ProjectsComponent