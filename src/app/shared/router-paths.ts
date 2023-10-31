export const EPartialRoutes = {
  MAIN: 'main',
  LOGIN: 'login',
  REGISTRATION: 'registration',
}

export const EFullRoutes = {
  MAIN: [EPartialRoutes.MAIN],
  LOGIN: [EPartialRoutes.LOGIN],
  REGISTRATION: [EPartialRoutes.REGISTRATION],
}
