import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
} from "@tremor/react";
import Link from "next/link";
import Image from "next/image";


const GuideContent = () => {
  return (
    <>
      <p>
        1. 打开 Telegram Desktop <br/>
        macOS 用户请下载{" "}
        <Link
          href="https://apps.apple.com/us/app/telegram-lite/id946399090?mt=12"
          target="_blank"
          rel="noopener noreferer"
          className='cursor-pointer text-slate-800 underline'
        >Telegram Lite
        </Link>
        <br/>
      </p>
      <p>
        2. 点击菜单 - Settings - Advanced - Export Telegram Data <br />
          <Image src='/img/guide.png' alt="export telegram data" width={400} height={300} />
      </p>
        <br />
        <p>
            3. 在打开的提示框中，仅勾选 ”Personal Chats“，并选择导出 JSON 格式
            <Image src='/img/guide1.png' alt='personal chats'  width={400} height={300} />
            <Image src='/img/guide2.png' alt='export json'  width={400} height={300} />
        </p>
    </>
  );
};
const Guide = () => {
  return (
    <div>
      <AccordionList className="my-4 max-w-sm text-sm">
        <Accordion>
          <AccordionHeader>如何导出聊天记录文件？</AccordionHeader>
          <AccordionBody>
            <GuideContent />
          </AccordionBody>
        </Accordion>
      </AccordionList>
    </div>
  );
};

export default Guide;