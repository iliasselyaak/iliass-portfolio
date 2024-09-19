import Image from 'next/image';
import { MapPin } from 'lucide-react';

import Headshot from '/public/images/headshot.png';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="relative flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[400px] w-[280px] md:h-[460px] md:w-[320px]">
            <Image
              src={Headshot}
              alt="Iliass"
              className="relative h-[400px] w-[280px]"
              style={{filter: 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4))'}}></Image>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Iliass{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
            I&apos;m an AI and Computer Vision Specialist
            with expertise in Machine Learning, Deep Learning,
            and Web Development. I build intelligent, real-time systems and create responsive web applications using Python, Pytorch, and React.js.
            Passionate about solving real-world problems through technology.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>London, UK</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
