import React from 'react';
import styled from 'styled-components';

const TopicInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: salmon;
    width: 20rem;
    height: 8rem;
    border-radius: 1rem;
`;

const TopicButton = styled.button`
    width: 80%;
    padding: 0rem;
    border: 0px solid transparent;
    border-radius: 2rem;
    background-color: #FFCBA4;
    &:hover {
        background-color: #FFF9E3;
    }
`;

const TopicName = styled.h3`
    font-size: 1.6rem;
    line-height: 0rem;
`;

const TopicStargazerLabel = styled.p`
    font-size: 1rem;
    line-height: 0rem;
`;

const TopicStargazerCount = styled.p`
    font-size: 1.2rem;
    line-height: 0rem;
`;

const TopicCard = ({ topic, handleClick }) => {
    return (
        <TopicInfo>
            <TopicButton onClick={handleClick}>
                <TopicName>{topic.name}</TopicName>
            </TopicButton>
            <TopicStargazerLabel>Stargazer Count: </TopicStargazerLabel>
            <TopicStargazerCount>{topic.stargazerCount}</TopicStargazerCount>
        </TopicInfo>
    );
};

export default TopicCard;