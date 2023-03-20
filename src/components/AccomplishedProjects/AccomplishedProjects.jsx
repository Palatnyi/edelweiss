import React, { useEffect, useState } from 'react';
import Button from '../Button/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { Hearts } from 'react-loader-spinner';
import { useTranslations, getDownloadableUrls } from '../../hooks';
import './AccomplishedProjects.scss';

function SingleProject({ src, date, label, onClick }) {
  const translate = useTranslations();

  return (
    <div className="single_project">
      <div className="img">
        <img src={src} alt="" />
      </div>
      <div className="date">
        {date}
      </div>
      <div className="description">
        {label}
      </div>
      <div className="button-holder" >
        <Button onClick={onClick}>
          {translate('accomplishedProjects.checkSingleReportLabel')}
        </Button>
      </div>
    </div>
  );
}

function AccomplishedProjects() {
  const navigate = useNavigate();
  const translate = useTranslations();
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const projects = translate('accomplishedProjects.projects');

  useEffect(() => (async () => {
    const urls = await getDownloadableUrls('cover_photos');
    console.log(urls);
    setUrls(urls);
    setLoading(false);
  })(), []);

  if (loading) {
    return (
      <div className="projects-loading">
        <Hearts
          height="80"
          width="80"
          color="#00b0ed"
        />
      </div>
    )
  }

  return (
    <div className="projects">
      <div className="projects-label">
        {translate('accomplishedProjects.label')}
      </div>
      <div className="projects-holder">
        {projects.map(proj => {
          const src = urls.find(url => url.includes(proj.id))
          return (
            <SingleProject
              src={src}
              date={proj.date}
              label={proj.label}
              onClick={() => { 
                navigate(`project/${proj.id}`)
              }}
            />
          )
        })}
      </div>
    </div>
  );
}

export default AccomplishedProjects;
