import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FormattedCategory } from "../../../types/category";

const BreadCrumbsContainer = styled.div`
  display: flex;
  margin: 16px 0;
`;

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: #999999;
  font-size: 14px;

  &:last-child:not(:first-child) {
    font-weight: bold;
  }

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
  const encodedName = encodeURIComponent(name);
  return (
    <StyledLink key={id} to={`/items?search=${encodedName}`}>
      {name}
    </StyledLink>
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
