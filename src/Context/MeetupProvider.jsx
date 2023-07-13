import React, { createContext } from 'react'

export const meetupContext=createContext();

export const MeetupProvider = ({children}) => {
  return (
    <meetupContext.Provider>
        {children}
    </meetupContext.Provider>
  )
}
