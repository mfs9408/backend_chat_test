import { Request, Response } from "express";
import * as chatService from "../services/chat.service";
import {
  ChatRequestBody,
  ChatResponseBody,
  ErrorResponseBody,
} from "../dtos/chat";

export const generateResponse = async (
  req: Request<{}, ChatResponseBody | ErrorResponseBody, ChatRequestBody>,
  res: Response<ChatResponseBody | ErrorResponseBody>,
) => {
  try {
    const { prompt } = req.body;

    if (!prompt?.trim()) {
      return res.status(400).json({
        message: "Prompt is required",
      });
    }

    const response = await chatService.generate(prompt);

    return res.json({
      version: "4.1",
      response,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
