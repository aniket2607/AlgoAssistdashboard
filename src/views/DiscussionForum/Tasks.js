import React from 'react';
import PropTypes from 'prop-types';

import { 
    Container,
    Row,
    Col
} from './comp';

// import { HeaderMain } from "../../components/HeaderMain";

import TasksList from './TasksList';
// import { ProjectsLeftNav } from "../../components/Projects/ProjectsLeftNav";
// import { ProjectsSmHeader } from "../../components/Projects/ProjectsSmHeader";

const Tasks = (props) => (
    <React.Fragment>
        <Container>
            {/* <HeaderMain 
                title="Tasks"
                className="mb-5 mt-4"
            /> */}
            <Row>
                {/* <Col lg={ 3 }>
                    <ProjectsLeftNav />
                </Col> */}
                <Col lg={ 8 }>
                    {/* <ProjectsSmHeader
                        subTitle="Projects"
                            subTitleLink="/apps/projects/list"
                        title="Tasks List" 
                        linkList="/apps/tasks/list"
                        btnShowKanban
                    /> */}

                    
                            <TasksList /> 
                    
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);
Tasks.propTypes = {
    match: PropTypes.object.isRequired
};

export default Tasks;