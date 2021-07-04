import React from 'react'
import {
    AboutContainer,
    AboutWrapper,
    AboutDescription,
    WhatBox,
    WhatIcon,
    AboutMe,
    AboutP,
    AboutSpan,
    WhatIcons,
    SkillBox,
    WhatICanDo,
    CandoBox, 
    Whath2,
    WhatP,
    PictureBox,
    Picture,
    TextBox,
    SkillTree,
    SkillUls,
    SkillLists,
    SkillUl,
    SkillList
} from './AboutElement'

const About = () => {
    return (
        <AboutContainer>
            <AboutWrapper>

                {/* My personal Skills */}
                <WhatBox>
                    <CandoBox>
                        <WhatIcons>
                            <WhatIcon className="fas fa-fighter-jet"></WhatIcon>
                        </WhatIcons>
                        <WhatICanDo>
                            <Whath2>Fast Learner</Whath2>
                            <WhatP>
                            Display an ability to learn rapidly and adapt quickly to changing situations
                            </WhatP>
                        </WhatICanDo>
                    </CandoBox>
                    <CandoBox>
                        <WhatIcons>
                            <WhatIcon className="fas fa-user-shield"></WhatIcon>
                        </WhatIcons>
                        <WhatICanDo>
                        <Whath2>Project Management</Whath2>
                            <WhatP>
                            Effectively blend management skills with technical expertise
                            </WhatP>
                        </WhatICanDo>
                    </CandoBox>
                    <CandoBox>
                        <WhatIcons>
                            <WhatIcon className="fas fa-exclamation-circle"></WhatIcon>
                        </WhatIcons>
                        <WhatICanDo>
                            <Whath2>Problem Solver</Whath2>
                            <WhatP>
                            Excels in creative thinking and problem solving
                            </WhatP>
                        </WhatICanDo>
                    </CandoBox>
                    <CandoBox>
                        <WhatIcons>
                            <WhatIcon className="fas fa-tasks"></WhatIcon>
                        </WhatIcons>
                        <WhatICanDo>
                            <Whath2>Motivation</Whath2>
                            <WhatP>
                            Strive for maximum drive in fulfilling job
                            responsibilities
                            </WhatP>
                        </WhatICanDo>
                    </CandoBox>

                </WhatBox>



                {/* breif of myself */}
                <AboutDescription>
                    <AboutMe>
                        <TextBox>
                            <PictureBox>
                                <Picture></Picture>
                            </PictureBox>

                            <AboutP>Full Stack Web Developer leveraging a background in project management. Recognized for <AboutSpan>leadership</AboutSpan>. Recently received
                            a Certificate in <AboutSpan>Web Development</AboutSpan> from the University of Austin. Excellent <AboutSpan>interpersonal communication skills</AboutSpan> and 
                            <AboutSpan> collaborator</AboutSpan> who works well on team-based projects as well as independently. Recognized for <AboutSpan>proven complex
                            problem-solving abilities</AboutSpan> to contribute effectively as a part of a fast-paced, quality-driven team.</AboutP>
                        </TextBox>                        
                            
                    </AboutMe>

                    {/* My Technical Skills */}
                    <SkillBox>
                        <SkillTree>
                            
                            <SkillUls>
                                <SkillLists>
                                    Front End
                                    <SkillUl>
                                        <SkillList>HTML/CSS</SkillList>
                                        <SkillList>SASS</SkillList>
                                        <SkillList>Javascript</SkillList>
                                        <SkillList>React.js</SkillList>
                                        <SkillList>Styled Components</SkillList>
                                    </SkillUl>
                                </SkillLists>
                                <SkillLists>
                                    Back End
                                    <SkillUl>
                                        <SkillList>Javascript</SkillList>
                                        <SkillList>Node.js</SkillList>
                                        <SkillList>Express.Js</SkillList>
                                        <SkillList>mySQL</SkillList>
                                        <SkillList>Mongoose</SkillList>
                                    </SkillUl>
                                </SkillLists>
                                <SkillLists>
                                    Other
                                    <SkillUl>
                                        <SkillList>Git</SkillList>
                                        <SkillList>Github</SkillList>
                                        <SkillList>Heroku</SkillList>
                                        <SkillList>Adobe Suites</SkillList>
                                        <SkillList>MongoDB</SkillList>
                                    </SkillUl>
                                </SkillLists>
                            </SkillUls>
                        </SkillTree>
                    </SkillBox>



                </ AboutDescription>                    
            </ AboutWrapper>
        </AboutContainer>
           
    )
}

export default About



