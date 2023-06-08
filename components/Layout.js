import React from 'react'
import NavigationCard from './NavigationCard'

const Layout = ({children, hideNavigation}) => {
  let rightColumnClasses = ''
  if(hideNavigation) {
    rightColumnClasses += 'w-full'
  }else {
    rightColumnClasses += 'mx-4 md:mx-0 md:w-3/4'
  }
  return (
    <div className="md:flex mt-4 max-w-4xl mx-auto gap-6 mb-24 md:mb-0">
      {!hideNavigation && (
        <div className="md:w-1/4 bottom-0 fixed w-full -mb-5 md:static">
        <NavigationCard />
      </div>
      )}
        <div className={rightColumnClasses}>
          {children}
        </div>
      </div>
  )
}

export default Layout
