import React from 'react';
import { useTranslations } from '../../hooks';

import dan from '../../images/dan.jpeg';
import dima from '../../images/dima.jpg';
import youra from '../../images/youra.jpg';
import anton from '../../images/anton.jpg';
import piven from '../../images/piven.jpeg';
import oksana from '../../images/oksana.jpeg';
import kostya from '../../images/kostya.jpeg';
import liubov from '../../images/liubov.jpeg';
import oleksii from '../../images/oleksii.jpeg';
import linkedin from '../../images/linkedin.png';
import shatilov from '../../images/shatilov.jpg';
/*import vlad from "../../images/vlad.jpg";
import andrey from '../../images/andrey.jpeg';*/

import './Team.scss';

function Member({ member }) {
    return (
        <div className="member">
            <div className="imgHolder">
                <img className="image" src={member.src} alt="" rel="preload" />
            </div>
            <div className="name">{member.name}</div>
            <div className="surname">{member.surname}</div>

            <div className="role">{member.role}</div>
            <div className="social">
                {member.linkedin && <div className="linkedin">
                    <img src={linkedin} onClick={() => { window.open(member.linkedin, "_blank") }} rel="preload" />
                </div>}
            </div>
        </div>
    );
}

function TeamMembers({ members = [] }) {
    return (
        <div className="members">
            {members.map(member => <Member key={member.name} member={member} />)}
        </div>
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
            src: liubov,
            name: translate("teamMembers.liubov.name"),
            surname: translate("teamMembers.liubov.surname"),

            role: translate("teamMembers.liubov.role"),
            linkedin: 'https://www.linkedin.com/in/liubovrudnieva'
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
        /* {
            src: andrey,
            name: translate("teamMembers.andrii.name"),
            surname: translate("teamMembers.andrii.surname"),

            role: translate("teamMembers.andrii.role"),
            linkedin: 'https://www.linkedin.com/in/andrii-palatnyi-9693b384/',
            instagram: ''
        },*/
        {
            src: dan,
            name: translate("teamMembers.dan.name"),
            surname: translate("teamMembers.dan.surname"),

            role: translate("teamMembers.dan.role"),
            linkedin: 'https://www.linkedin.com/in/dan-fioletov-5a2530116/'
        },
        {
            src: oleksii,
            name: translate("teamMembers.oleksii.name"),
            surname: translate("teamMembers.oleksii.surname"),

            role: translate("teamMembers.oleksii.role"),
            linkedin: 'https://www.linkedin.com/in/oleksii-palatnyi/',
            instagram: ''
        }, /*{
            src: vlad,
            name: translate("teamMembers.vlad.name"),
            surname: translate("teamMembers.vlad.surname"),

            role: translate("teamMembers.vlad.role"),
            linkedin: 'https://www.linkedin.com/in/vladkasianenko/'
        },*/ {
            src: kostya,
            name: translate("teamMembers.kostya.name"),
            surname: translate("teamMembers.kostya.surname"),

            role: translate("teamMembers.kostya.role"),
            linkedin: "https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD-konstantin-ilchenko-1715a05b"
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