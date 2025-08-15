import React from 'react';

interface EventProps {
    title: string;
    description: string;
    subTitle: string;
    img?: string;
}

const EventCard: React.FC<EventProps> = ({ title, description, subTitle, img }) => {
    return (
        <div className="event-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{subTitle}</p>
            {img && <img src={img} alt={title} />}
        </div>
    );
}

export default EventCard;
