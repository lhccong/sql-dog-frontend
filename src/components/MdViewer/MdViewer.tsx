import React from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown-light.css';
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import {Card} from "antd";
// @ts-ignore
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// @ts-ignore
import {oneLight} from 'react-syntax-highlighter/dist/esm/styles/prism'; // 使用 GitHub 风格的高亮样式
// @ts-ignore
export const MdViewer = ({content}) => {
  return (
    <Card style={{height: "auto", maxHeight: 800, overflowY: "scroll"}} className="markdown-body">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          code({node, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                language={match[1]}
                style={oneLight}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </Card>
  );
};
