import { CodeComponent, CodeProps } from "react-markdown/lib/ast-to-react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";

const CodeBlock = ({
  node,
  inline,
  className,
  children,
  ...props
}: CodeProps) => {
  return !inline ? (
    <SyntaxHighlighter
      style={darcula}
      language="javascript"
      PreTag="div"
      {...props}>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default CodeBlock;
