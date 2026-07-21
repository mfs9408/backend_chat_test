export interface ChatRequestBody {
  prompt: string;
}

export interface ChatResponseBody {
  response: string;
  version: string;
}

export interface ErrorResponseBody {
  message: string;
}
