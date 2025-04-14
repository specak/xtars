import React from "react";
import { useParams } from "react-router-dom";

const TopicPage = () => {
  const { topicSlug } = useParams(); // Access the slug from the URL

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Topic: {topicSlug}</h1>
      {/* Here you can display content dynamically based on topicSlug */}
    </div>
  );
};

export default TopicPage;
