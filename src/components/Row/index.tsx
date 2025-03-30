import { Layout } from "./Layout";
import { useProps } from "./useProps";

type Props = {
  fetchUrl: string;
  title: string;
  isLargeRow?: boolean;
};

export const Row = ({ title, isLargeRow, fetchUrl }: Props) => {
  const { movie } = useProps({ fetchUrl });
  return <Layout title={title} isLargeRow={isLargeRow} movies={movie} />;
};
