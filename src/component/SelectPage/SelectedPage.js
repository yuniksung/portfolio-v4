import React from "react";

import Projects from "../projects/projects"
import Etcportfolio from '../projects/etcportfolio'
import Hero from '../Hero/Hero'

const components = {
  AboutPage: Hero,
  ProjectsPage: Projects,
  Etcportfolio: Etcportfolio,
};

//Use this eventually to dynamically display the selected component/page
function SelectedPage(props) {
  const SelectPage = components[props.currentPage];
  return <SelectPage />;
}

export default SelectedPage;