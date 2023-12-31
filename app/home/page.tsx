import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  // to dynamically generate metadata
  return {
    title: 'Home',
    description: 'r-cloud home page',
    alternates: {
      canonical: '/home',
    },
  };
}

interface Props { };

export default function Home({ }: Props) {
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
}
