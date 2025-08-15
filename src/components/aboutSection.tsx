import React from 'react';
import EventCard from '@/components/about-card';

const AboutCard = ({ events }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((event, index) => (
                <EventCard key={index} {...event} />
            ))}
        </div>
    );
}

export default AboutCard;