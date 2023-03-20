import React from 'react';
import Carousel from "react-multi-carousel";
import { useTranslations } from '../../hooks';

import dima from '../../images/dima.jpg';
import youra from '../../images/youra.jpg';
import anton from '../../images/anton.jpg';
import piven from '../../images/piven.jpeg';
import oksana from '../../images/oksana.jpeg';
import oleksii from '../../images/oleksii.jpeg';
import linkedin from '../../images/linkedin.png';
import shatilov from '../../images/shatilov.jpg';
import andrey from '../../images/andrii.jpg';
import "react-multi-carousel/lib/styles.css";
import './Team.scss';

function Member({ member }) {
    return (
        <div className="member">
            <div className="imgHolder">
                <img className="image" src={member.src} alt="" rel="preload" />
            </div>
            <div className="name">{member.name} {member.surname}</div>

            <div className="role">
                {member.role}
                <div className="social">
                    {member.linkedin && <div className="linkedin">
                        <img src={linkedin} onClick={() => { window.open(member.linkedin, "_blank") }} rel="preload" />
                    </div>}
                </div>
            </div>
        </div>
    );
}

function TeamMembers({ members = [] }) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    const team = members.map(member => <Member key={member.name} member={member} />);

    return (
        <React.Fragment>
            <div className="members">
                <Carousel responsive={responsive} autoPlay infinite>
                    {team}
                </Carousel>
            </div>
            <div className="membersMobile">
                {team}
            </div>
        </React.Fragment>
    );
}

function Team() {
    const translate = useTranslations();

    const teamMembers = [
        {
            src: oksana,
            name: translate("teamMembers.oksana.name"),
            surname: translate("teamMembers.oksana.surname"),

            role: translate("teamMembers.oksana.role"),
            linkedin: 'https://www.linkedin.com/in/oksanaperimova/'
        },
        {
            src: shatilov,
            name: translate("teamMembers.shatilov.name"),
            surname: translate("teamMembers.shatilov.surname"),

            role: translate("teamMembers.shatilov.role"),
            linkedin: 'https://www.linkedin.com/in/vadym-shatilov-04b685189',
            instagram: ''
        },
        {
            src: youra,
            name: translate("teamMembers.youra.name"),
            surname: translate("teamMembers.youra.surname"),

            role: translate("teamMembers.youra.role"),
            linkedin: 'https://www.linkedin.com/in/yuriy-shelmuk-52080b70',
            instagram: ''
        },
        {
            src: dima,
            name: translate("teamMembers.dima.name"),
            surname: translate("teamMembers.dima.surname"),

            role: translate("teamMembers.dima.role"),
            linkedin: 'https://www.linkedin.com/in/dmytro-savchenko-aa55691a/'
        },
        {
            src: andrey,
            name: translate("teamMembers.andrii.name"),
            surname: translate("teamMembers.andrii.surname"),

            role: translate("teamMembers.andrii.role"),
            linkedin: 'https://www.linkedin.com/in/andrii-palatnyi-9693b384/',
            instagram: ''
        }, {
            src: oleksii,
            name: translate("teamMembers.oleksii.name"),
            surname: translate("teamMembers.oleksii.surname"),

            role: translate("teamMembers.oleksii.role"),
            linkedin: 'https://www.linkedin.com/in/oleksii-palatnyi/',
            instagram: ''
        },
        {
            src: anton,
            name: translate("teamMembers.anton.name"),
            surname: translate("teamMembers.anton.surname"),

            role: translate("teamMembers.anton.role"),
            linkedin: 'https://www.linkedin.com/in/anton-pluzhnikov-5491a1a5/'
        }, {
            src: piven,
            name: translate("teamMembers.piven.name"),
            surname: translate("teamMembers.piven.surname"),

            role: translate("teamMembers.piven.role"),
            linkedin: 'https://www.linkedin.com/in/dmitry-piven-12263a95/'
        }];

    return (
        <div className="team" id="team">
            <div className="title">
                {translate("ourTeam.title")}
            </div>
            <div className="description">
                {translate("ourTeam.description")}
            </div>
            <TeamMembers members={teamMembers} />
        </div>
    );
}

export default Team;