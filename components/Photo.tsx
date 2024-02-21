import Image from 'next/image';
import React from 'react';
interface Props {
  number: number;
  handleImageClick: (imageName: string) => void;
}

const Photo: React.FC<Props>  = ({ number, handleImageClick }) => {
  return (
    <Image
      onClick={() => handleImageClick(`/${number}.webp`)}
      src={`/${number}.webp`}
      width={400}
      height={400}
      alt={`${number} image`}
      className=""
    />
  );
};

export default Photo;
