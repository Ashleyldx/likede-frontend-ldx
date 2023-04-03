// 保存用户内容
import Cookies from 'js-cookie'

const TokenKey = 'likede_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

const UserName = 'likede_username'

export function getUserName() {
  return Cookies.get(UserName)
}

export function setUserName(username) {
  return Cookies.set(UserName, username)
}

export function removeUserName() {
  return Cookies.remove(UserName)
}

const UserId = 'likede_userid'

export function getUserId() {
  return Cookies.get(UserId)
}

export function setUserId(userId) {
  return Cookies.set(UserId, userId)
}

export function removeUserId() {
  return Cookies.remove(UserId)
}

