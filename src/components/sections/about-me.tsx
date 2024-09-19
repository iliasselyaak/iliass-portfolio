import Image from 'next/image';

import AboutMePic from '/public/images/me.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[480px] w-[320px] md:top-0 md:h-[540px] md:w-[380px] lg:h-[540px] lg:w-[440px]">
            <Image
              src={AboutMePic}
              alt="Iliass"
              className="absolute z-10 h-[480px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-6 md:top-0 md:h-[510px] md:w-[320px] lg:left-10 lg: lg:h-[510px] lg:w-[320px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[438px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-20 md:left-0 md:h-[490px] md:w-[320px] lg:bottom-20 lg:left-0 lg:h-[490px] lg:w-[320px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography>
            Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo Yolo 
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
