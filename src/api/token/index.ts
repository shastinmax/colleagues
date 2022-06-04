import { PathAdditionalEndpoint } from '../../enums/Additional_Endpoints';
import { GetTokenType } from '../form/types';

import { instance } from 'api/config';

export const tokenApi = {
  getToken() {
    return instance.get<GetTokenType>(`${PathAdditionalEndpoint.TOKEN}`);
  },
};
