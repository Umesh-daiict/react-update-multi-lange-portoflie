import React from 'react';
import { Icon } from '@iconify/react';
import angularIcon from '@iconify/icons-logos/angular-icon';
import reactIcon from '@iconify/icons-logos/react';
import nodeJsIcon from '@iconify/icons-logos/nodejs-icon';
import profilePic from '../assets/images/myProfile.jpg';
import JsIcon from '@iconify/icons-logos/javascript';
import typeIcon from '@iconify/icons-logos/typescript-icon';
import { Col, Container, Row } from 'react-bootstrap';

const About = (props) => {
  let sectionName = '';
  let hello = '';
  let about = '';
  let devName = '';

  if (props.resumeBasicInfo) {
    sectionName = props.resumeBasicInfo.section_name.about;
    hello = props.resumeBasicInfo.description_header;
    about = props.resumeBasicInfo.description;
    devName = props.resumeBasicInfo.dev_name;
  }

  return (
    <section id='about'>
      <div className='col-md-12'>
        <h1 style={{ color: 'black' }}>
          <span>{sectionName}</span>
        </h1>
        <div className='row center mx-auto mb-5'>
          <div className='col-md-4 mb-5 center'>
            <div className='polaroid'>
              <span>
                <img
                  height='250px'
                  width={'350px'}
                  src={profilePic}
                  alt='Avatar placeholder'
                />
                <p
                  style={{ cursor: 'auto', paddingTop: '10px', color: '' }}
                  className='wave'>
                  {devName}
                </p>

                <Row>
                  {[
                    { id: 1, icon: angularIcon, title: 'Angular' },
                    { id: 2, icon: reactIcon, title: 'React' },
                    { id: 3, icon: nodeJsIcon, title: 'NodeJs' },
                    { id: 4, icon: JsIcon, title: 'Javascript' },
                    { id: 5, icon: typeIcon, title: 'Typescript' },
                  ].map((skill) => (
                    <Col key={skill.id} xs={6} lg={4} className='mb-3'>
                      <div className='text-center'>
                        <Icon icon={skill.icon} style={{ fontSize: '400%' }} />
                        <p className='mt-2' style={{ color: 'black', fontSize: '18px' }}>
                          {skill.title}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </span>
            </div>
            <div className='col-md-10'>
              <div className='card'>
                <div className='card-header'>
                  <span
                    className='iconify'
                    data-icon='emojione:red-circle'
                    data-inline='false'></span>
                  &nbsp;
                  <span
                    className='iconify'
                    data-icon='twemoji:yellow-circle'
                    data-inline='false'></span>
                  &nbsp;
                  <span
                    className='iconify'
                    data-icon='twemoji:green-circle'
                    data-inline='false'></span>
                </div>
                <div
                  className='card-body font-trebuchet text-justify ml-3 mr-3'
                  style={{
                    height: 'auto',
                    fontSize: '132%',
                    lineHeight: '200%',
                  }}>
                  <br />
                  <span className='wave'>{hello} :) </span>
                  <br />
                  <br />
                  {about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
