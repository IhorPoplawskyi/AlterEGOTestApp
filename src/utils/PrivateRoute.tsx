import React from 'react'
import { useAppSelector } from '../store/store'
import { Navigate } from 'react-router-dom'

interface Props {
  component: React.ComponentType
  path?: string
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
  const logged = useAppSelector(state => state.profilePageSlice.logged)

  if (logged) {
    return <RouteComponent />
  }

  return <Navigate to="/" />
} 