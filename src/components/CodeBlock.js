import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
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
  },
};

export default CodeBlock;
