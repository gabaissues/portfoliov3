import React from 'react';
import Head from 'next/head'

import Repo from '../interfaces/Repo';
import NavbarDesktopComponent from '../components/global/NavbarDesktop';
import NavbarMobileComponent from '../components/global/NavbarMobile';
import HeaderComponent from '../components/pages/Header';
import ProjectsComponent from '../components/pages/Projects';
import ContatoComponent from '../components/pages/Contato';
import FooterComponent from '../components/pages/Footer';
import SobreComponent from '../components/pages/Sobre';

export const getServerSideProps = async () => {

  const data = await fetch("https://api.github.com/users/ogabrielj/repos")
  const res: Repo[] = await data.json()

  return {
    props: {
      repos: res
    }
  }

}

interface Props {
  repos: Repo[]
}

export default function Home(props: Props) {
  return (
    <div id="sobre">
      <Head>
        <title>Portfólio</title>
        <meta name="description" content="Seja bem vindo ao meu portfólio :)" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="container mx-auto px-4 md:container md:mx-auto" >

        <NavbarDesktopComponent />
        <NavbarMobileComponent />

        <main className='mt-20 flex items-center justify-center flex-col'>

          <HeaderComponent repos={props.repos} />
          <SobreComponent />
          <ProjectsComponent repos={props.repos} />
          <ContatoComponent />

        </main>
      </div>

      <FooterComponent />
    </div>
  )
}
