'use client';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
  });

  return (
    <div 
      id="Experience" 
      ref={ref}  // Attach the ref here
      className='pb-20 pt-20 flex flex-col items-center lg:items-start lg:space-x-10 container mx-auto'
    > 
    <div className='text-center w-full '>
    <h1 className='text-center text-6xl font-bold mb-12'>Experience</h1>
    </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          visible={inView}
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(51, 65, 85)', color: '#fff' }} // Darker background for better contrast
          contentArrowStyle={{ borderRight: '7px solid rgb(51, 65, 85)' }}
          date="June 2024 - September 2024"
          iconStyle={{ background: 'rgb(51, 65, 85)', color: '#fff' }} // Matching the theme
        >
          <h3 className="vertical-timeline-element-title text-lg font-bold">Data Analyst/Engineer @ Eden Housing Inc</h3>
          <h4 className="vertical-timeline-element-subtitle text-sm text-gray-300">Hayward, CA</h4>
          <p className="text-gray-400">
            Data Visualization, Data Cleaning, Data Pipelines, Azure Cloud, SQL Server Management
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={inView}
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(51, 65, 85)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(75, 85, 99)' }}
          date="May 2024"
          iconStyle={{ background: 'rgb(51, 65, 85)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title text-lg font-bold">Graduated SJSU</h3>
          <h4 className="vertical-timeline-element-subtitle text-sm text-gray-300">San Jose, CA</h4>
          <p className="text-gray-400">
           Graduated with a Bachelors Of Science in Software Engineering and as a Deans Scholar
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={inView}
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(51, 65, 85)', color: '#fff' }} // Slight variation in background color
          contentArrowStyle={{ borderRight: '7px solid rgb(75, 85, 99)' }}
          date="September 2023 - May 2024"
          iconStyle={{ background: 'rgb(51, 65, 85)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title text-lg font-bold">Front End Developer @ Dena Energy Inc</h3>
          <h4 className="vertical-timeline-element-subtitle text-sm text-gray-300">San Jose, CA</h4>
          <p className="text-gray-400">
            Next.js, Tailwind CSS, Agile, Shadcn/UI, Data Visualization, Energy Consumption
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        id='Exp'
          visible={inView}
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(51, 65, 85)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(75, 85, 99)' }}
          date="June 2022- September 2022"
          iconStyle={{ background: 'rgb(51, 65, 85)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title text-lg font-bold">Clincal Data Operator @ Natera Inc</h3>
          <h4 className="vertical-timeline-element-subtitle text-sm text-gray-300">San Carlos, CA</h4>
          <p className="text-gray-400">
            Data Entry, Data Analysis
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;