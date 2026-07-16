import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, telegram, task } = await req.json();

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json(
        { error: "Telegram credentials are missing." },
        { status: 500 }
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
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Telegram API error");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}