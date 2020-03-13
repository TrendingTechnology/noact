import { footer, span, a, p } from "../../../src/noact-elements"

export type FooterProps = {}

export const Footer = ({}: FooterProps) =>
  footer(
    {},
    p(
      { className: "text-centre" },
      span({ txt: "© " }),
      a({ txt: "ms-jpq", href: "https://ms-jpq.github.io" }),
    ),
  )
