import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'On-Chain Tracking',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Map and authenticate referrals directly on the blockchain, ensuring transparency and
        immutability.
      </>
    ),
  },
  {
    title: 'Customizable Programs',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Tailor your referral system with flexible parameters to fit your project's unique
        needs.
      </>
    ),
  },
  {
    title: 'Multi-Level Rewards',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Incentivize not just direct referrers, but also those higher up in the dependency tree.
      </>
    ),
  },
  {
    title: 'Slashing Mechanism',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Implement penalties to maintain community quality and discourage unwanted behavior.
      </>
    ),
  },
  {
    title: 'Web-of-Trust Authentication',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Leverage referral networks for proof-of-personhood and access control.
      </>
    ),
  },
  {
    title: 'Easy to Use SDKs',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Build on top of our open source referral system.
      </>
    ),
  },
  {
    title: 'GraphQL APIs',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Easily query your social graph with our APIs designed to query referrals.
      </>
    ),
  },
  {
    title: 'Boilerplate App',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Manage and even customize your referral flow.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
