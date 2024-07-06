import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const TimelineItem = ({ title, subtitle, description, period }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1A1A1A', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #1A1A1A' }}
      date={period}
      iconStyle={{ background: '#1A1A1A', color: '#fff' }}
      icon={<FontAwesomeIcon icon={faCheckCircle} />}
    >
      <h3 className="vertical-timeline-element-title text-2xl font-semibold">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle text-lg">{subtitle}</h4>
      <ul className="list-disc list-inside mt-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default TimelineItem;
