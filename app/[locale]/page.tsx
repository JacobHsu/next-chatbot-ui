"use client";

import { ChatbotUISVG } from "@/components/icons/chatbotui-svg"
import { IconArrowRight } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import initTranslations from '../i18n';
interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({ params: { locale } }: HomeProps) {
  const { theme } = useTheme();
  const { t } = await initTranslations(locale, ['home']);
  return (
    <div className="flex size-full flex-col items-center justify-center p-8 sm:p-20">
      <div>
        <ChatbotUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} />
      </div>

      <div className="mt-2 text-4xl font-bold">Chatbot UI</div>
      <Link
        className="mt-4 flex w-[200px] items-center justify-center rounded-md bg-blue-500 p-2 font-semibold"
        href="/login"
      >
        Start Chatting {t('lang')}
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  );
}
