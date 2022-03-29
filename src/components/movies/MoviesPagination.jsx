import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import ReactPaginate from "react-paginate";
import "../../pagination.css";
import { useSearchParams } from "react-router-dom";

const MoviesPagination = ({ data, setPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickPagination = (isNext) => {
    const nextPage = isNext.nextSelectedPage !== undefined ? isNext.nextSelectedPage + 1 : isNext.selected + 1;
    searchParams.set("page", nextPage);
    setSearchParams(searchParams);
    setPage(nextPage);
  };

  return (
    <ReactPaginate
      previousLabel={<ArrowLeftIcon {...arrowIconProps} />}
      nextLabel={<ArrowRightIcon {...arrowIconProps} />}
      pageCount={data.total_pages < 500 ? data.total_pages : 500}
      onClick={handleClickPagination}
      {...paginateProps}
      forcePage={parseInt(searchParams.get("page")) - 1}
    />
  );
};
export default React.memo(MoviesPagination);

const paginateProps = {
  breakLabel: "...",
  pageRangeDisplayed: 2,
  renderOnZeroPageCount: null,
  containerClassName: "container",
  pageClassName: "page-li",
  activeClassName: "page-active",
  pageLinkClassName: "page-li-a",
};

const arrowIconProps = {
  color: "brand.primary",
  boxSize: "15px",
};
