import Image from 'next/image';
import profilePic from '../public/profile.jpeg';
import TimelineItem from '../components/Timeline';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <div className="flex flex-col items-center text-white p-4">
      {/* Introduction Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl h-screen mb-12">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Meet Keerthana,</h1>
          <p className="text-lg text-gray-400">
            As a full-stack dev, I live for those "aha!" moments when an idea transitions into a fully-fledged, real-world application. 
            My toolkit spans technologies like React Native for mobile apps, Django for scriptable backends, and cloud services for 
            scaling effortlessly. I'm a problem-solver at heart, constantly tinkering and learning to deliver top-notch solutions.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
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
              'Engineered an interactive application for TAs and students using React Native, increasing user engagement by 40%.',
              'Enhanced backend communication and scalability by integrating the UI with AWS Lambda, resulting in a 25% efficiency improvement.',
              'Designed and maintained PostgreSQL databases for user data, posts, and interactions, improving system performance by 30%.',
            ]}
          />
          <TimelineItem
            title="Unthink Inc"
            subtitle="Full Stack Developer"
            period="Bengaluru, India | 2020-2022"
            description={[
              'Engineered 15+ Django REST Framework API endpoints with 87% test coverage, supporting 100+ API calls/minute.',
              'Optimized chatbot response times from 800ms to <300ms using Google Dialogflow, websockets, and caching.',
              'Launched 5 voice apps on Google Assistant with Dialogflow, serving 500+ weekly users.',
              'Improved conversation completion rates by 35% after analyzing user logs and addressing 21 common failure points.',
              'Enhanced user experience across voice assistant platforms by streamlining functionalities and API performance, leveraging data-driven optimizations.',
            ]}
          />
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default About;
