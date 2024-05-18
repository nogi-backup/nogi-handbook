import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import images from './galleryImages.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} />
      </div>
    </header>
  );
}


function Gallery() {

  const posters = [
    require('../../assets/posters/20230918-nao.jpg').default,
    require('../../assets/posters/20231030-satsuki.jpg').default,
    require('../../assets/posters/20240507-mitsuki-graduation.jpg').default,
    require('../../assets/posters/20240829-seira.jpg').default
  ]

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: false,
    centerMode: true,
    className: "center",
    dots: true,
    infinite: true,
    lazyLoad: true,
    row: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    variableWidth: true
  };
  return (
    <Slider {...settings}>
      {posters.map((image, index) =>
        <div key={"poster" + { index }}>
          <img src={image} alt="gallery" height={400} />
        </div>
      )
      }
    </Slider >);
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Gallery />
      </main>
    </Layout >
  );
}
