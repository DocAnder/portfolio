import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export interface ConteudoMdProps {
    markdown: string;
}

export default function ConteudoMd(props: ConteudoMdProps) {
    return (
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} skipHtml={false}>
            {props.markdown}
        </Markdown>
    )
}