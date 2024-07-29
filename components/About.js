import Image from 'next/image';
import profilePic from '../public/profile.jpeg';
import TimelineItem from '../components/Timeline';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center text-white p-4 mt-32">
      {/* Introduction Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mb-12">
        <div className={`md:w-1/2 text-center md:text-left mb-8 md:mb-0 transition-transform duration-[1500ms] ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <h1 className="text-4xl font-bold mb-4">Meet Keerthana,</h1>
          <p className="text-lg text-gray-400">
            As a full-stack dev, I live for those "aha!" moments when an idea transitions into a fully-fledged, real-world application. 
            My toolkit spans technologies like React Native for mobile apps, Django for scriptable backends, and cloud services for 
            scaling effortlessly. I'm a problem-solver at heart, constantly tinkering and learning to deliver top-notch solutions.
          </p>
        </div>
        <div className={`md:w-1/2 flex justify-center transition-transform duration-[1500ms] ease-in-out ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <Image src={profilePic} alt="Profile Picture" className="rounded-lg" width={300} height={300} />
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
        <VerticalTimeline>
          <TimelineItem
            title="Northeastern University"
            subtitle="Masters in Software Engineering Systems"
            period="Boston, MA | 2024"
            description={[]}
          />
          <TimelineItem
            title="SSN College of Engineering, Anna University"
            subtitle="Bachelors in Computer Science & Engineering"
            period="Chennai, India | 2016-2020"
            description={[]}
          />
        </VerticalTimeline>
      </section>

      {/* Experience Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
        <VerticalTimeline>
          <TimelineItem
            title="TheBoard"
            subtitle="Software Engineer Intern"
            period="Boston, MA | 2024"
            description={[
              'Developed React Native app for TAs and students, boosting engagement 40%.',
'Integrated UI with AWS Lambda, improving efficiency by 25%.',
'Optimized PostgreSQL databases, enhancing system performance 30%.',
            ]}
          />
          <TimelineItem
            title="Unthink Inc"
            subtitle="Full Stack Developer"
            period="Bengaluru, India | 2020-2022"
            description={[
              'Built Django REST API endpoints with 87% test coverage, handling 100+ calls/minute.',
'Reduced chatbot response times to <300ms using Dialogflow, websockets, and caching.',
'Launched 5 Google Assistant voice apps serving 500+ weekly users.',
'Increased conversation completion rates 35% by addressing common failure points.',
'Optimized voice assistant UX across platforms using data-driven improvements.',
            ]}
          />
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default About;
