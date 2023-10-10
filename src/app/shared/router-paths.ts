export const EPartialRoutes = {
  MAIN: 'main',
  REGISTRATION_PAGE: 'registration',
}

export const EFullRoutes = {
  REGISTRATION_PAGE: [EPartialRoutes.REGISTRATION_PAGE].join('/'),
  MAIN: [EPartialRoutes.MAIN].join('/'),
}
