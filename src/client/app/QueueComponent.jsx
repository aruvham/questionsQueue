import React from 'react';
import QuestionComponent from './QuestionComponent.jsx';

function QueueComponent(props) {
  var handlers = {
    'upvote': props.handleUpvote,
    'downvote': props.handleDownvote,
    'edit': props.handleEdit,
    'answer': props.handleAnswered,
    'delete': props.handleDelete,
    'deleteTag': props.handleTagDelete,
    'keep': props.handleKeep,
    'unkeep': props.handleUnkeep
  }

  return (
    <div id="queue-wrapper">
      {props.questions.map(function(question, idx) {
        return (
          <QuestionComponent
            key={idx}
            user={props.user}
            question={question}
            handlers={handlers}
          />);
      })}
    </div>
  );
};

export default QueueComponent;
