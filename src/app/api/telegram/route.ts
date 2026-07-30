import { NextResponse } from "next/server";

type TelegramResponse = {
  ok: boolean;
  description?: string;
  error_code?: number;
};

export async function POST(req: Request) {
  try {
    const { name, telegram, task } = await req.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

    if (!botToken || !chatId) {
      return NextResponse.json(
        {
          success: false,
          error: "Telegram credentials are missing.",
        },
        { status: 500 },
      );
    }

    const text = `
🚀 Новая заявка с сайта

👤 Имя: ${name}

📱 Telegram: ${telegram}

📝 Задача:
${task}
`;

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
        cache: "no-store",
      },
    );

    const telegramResult = (await response
      .json()
      .catch(() => null)) as TelegramResponse | null;

    if (!response.ok || !telegramResult?.ok) {
      const description =
        telegramResult?.description ??
        `Telegram returned HTTP ${response.status}`;

      console.error("Telegram API error:", {
        status: response.status,
        errorCode: telegramResult?.error_code,
        description,
      });

      return NextResponse.json(
        {
          success: false,
          error: "Telegram API error",
          description,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Telegram route error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 },
    );
  }
}
