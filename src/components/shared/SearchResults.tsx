import { Models } from 'appwrite'
import { Loader } from 'lucide-react'
import React from 'react'

type SearchResultsProps = {
    isSeachFetching: boolean,
    searchedPosts: Models.Document[]
}

const SearchResults = ({ isSeachFetching, searchedPosts }: SearchResultsProps) => {
    if (isSeachFetching) return <Loader />
    
    if (searchedPosts && searchedPosts.documents.length > 0)
        return (
            <GridPostList posts={searchedPosts.documents} />
    )
  return (
    <p className='text-light-4 mt-10 text-center w-full'>
      No results found
    </p>
  )
}

export default SearchResults
