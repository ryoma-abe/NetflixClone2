import { Layout } from "./Layout";

type Props = {
  fetchUrl: string;
  title: string;
  isLargeRow?: boolean;
};

export const Row = ({ fetchUrl, title, isLargeRow }: Props) => {
  return <Layout title={title} isLargeRow={isLargeRow} fetchUrl={fetchUrl} />;
};
