import * as React from 'react';

import {
  Container,
  ContainerProps,
  Grid,
  GridProps,
  Typography,
  styled,
} from '@mui/material';

import ContainerGrid from '../common/ContainerGrid';
import SkillProgress from '../common/SkillProgress';
// custom icons
import IllustratorCCIcon from '../icon/IllustratorCC';
import LightroomCCIcon from '../icon/LightroomCC';
import PhotoshopIcon from '../icon/Photoshop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faReact,
  faNode,
  faAppStore,
} from '@fortawesome/free-brands-svg-icons';
// context
import ComponentsContext from '../../utils/context/componentsContext';

interface SkillsProps {}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: '5rem',
  marginTop: '5rem',
  scrollMarginTop: '2rem',
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
}));

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: (
        <FontAwesomeIcon
          icon={faJsSquare}
          style={{
            color: '#F7DF1E',
            fontSize: '2rem',
          }}
        />
      ),
      title: 'JS & TS',
      progressValue: 95,
    },
    {
      Icon: (
        <FontAwesomeIcon
          icon={faReact}
          style={{
            color: '#61DAFB',
            fontSize: '2rem',
          }}
        />
      ),
      title: 'Front-End (React.js, Next.js, Gatsby.js)',
      progressValue: 90,
    },
    {
      Icon: (
        <FontAwesomeIcon
          icon={faNode}
          style={{
            color: '#68a063',
            fontSize: '2rem',
          }}
        />
      ),
      title: 'Back-End (Node.js, Express.js, MongoDB, MySQL)',
      progressValue: 83,
    },
    // {
    //   Icon: (
    //     <FontAwesomeIcon
    //       icon={faAppStore}
    //       style={{
    //         color: '#007AFF',
    //         fontSize: '2rem',
    //       }}
    //     />
    //   ),
    //   title: 'React Native',
    //   progressValue: 70,
    // },
  ];

  return (
    <>
      <CustomContainer id='skills' maxWidth={containerMaxWidth}>
        <Typography component='h2' variant='h4' textAlign='center'>
          توانایی ها
        </Typography>
        <ContainerGrid marginTop='2rem'>
          {skills.map((skill, index) => (
            <CustomGridItem
              item
              key={`${skill.title} - ${skill.progressValue} - ${index}`}
              xs={12}
              sm={6}
              md={4}
            >
              <SkillProgress
                size={100}
                value={skill.progressValue}
                Icon={skill.Icon}
                subtitle={`${skill.title} | ${skill.progressValue}%`}
              />
            </CustomGridItem>
          ))}
        </ContainerGrid>
      </CustomContainer>
    </>
  );
};

export default Skills;
