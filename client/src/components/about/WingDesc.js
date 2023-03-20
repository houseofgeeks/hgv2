import React from 'react';
import rect from '../../assets/rectangle2.svg';
import WingMember from './WingMember';

const WingDesc = ({ logo, title, desc, img }) => {
    return (
        <div className='pl-[2rem] flex flex-col gap-[2rem]'>
            <div className=''>
                <img src={logo} alt='' className='w-[180px]' />
            </div>
            <div className='text-4xl font-semibold'>
                {
                    title === null ?
                        'Software Developement Wing'
                        :
                        title
                }
            </div>
            <div className='opacity-70'>
                {
                    desc === null ?
                        'Web and application development community of IIIT Ranchi has been primarily responsible for providing innovative technical solutions to most of the issues in the institute. We began as web development Club with the sole purpose of developing web applications . But after enormous support from students we have now evolved into a club that has proficient developers from the field of Android Development, Web Development, Game Development and IOS development. All the four verticals work in harmony to develop innovative softwares that solve many real life technical issues on campus.'
                        :
                        desc
                }
            </div>
            <div className='flex justify-between gap-[2rem]'>
                <div className='flex flex-col gap-[1.5rem]'>
                    <div className='text-2xl font-semibold'>
                        Wing Head
                    </div>
                    <div className=''>
                        <WingMember name={'Srijan Srivastava'} img={rect} />
                    </div>
                </div>
                <div className='flex flex-col gap-[1.5rem]'>
                    <div className='text-2xl font-semibold'>
                        Wing Co-ordinator
                    </div>
                    <div className='flex gap-[1rem]'>
                        <WingMember name={'Chirag Goel'} img={rect} />
                        <WingMember name={'Ritik Jha'} img={rect} />
                        <WingMember name={'Sudhanshu Mittal'} img={rect} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WingDesc
