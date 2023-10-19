export const EPartialRoutes = {
  MAIN: 'main',
  LOGIN_PAGE: 'login',
}

export const EFullRoutes = {
  LOGIN_PAGE: [EPartialRoutes.LOGIN_PAGE].join('/'),
  MAIN: [EPartialRoutes.MAIN].join('/'),
}
