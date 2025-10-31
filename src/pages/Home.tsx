import React from 'react';
import { Hero } from '../components/Hero';
import { Story } from '../components/Story';
import { OurStory } from '../components/OurStory';
import { Subdomain } from '../components/Subdomain';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <>
      {/* Phần mở đầu: Hero Section */}
      <Hero />

      {/* Giá trị & niềm tự hào Việt Nam */}
      <Story />

      {/* Câu chuyện của chúng tôi – Tại sao có HYPER ID */}
      <OurStory />

      {/* Giới thiệu về Subdomain / Demo domain */}
      <Subdomain />

      {/* Chữ ký thương hiệu & liên kết mạng xã hội */}
      <Footer />
    </>
  );
};
