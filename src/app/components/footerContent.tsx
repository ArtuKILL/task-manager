import Link from "next/link";

export interface Term {
  path: string;
  label: string;
}

interface FooterContentProps {
  title: string;
  terms: Term[];
}

export default function FooterContent({ title, terms }: FooterContentProps) {

  const termElements = terms.map(
    (term, index) => (
      <Link href={term.path} key={`term-${index}`}>
        <li>
          {term.label}
        </li>
      </Link>
    )
  );

  return (
    <div className="text-white">
      <h6 className="font-semibold text-xl text-blue-100 mb-3">
        {title}
      </h6>
      <ul>
        {termElements}
      </ul>
    </div>
  );
}
