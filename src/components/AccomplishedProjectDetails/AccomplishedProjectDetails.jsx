import React, { useState, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import Carousel from "react-multi-carousel";
import { Hearts } from 'react-loader-spinner';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslations, getDownloadableUrls } from '../../hooks';
import './AccomplishedProjectDetails.scss';

function AccomplishedProjectDetails() {
  let { id } = useParams();
  const navigate = useNavigate();
  const translate = useTranslations();
  const [project, setProject] = useState();
  const [loading, setLoading] = useState(true);
  const projects = translate('accomplishedProjects.projects');

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => (async () => {
    let project = projects.find(p => p.id === id);
    
    const _urrls = await getDownloadableUrls(id);
    console.log(_urrls);

    if (!project) {
      navigate('../not-found');
      return
    }

    setProject(project);
    setLoading(false);
  })(), [id]);


  if (loading) {
    return (
      <div className="loader">
        <Hearts
          height="80"
          width="80"
          color="#00b0ed"
        />
      </div>
    );
  }

  if (!project) return null;

  const images = project.images.map(src => {
    return (
      <div className="image" key={src}>
        <img src={src} alt="" />
      </div>
    )
  });

  return (
    <div className='accomplishedProjectDetails'>
      <div className="left">
        <Carousel responsive={responsive} autoPlay >
          {images}
        </Carousel>
      </div>

      <div className="right">
        <div className="data">
          <div className="date">
            {project.date}
          </div>
          <div className="title">
            {project.label}
          </div>
          <div className="description">
            {project.description}
          </div>
        </div>

        <div className="buttons">
          <Button className="next btn" onClick={() => {
            navigate(`../project/${project.nextProject}`);
            setLoading(true);
          }}>
            {translate('accomplishedProjects.next')}
          </Button>

          <Button className="main btn" outlined onClick={() => navigate('..')}>
            {translate('accomplishedProjects.main')}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AccomplishedProjectDetails;
