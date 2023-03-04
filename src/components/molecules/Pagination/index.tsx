import {
  PaginationContainer,
  PaginationButton,
  PaginationList,
  PaginationListItem,
} from "./styles";

interface PaginationProps {
  page: number;
  pages: number[];
  handleAtivePage: (page: number) => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

const Pagination = ({
  page,
  pages,
  handleAtivePage,
  handlePrevPage,
  handleNextPage,
}: PaginationProps) => {
  return (
    <PaginationContainer>
      <PaginationButton onClick={handlePrevPage}>prev</PaginationButton>
      <PaginationList>
        {pages.map((item) => (
          <PaginationListItem
            active={page === item}
            onClick={() => handleAtivePage(item)}
            key={item}
          >
            {item}
          </PaginationListItem>
        ))}
      </PaginationList>
      <PaginationButton onClick={handleNextPage}>next</PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
