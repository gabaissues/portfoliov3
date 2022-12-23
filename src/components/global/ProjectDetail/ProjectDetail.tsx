import React from 'react';

interface Props {
    projects: number,
    work: number,
    icon: string
}

const ProjectDetailComponent = (props: Props) => {
    const dateCurrent = new Date()
    const dateLast = new Date(props.work, 0, 1)

    const difference = dateCurrent.getTime() - dateLast.getTime()
    const date = Math.floor(difference / (1000 * 60 * 60 * 24))

    return (
        <div className='max-w-[305px] md:max-w-auto rounded mb-2 ml-2 border-solid border-2 border-gray-500 bg-gray-100 p-3 flex items-center'>
            <img alt={props.icon} className='w-50 h-12' src={props.icon} />
            <div className="flex flex-col ml-3">

                <h1 className='flex items-center'>

                    <svg className='mr-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8333 3.33322H12.35C12.1794 2.84608 11.8616 2.42401 11.4406 2.1254C11.0196 1.82678 10.5162 1.66638 10 1.66638C9.48384 1.66638 8.98045 1.82678 8.55944 2.1254C8.13844 2.42401 7.82063 2.84608 7.65 3.33322H4.16667C3.72504 3.33454 3.30189 3.51055 2.98961 3.82283C2.67734 4.13511 2.50132 4.55826 2.5 4.99988V16.6666C2.50132 17.1082 2.67734 17.5313 2.98961 17.8436C3.30189 18.1559 3.72504 18.3319 4.16667 18.3332H15.8333C16.275 18.3319 16.6981 18.1559 17.0104 17.8436C17.3227 17.5313 17.4987 17.1082 17.5 16.6666V4.99988C17.4987 4.55826 17.3227 4.13511 17.0104 3.82283C16.6981 3.51055 16.275 3.33454 15.8333 3.33322ZM10 3.33322C10.1648 3.33322 10.3259 3.38209 10.463 3.47366C10.6 3.56523 10.7068 3.69538 10.7699 3.84765C10.833 3.99992 10.8495 4.16748 10.8173 4.32913C10.7852 4.49078 10.7058 4.63926 10.5893 4.75581C10.4727 4.87235 10.3242 4.95172 10.1626 4.98387C10.0009 5.01603 9.83337 4.99952 9.6811 4.93645C9.52882 4.87338 9.39868 4.76657 9.30711 4.62953C9.21554 4.49249 9.16667 4.33137 9.16667 4.16655C9.16733 3.94574 9.25533 3.73416 9.41147 3.57802C9.56761 3.42189 9.77919 3.33388 10 3.33322ZM8.33333 7.49988L10.6583 9.82822L12.7583 7.72822L11.6667 6.66655H15V9.99988L13.9367 8.90738L10.66 12.1866L8.33333 9.85822L6.17833 12.0116L5 10.8332L8.33333 7.49988ZM15.8333 15.8332H4.16667V14.1666H15.8333V15.8332Z" fill="black" />
                    </svg>

                    Projetos finalizados: {props.projects}

                </h1>
                <h1 className='flex items-center'>

                    <svg className='mr-2' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8612 1.81313C14.4074 1.36452 13.8107 1.08911 13.1749 1.03476C12.5391 0.980413 11.9043 1.15056 11.3809 1.51563C13.0633 2.2161 14.4377 3.4983 15.2531 5.12813C15.5679 4.61131 15.7003 4.00391 15.6293 3.40298C15.5582 2.80206 15.2878 2.24229 14.8612 1.81313Z" fill="black" />
                        <path d="M5.39269 1.61981C4.87147 1.20585 4.21675 0.996997 3.5521 1.03267C2.88744 1.06833 2.25884 1.34606 1.78491 1.81342C1.3149 2.28655 1.03653 2.91682 1.0034 3.5829C0.970269 4.24898 1.18472 4.90377 1.60547 5.4212C2.36316 3.73538 3.70971 2.3838 5.39269 1.61981Z" fill="black" />
                        <path d="M7.74442 1.93121C6.51151 2.07524 5.34404 2.56346 4.37564 3.34001C3.40724 4.11656 2.67703 5.15005 2.26857 6.32222C1.86011 7.49439 1.7899 8.75788 2.06599 9.96809C2.34207 11.1783 2.95329 12.2863 3.8297 13.1654L2.62553 14.3695C2.58181 14.4142 2.54732 14.467 2.52401 14.525C2.50071 14.583 2.48905 14.645 2.48971 14.7075C2.49037 14.77 2.50332 14.8317 2.52784 14.8892C2.55236 14.9467 2.58797 14.9987 2.63262 15.0425C2.67726 15.0862 2.73009 15.1207 2.78807 15.144C2.84605 15.1673 2.90805 15.1789 2.97054 15.1783C3.03303 15.1776 3.09477 15.1647 3.15225 15.1402C3.20973 15.1156 3.26181 15.08 3.30553 15.0354L4.56164 13.7793C5.71034 14.6485 7.11309 15.1158 8.55359 15.1089C9.99409 15.1021 11.3923 14.6216 12.5328 13.7415L13.8266 15.0354C13.917 15.1127 14.0332 15.1532 14.152 15.1486C14.2709 15.144 14.3836 15.0947 14.4677 15.0106C14.5518 14.9265 14.6011 14.8138 14.6057 14.6949C14.6103 14.5761 14.5698 14.4599 14.4925 14.3695L13.2222 13.1182C14.1754 12.1417 14.8032 10.8942 15.0192 9.54681C15.2353 8.19942 15.0292 6.81818 14.4291 5.59262C13.8289 4.36706 12.8643 3.35722 11.6675 2.70168C10.4706 2.04613 9.10028 1.777 7.74442 1.93121ZM9.24609 14.1193C8.07242 14.273 6.88008 14.0553 5.83644 13.4968C4.7928 12.9383 3.95025 12.067 3.42707 11.0052C2.90389 9.9434 2.72635 8.74443 2.91936 7.57658C3.11237 6.40873 3.66625 5.33065 4.50325 4.49365C5.34024 3.65665 6.41833 3.10278 7.58618 2.90976C8.75403 2.71675 9.953 2.8943 11.0148 3.41747C12.0766 3.94065 12.9479 4.7832 13.5064 5.82684C14.0649 6.87048 14.2826 8.06282 14.1289 9.23649C13.9667 10.4746 13.4001 11.6245 12.5171 12.5075C11.6341 13.3905 10.4842 13.9571 9.24609 14.1193Z" fill="black" />
                        <path d="M11.7681 9.60493L8.90646 8.18826V4.48604C8.90646 4.37332 8.86168 4.26522 8.78198 4.18551C8.70227 4.10581 8.59417 4.06104 8.48146 4.06104C8.36874 4.06104 8.26064 4.10581 8.18094 4.18551C8.10123 4.26522 8.05646 4.37332 8.05646 4.48604V8.73604L11.3903 10.3888C11.4918 10.4383 11.6087 10.4454 11.7154 10.4087C11.8222 10.3719 11.9099 10.2943 11.9594 10.1928C12.0088 10.0914 12.016 9.97446 11.9792 9.86774C11.9425 9.76103 11.8648 9.67329 11.7634 9.62381L11.7681 9.60493Z" fill="black" />
                    </svg>

                    Tempo trabalhado: {date} dias

                </h1>

            </div>
        </div>
    )
}

export default ProjectDetailComponent