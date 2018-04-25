import React from 'react';
import { Helmet } from 'react-helmet';

import style from './About.scss';

import ArrowIcon from '../../images/arrow-down.svg';

const scrollPage = () => {
  const element = document.getElementById('about-content');

  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
};

const About = () => (
  <section className={style.container}>
    <Helmet>
      <title>About</title>
    </Helmet>

    <div className={style.title}>
      <h1 className={style.titleText}>About us</h1>
      <ArrowIcon
        className={style.arrowIcon}
        onClick={scrollPage}
      />
    </div>

    <div id="about-content" className={style.content}>
      <p className={style.contentText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic veniam alias doloribus nulla enim dolores doloremque, repellendus, fuga fugiat voluptate, eaque possimus cum ipsa soluta obcaecati quasi aliquid. Dolores, dignissimos, libero. Necessitatibus hic, accusamus ipsa quia, aperiam consequatur explicabo id laborum eaque voluptates repudiandae. Officiis, repellendus, dicta distinctio maxime eaque iure, dolorem facere exercitationem voluptas commodi assumenda. Laboriosam ipsa repudiandae enim commodi? Sapiente a nihil optio delectus obcaecati dolores, nulla laboriosam aspernatur accusamus provident pariatur excepturi. Tenetur accusamus animi quisquam in, sequi incidunt reprehenderit perspiciatis repellat eveniet vero, amet magnam tempora deserunt totam dolorem, unde, eaque error! Quisquam possimus ea unde libero labore magni laudantium, a eius reiciendis. Recusandae soluta enim quibusdam fuga quia! Unde libero corporis veritatis molestias cupiditate corrupti commodi asperiores aperiam eveniet, id dolorum velit dolores deleniti fugiat incidunt, sequi expedita architecto. Temporibus doloribus ipsum necessitatibus repudiandae, quaerat aspernatur impedit eaque commodi explicabo. Consequuntur accusantium eum adipisci, eius illo.
      </p>
      <p className={style.contentText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic veniam alias doloribus nulla enim dolores doloremque, repellendus, fuga fugiat voluptate, eaque possimus cum ipsa soluta obcaecati quasi aliquid. Dolores, dignissimos, libero. Necessitatibus hic, accusamus ipsa quia, aperiam consequatur explicabo id laborum eaque voluptates repudiandae. Officiis, repellendus, dicta distinctio maxime eaque iure, dolorem facere exercitationem voluptas commodi assumenda. Laboriosam ipsa repudiandae enim commodi? Sapiente a nihil optio delectus obcaecati dolores, nulla laboriosam aspernatur accusamus provident pariatur excepturi. Tenetur accusamus animi quisquam in, sequi incidunt reprehenderit perspiciatis repellat eveniet vero, amet magnam tempora deserunt totam dolorem, unde, eaque error! Quisquam possimus ea unde libero labore magni laudantium, a eius reiciendis. Recusandae soluta enim quibusdam fuga quia! Unde libero corporis veritatis molestias cupiditate corrupti commodi asperiores aperiam eveniet, id dolorum velit dolores deleniti fugiat incidunt, sequi expedita architecto. Temporibus doloribus ipsum necessitatibus repudiandae, quaerat aspernatur impedit eaque commodi explicabo. Consequuntur accusantium eum adipisci, eius illo.
      </p>
    </div>
  </section>
);

export default About;
