import React from 'react'
import Image from 'next/image'
const SearchButton = ({otherClasses}) => {
  return (
    <button
    type='button'
    className={`-ml-3 z-10 ${otherClasses}`}
    >
       <Image 
       src='/magnifying-glass.svg'
       alt="magnifying glass"
       height={40}
       width={40}
       className="object-contain" />
    </button>
  )
}

export default SearchButton