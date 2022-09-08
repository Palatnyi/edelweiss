import React, { useEffect } from 'react';
import { useTranslations } from '../../hooks';
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import './AccomplishedProjects.scss';

const storage = getStorage();

function AccomplishedProjects() {
	const translate = useTranslations();
  const getUrls = async () => {
    const listRef = ref(storage, 'ololo');
    const res = await listAll(listRef)

    res.items.forEach(async (item) => {
      const imgRef = ref(storage, `${item.fullPath}`);
      const url = await getDownloadURL(imgRef);
      console.log(url);
    });
  }

  useEffect(() => {
    getUrls()
  }, []);

  // const gsReference = ref(storage, 'https://firebasestorage.googleapis.com/v0/b/dopomoga2022.appspot.com/o/andrii.jpg');

  const label = translate('accomplishedProjects.label');
  return (
    <div className="projects">
      <div className="projects-label">
        {label}
      </div>
    </div>
  );
}

export default AccomplishedProjects;