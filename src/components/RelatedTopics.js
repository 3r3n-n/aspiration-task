import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchTopic } from '../api/topicService';
import TopicCard from './TopicCard';
import DataError from './DataError';

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TopicsContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(2, 20rem)
`;

const RelatedTopics = () => {
  const [currentTopic, setCurrentTopic] = useState("react");
  const [relatedTopics, setRelatedTopics] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetchTopic(currentTopic);
        const result = response.data || null;
        if (result) {
          setRelatedTopics(result.topic.relatedTopics);
        }
        else {
          setRelatedTopics(null);
          console.log(response);
        }
      };
      fetchData();
    } 
    catch (error) {
      console.error(error);
      setRelatedTopics(null);
    }
    }, [currentTopic]);
  //console.log(relatedTopics);

    

  return (
    <MainContainer>
      <h1>{currentTopic}</h1>
      <h2>Related Topics: </h2>
      { relatedTopics ?
      <TopicsContainer>
      { 
        relatedTopics.map((topic) => (
          <TopicCard 
            key={topic.name} 
            topic={topic} 
            handleClick={() => setCurrentTopic(topic.name)} 
          />
        ))
        
      }
      </TopicsContainer>
      :
      <DataError/>
      }
    </MainContainer>
  );
};

export default RelatedTopics;