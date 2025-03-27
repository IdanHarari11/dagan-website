import React from 'react';

const YouTubeEmbed = ({ videoUrl }) => {
  return (
    <div className="flex justify-center my-4 sm:my-8 px-4 sm:px-0">
      <div className="w-full max-w-3xl aspect-w-16 aspect-h-9 h-[15rem] sm:h-[25rem]">
        <iframe
          className="w-full h-full rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]"
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
