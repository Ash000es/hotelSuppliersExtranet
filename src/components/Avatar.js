import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { deepOrange, deepPurple } from '@material-ui/core/colors'
import { AuthContext } from '../providers/AuthProvider'
import { DropDownAvatarItems } from './dropDownAvatarItems'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  }
}))

export const LetterAvatars = () => {
  const auth = useContext(AuthContext)
  const { authState } = auth
  const classes = useStyles()
  const fallBackAvatar = 'A'

  return (
    <div className={classes.root}>
      <Avatar className={classes.orange}>{authState.userInfo.firstName || fallBackAvatar}</Avatar>
      <DropDownAvatarItems />
    </div>
  )
}
