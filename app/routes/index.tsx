import { useEffect, useState } from 'react';
import { useHydrated } from 'remix-utils';
import styles from '~/skeleton.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

function sleep(ms: number) {
  return new Promise((res, rej) => window.setTimeout(res, ms));
}

const csvAPI =
  'https://raw.githubusercontent.com/ph4un00b/data/main/1000movies.csv';

export default function Index() {
  let isHydrated = useHydrated();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => window.clearTimeout(timer);
  }, []);

  if (isHydrated && isLoaded) {
    return (
      <div>
        <h1>Welcome to Remix</h1>
        <HeaderP />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome to Remix</h1>
        <SkeletonP />
      </div>
    );
  }
}

function HeaderP() {
  return (
    <ul>
      <li>
        <a
          target="_blank"
          href="https://remix.run/tutorials/blog"
          rel="noreferrer"
        >
          15m Quickstart Blog Tutorial
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://remix.run/tutorials/jokes"
          rel="noreferrer"
        >
          Deep Dive Jokes App Tutorial
        </a>
      </li>
      <li>
        <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
          Remix Docs
        </a>
      </li>
    </ul>
  );
}

function SkeletonP() {
  return (
    <p>
      <span className="skeleton-box" style={{ width: '80%' }}></span>
      <span className="skeleton-box" style={{ width: '90%' }}></span>
      <span className="skeleton-box" style={{ width: '83%' }}></span>
    </p>
  );
}
