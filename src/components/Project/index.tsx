import React from 'react';

//data-aos="fade-up" data-aos-duration="1700" data-aos-easing="ease'

interface Props {
  dataAos: string
  dataAosDuration: string
  dataAosEasing: string;
}

const ProjectComponent = (props: Props) => {

    return(
        <div data-aos={props.dataAos} data-aos-duration={props.dataAosDuration} data-aos-easing={props.dataAosEasing} className='md:first-of-type:ml-0 max-w-[320px] w-full ml-2 mb-2 rounded border-solid border-2 border-gray-500 bg-gray-100 p-6 max-[600px]:bg-sky-300'>

                <div className="flex items-center justify-between">

                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.4 4.00001H11.178L9.099 0.820007C8.93143 0.565212 8.71198 0.358091 8.45857 0.215573C8.20517 0.0730562 7.92501 -0.000811958 7.641 6.73162e-06H1.8C1.32261 6.73162e-06 0.864773 0.21072 0.527208 0.585793C0.189642 0.960866 0 1.46957 0 2.00001V24C0 24.5304 0.189642 25.0391 0.527208 25.4142C0.864773 25.7893 1.32261 26 1.8 26H23.4C23.8774 26 24.3352 25.7893 24.6728 25.4142C25.0104 25.0391 25.2 24.5304 25.2 24V6.00001C25.2 5.46957 25.0104 4.96087 24.6728 4.58579C24.3352 4.21072 23.8774 4.00001 23.4 4.00001ZM23.4 24H1.8V8.00001H8.379C8.85639 8.00001 9.31423 7.78929 9.65179 7.41422C9.98936 7.03915 10.179 6.53044 10.179 6.00001H1.8V2.00001H7.641L9.99 5.59001C10.0738 5.7174 10.1835 5.82096 10.3102 5.89222C10.4369 5.96348 10.577 6.00042 10.719 6.00001H23.4V24Z" fill="black" />
                  </svg>


                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7H14.4M14.4 7L9.02687 1M14.4 7L9.02687 13" stroke="black" />
                  </svg>


                </div>
                <div>

                  <h1 className='mt-4'>Nome do projeto</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste obcaecati alias quia nisi perferendis! Minima, labore impedit eius dolor aperiam repellendus voluptatibus adipisci quo molestias laborum quisquam ipsum sequi expedita.</p>

                  <a href='#' className='flex mt-4 items-center justify-center font-bold rounded bg-purple p-[14px] text-[#fff] w-full  decoration-none' >Acessar</a>

                </div>

              </div>
    )

}

export default ProjectComponent