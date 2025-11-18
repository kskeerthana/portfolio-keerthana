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
        <div className={`md:w-1/2 text-center md:text-left mb-8 md:mb-0 transition-transform duration-[900ms] ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <h1 className="text-4xl font-bold mb-4">Meet Keerthana,</h1>
          <p className="text-lg text-gray-400">
            Full stack dev with a habit of turning “what if” ideas into production grade apps.
            From React UIs to NestJS/Django APIs, I make things that look good, run fast, and don’t fall apart under pressure.  
          </p>
        </div>
        <div className={`md:w-1/2 flex justify-center transition-transform duration-[1500ms] ease-in-out ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <Image src={profilePic} alt="Profile Picture" className="rounded-lg" width={300} height={300} />
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Timeline</h2>
        <VerticalTimeline>
          <TimelineItem
            title="Quantic POS"
            subtitle="Full-Stack Developer"
            period="Philadelphia, PA | 2025"
            description={[
              'Revamped a POS CRM ecosystem rebuilding key flows in React/NestJS, untangling legacy PHP, and making the platform noticeably faster and smoother for everyday users.',
            ]}
          />
          <TimelineItem
            title="TheBoard"
            subtitle="Software Engineer Intern"
            period="Boston, MA | 2024"
            description={[
              'Worked across mobile and web (React Native and Next.js) to shape tools that TAs and students actually enjoyed using improving workflows and making the app feel lighter and more responsive.',
            ]}
          />
          <TimelineItem
            title="Northeastern University"
            subtitle="MS in Software Engineering Systems"
            period="Boston, MA | 2023 - 24"
            description={[
              'Explored how modern systems scale by building full stack projects, experimenting with cloud patterns, and sharpening the engineering mindset behind production software.',
            ]}
          />
          <TimelineItem
            title="Unthink AI"
            subtitle="Full-Stack Developer"
            period="Bengaluru, India | 2020 – 2022"
            description={[
              'Built and refined voice assistants that felt natural and fast combining Django, real time features, and Dialogflow to turn early concepts into products used by thousands.',
            ]}
          />
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default About;
