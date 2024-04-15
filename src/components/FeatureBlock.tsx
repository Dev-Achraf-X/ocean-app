import { featureBlock } from "@/types/interfaces";
import Image from "next/image";
import { FC } from "react";
import Heading from "@/components/Heading";

interface FeatureBlockProps extends featureBlock {}

const FeatureBlock: FC<FeatureBlockProps> = ({
  content,
  imageUrl,
  title,
  isReserve,
}) => {
  return (
    <article
      className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${
        isReserve && "lg:flex-row-reverse"
      }`}
    >
      <Image
        src={imageUrl}
        alt={"feature"}
        width={370}
        height={370}
        className="basis-5/12 w-full shadow-lg"
      />
      <div className=" basis-6/12 flex flex-col md:text-center lg:text-start gap-4 md:gap-6">
        <Heading title={title} />
        <p className="lg:max-w-[40rem]">{content}</p>
      </div>
    </article>
  );
};

export default FeatureBlock;
