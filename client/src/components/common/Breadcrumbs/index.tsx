import React from "react";
import styled from "styled-components";
import { FormattedCategory } from "../../../types/category";

const BreadCrumbsContainer = styled.div`
  display: flex;
  margin: 16px 0;
`;

const StyledSection = styled.a`
  position: relative;
  text-decoration: none;
  color: #999999;
  font-size: 14px;

  &:not(:last-child) {
    margin-right: 24px;
  }

  &:not(:last-child):after {
    content: ">";
    position: absolute;
    right: -16px;
  }
`;

function BreadcrumbSection({ name, id }: FormattedCategory) {
  return (
    <StyledSection key={id} href="#">
      {name}
    </StyledSection>
  );
}

type BreadcrumbsProps = {
  sections: Array<FormattedCategory>;
};

export default function Breadcrumbs({ sections }: BreadcrumbsProps) {
  return (
    <BreadCrumbsContainer>
      {sections.map(BreadcrumbSection)}
    </BreadCrumbsContainer>
  );
}
