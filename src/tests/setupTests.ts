// colocando fetch de maneira global,disponivel para os testes
import { fetch, Headers, Request, Response } from 'cross-fetch';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

import '@testing-library/jest-dom/extend-expect'