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
            active={page === item + 1}
            onClick={() => handleAtivePage(item + 1)}
            key={item + 1}
          >
            {item + 1}
          </PaginationListItem>
        ))}
      </PaginationList>
      <PaginationButton onClick={handleNextPage}>next</PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
