import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'On-Chain Tracking',
    image: require('@site/static/img/docs-tracking.png').default,
    description: (
      <>
        Map and authenticate referrals directly on the blockchain, ensuring transparency and
        immutability.
      </>
    ),
  },
  {
    title: 'Customizable Programs',
    image: require('@site/static/img/docs-puzzle.png').default,
    description: (
      <>
        Tailor your referral system with flexible parameters to fit your project's unique
        needs.
      </>
    ),
  },
  {
    title: 'Multi-Level Rewards',
    image: require('@site/static/img/docs-mlm.png').default,
    description: (
      <>
        Incentivize not just direct referrers, but also those higher up in the dependency tree.
      </>
    ),
  },
  {
    title: 'Slashing Mechanism',
    image: require('@site/static/img/docs-stakeslash.png').default,
    description: (
      <>
        Implement penalties to maintain community quality and discourage unwanted behavior.
      </>
    ),
  },
  {
    title: 'Web-of-Trust Authentication',
    image: require('@site/static/img/docs-security.png').default,
    description: (
      <>
        Leverage referral networks for proof-of-personhood and access control.
      </>
    ),
  },
  {
    title: 'Easy to Use SDKs',
    image: require('@site/static/img/docs-toolbox.png').default,
    description: (
      <>
        Build on top of our open source referral system.
      </>
    ),
  },
  {
    title: 'GraphQL APIs',
    image: require('@site/static/img/docs-api.png').default,
    description: (
      <>
        Easily query your social graph with our APIs designed to query referrals.
      </>
    ),
  },
  {
    title: 'Boilerplate App',
    image: require('@site/static/img/docs-boilerplate.png').default,
    description: (
      <>
        Manage and even customize your referral flow.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
