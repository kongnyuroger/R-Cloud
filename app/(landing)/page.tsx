import Link from 'next/link';

interface Props { };

export default function Landing({ }: Props) {
  return (
    <main>
      <h1 className='text-blue-600'>Landing page.</h1>

      <Link href='/home' className='border border-blue-600 mt-8'>My R-Cloud</Link>
    </main>
  );
}
