import React from 'react'
import './style.css'

const Pagination = ({pageNo, setPageNo, totalPages}) => {

  const handlePrev = ()=> {
    if (pageNo < 2) return
    setPageNo(prev => prev - 1)
  }

  const handleNext = ()=> {
    if (pageNo > totalPages - 1) return
    setPageNo(prev => prev + 1)
  }

  const handlePageChange = (page) => {
    if(page >= 1 && page <= totalPages) {
      setPageNo(page)
    }
  }

  const renderPageNumber = ()=> {
    const PageNumbers = [];
    const maxPageNumbersToShow = 5;

    if(totalPages <= maxPageNumbersToShow) {
      // Show all pages if total pages are less than or equal to the max number to show
      for(let i = 1; i <= totalPages; i++) {
        PageNumbers.push(
          <li key={i} >
            <button 
              onClick={() => handlePageChange(i)} 
              className={`pagination-button ${pageNo === i ? 'active' : ""} `}>
              {i}
            </button>
        </li>
        )
      }
    } else {
      // For large numbers of pages, display ellipsis
      const startPage = Math.max(2, pageNo - 1);
      const endPage = Math.min(totalPages - 1, pageNo + 1)
      const halfWindow = Math.floor((maxPageNumbersToShow - 3) / 2);


      // first page
      PageNumbers.push(
        <li>
          <button 
            onClick={() => handlePageChange(1)} 
            className={`pagination-button ${pageNo === 1 ? 'active' : ""} `}>
            1
          </button>
        </li>
      )

      // Determine when to show the ellipsis and middle pages
        if (pageNo <= 2 + halfWindow) {
          // Case 1: Current page is near the start
          for (let i = 2; i <= 2 + halfWindow + 1; i++) {
            PageNumbers.push(
              <li key={i} >
                  <button 
                    onClick={() => handlePageChange(i)} 
                    className={`pagination-button ${pageNo === i ? 'active' : ""} `}>
                    {i}
                  </button>
              </li>
            );
          }
          PageNumbers.push(
                <li>
                  <button 
                    className={`pagination-button`}>
                    ...
                  </button>
                </li>
          );
        } else if (pageNo >= totalPages - 1 - halfWindow) {
          // Case 2: Current page is near the end
          PageNumbers.push(
            <li>
            <button 
              className={`pagination-button`}>
              ...
            </button>
          </li>
          );
          for (let i = totalPages - (2 + halfWindow); i < totalPages; i++) {
            PageNumbers.push(
              <li key={i} >
                  <button 
                    onClick={() => handlePageChange(i)} 
                    className={`pagination-button ${pageNo === i ? 'active' : ""} `}>
                    {i}
                  </button>
              </li>
            );
          }
        } else {
          // Case 3: Current page is in the middle
          PageNumbers.push(
                <li>
                  <button 
                    className={`pagination-button`}>
                    ...
                  </button>
                </li>
          );
          for (let i = pageNo - halfWindow; i <= pageNo + halfWindow; i++) {
            PageNumbers.push(
              <li key={i} >
              <button 
                onClick={() => handlePageChange(i)} 
                className={`pagination-button ${pageNo === i ? 'active' : ""} `}>
                {i}
              </button>
          </li>
            );
          }
          PageNumbers.push(
            <li>
            <button 
              className={`pagination-button`}>
              ...
            </button>
          </li>
          );
        }


      // last page
      if(totalPages > 1) {
        PageNumbers.push(
          <li>
            <button 
              onClick={() => handlePageChange(totalPages)} 
              className={`pagination-button ${pageNo === totalPages ? 'active' : ""} `}>
              {totalPages}
            </button>
          </li>
        )
      }
    }

    return PageNumbers
  }

  return (
    <>
      <ul className='pagination-container'>
        <li onClick={handlePrev}>
          <button className='pagination-item'>
            <img width={20} height={20} src={'./arrow-left.png'} alt={'arrow-left'} />
          </button>
        </li>
        {renderPageNumber()}
        <li onClick={handleNext}>
          <button className='pagination-item'>
            <img width={20} height={20} src={'./arrow-right-table.png'} alt={'arrow-right-table'} />
          </button>
        </li>
      </ul>
    </>
  )
}

export default Pagination
