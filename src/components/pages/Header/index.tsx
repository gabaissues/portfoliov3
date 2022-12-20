import React from 'react';
import Repo from '../../../interfaces/Repo';
import ProjectComponent from '../../global/Project';

interface Props {
    repos: Repo[]
}

const HeaderComponent = (props: Props) => {
    return(
        <header id="header" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease" className="flex flex-col max-w-5xl">

            <div className="mb-10 flex flex-col justify-center items-center bg-red-300 w-full">

              <h1 className='font-spacemono'>Olá, me chamo Gabriel</h1>
              <div className="flex text-center justify-center flex-wrap items-center">

                <h1 className="font-poppins text-[42px] font-semibold text-center mr-1">Faço</h1>
                <h1 className="font-poppins text-[42px] font-semibold text-center text-purple">Aplicativos, Sites, Bots e Servidores</h1>

              </div>

            </div>
            <div className='flex items-center flex-wrap justify-center w-full'>

              {props.repos.slice(0, 3).map((repo, index: number) => (

                <ProjectComponent key={index} name={repo.name} url={repo.html_url} description={repo.description ? `${repo.description.slice(0, 200)}...` : 'Este projeto não tem descrição ainda...'} dataAos={"fade-up"} dataAosDuration={`${index} * 1000`} dataAosEasing={"ease"} />

              ))}
            </div>

            <a href="#projetos" className='animate-bounce mt-10 flex items-center justify-center decoration-none'>

              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#503D77" />
                <path d="M20.2 13.8L20.2 28.2M20.2 28.2L26.2 22.8269M20.2 28.2L14.2 22.8269" stroke="white" strokeWidth="2" />
              </svg>

            </a>

          </header>
    )
}

export default HeaderComponent;