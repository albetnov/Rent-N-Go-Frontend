import { Helmet } from "react-helmet-async";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <Helmet>
      <title>Rent-N-Go | {title}</title>
    </Helmet>
  );
}
