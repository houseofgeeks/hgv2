import React from 'react';
import rect from '../../assets/rectangle2.svg';
import WingMember from './WingMember';

const WingDesc = ({ logo, title, desc, img, head, coordinators }) => {
    return (
        <div className='sm:pl-[2rem] flex flex-col gap-[2rem]'>
            <div className='flex justify-center sm:justify-start'>
                <img src={logo} alt='' className='md:w-[180px] w-[80px] xs:w-[120px]' />
            </div>
            <div className='text-xl xs:text-2xl md:text-4xl font-semibold flex justify-center sm:justify-start'>
                {
                    title === null ?
                        'Software Developement Wing'
                        :
                        title
                }
            </div>
            <div className='opacity-70 text-justify sm:text-left'>
                {
                    desc === null ?
                        'Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus.'
                        :
                        desc
                }
            </div>
            <div className='flex flex-col md:flex-row justify-between gap-[2rem]'>
                <div className='flex flex-col gap-[1rem]'>
                    <div className='text-lg xs:text-xl md:text-3xl font-semibold flex justify-center sm:justify-start'>
                        Wing Head
                    </div>
                    <div className='flex justify-center sm:justify-start'>
                        <WingMember name={head?.name} img={rect} />
                    </div>
                </div>
                <div className='flex flex-col gap-[1.5rem]'>
                    <div className='text-lg xs:text-xl md:text-3xl font-semibold flex justify-center sm:justify-start'>
                        Wing Co-ordinator
                    </div>
                    <div className='flex justify-center sm:justify-start gap-[0.75rem]'>
                        {coordinators?.map((coordinator, index) => (
                            <WingMember key={index} name={coordinator?.name} img={rect} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WingDesc
