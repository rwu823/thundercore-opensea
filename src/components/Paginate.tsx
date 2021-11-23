import React, { useCallback, useState } from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'

import styled from '@emotion/styled'

const ReactPaginateStyled = styled(ReactPaginate)`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  justify-content: center;

  > li {
    > a {
      cursor: pointer;
      width: 35px;
      height: 35px;
      color: blue;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid blue;
    }

    &.page:not(:nth-last-child(2)),
    &.break {
      > a {
        border-right: none;
      }
    }

    &.previous {
      margin-right: 2rem;
    }

    &.next {
      margin-left: 2rem;
    }

    &.selected {
      background: blue;
      cursor: default;

      a {
        color: #fff;
      }
    }
  }
`

export type PaginateProps = {} & ReactPaginateProps

export const Paginate: React.FC<Partial<PaginateProps>> = ({
  // pageCount,
  pageRangeDisplayed,
  ...props
}) => (
  <ReactPaginateStyled
    nextLabel={'>'}
    pageClassName="page"
    pageCount={99}
    pageRangeDisplayed={5}
    previousLabel={'<'}
    {...props}
  />
)

export const usePaginate = (defaultPage: number = 0) => {
  const [page, setPage] = useState(defaultPage)

  const onPageChange = useCallback<PaginateProps['onPageChange']>(
    ({ selected }) => {
      setPage(selected)
    },
    [],
  )

  return {
    initialPage: defaultPage,
    onPageChange,
    page,
  }
}
