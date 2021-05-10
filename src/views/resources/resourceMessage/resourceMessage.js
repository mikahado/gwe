import React from 'react';

import './resourceMessage.css';

export function ResourceMessage(props){

  function getMessage() {

    let allFilters = true;

    Object.keys(props.filters).forEach( categoryKey =>{
      Object.keys(props.filters[categoryKey]).forEach( filterKey =>{
        if (!props.filters[categoryKey][filterKey]){
          allFilters = false;
        }
      })
    })

    console.log( allFilters );

    return `${allFilters ? 'Currently showing all resources.' : 'Check more boxes above to see more resources.'} Uncheck boxes above to narrow your search.`;
  }

  return <p className={'resourceMessage'}>{getMessage()}</p>
}