import { environment } from 'src/environments/environment'

const API = environment.baseUrl

const V1 = '/v1'

const API_V1 = API + V1

const REGISTRATION = '/registration'

export const API_REGISTRATIONS = API_V1 + REGISTRATION
