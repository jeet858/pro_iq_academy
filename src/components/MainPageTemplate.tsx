import React from "react";
import Header from "./elements/Header";

interface MainPageTemplateProps {
  children?: JSX.Element[] | JSX.Element;
}

const MainPageTemplate: React.FunctionComponent<MainPageTemplateProps> = (
  props,
) => {
  return (
    <div className="flex flex-col overflow-y-auto overflow-x-hidden">
      <Header />
      {props.children}
    </div>
  );
};

export default MainPageTemplate;
