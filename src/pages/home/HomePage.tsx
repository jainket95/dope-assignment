import type { FC } from 'react';
import { Link } from 'react-router-dom';

const cards = [
  {
    title: 'Optimized Table',
    desc: 'Baseline optimized React rendering using memoization and derived state.',
    route: '/basic',
  },
  {
    title: 'Infinite Scroll Table',
    desc: 'Progressive loading using Intersection Observer for large datasets.',
    route: '/infinite',
  },
  {
    title: 'Virtualized Table',
    desc: 'High-performance virtualization using modern virtualization techniques.',
    route: '/virtualized',
  },
];

const HomePage: FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-y-10">
      <h1 className="text-3xl font-medium mb-12">Performance Strategy Showcase</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {cards.map((card) => (
          <Link
            key={card.route}
            to={card.route}
            className="border rounded-xl p-6 hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
