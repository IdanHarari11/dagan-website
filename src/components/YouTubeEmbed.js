import React from 'react';

const YouTubeEmbed = ({ videoUrl }) => {
  return (
    <div className="flex justify-center my-8">
      <div className="w-full max-w-3xl aspect-w-16 aspect-h-9 h-[25rem]">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
