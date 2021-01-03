import MetaTags from 'react-meta-tags';

export const Tags = props => (
  <MetaTags>
    <title>{props.title}</title>
    <meta name="description" content={props.description}/>
    <meta name="keywords" content={props.keywords}/>
    <meta property="og:title" content={props.title}/>
    <meta property="og:description" content={props.description}/>
    {props.image ?
      <meta property="og:image" content={props.image}/> : null}
    <meta property="og:url" content="https://tehnickaskolakolubara.edu.rs/"/>
    <meta property="og:type" content="website"/>
    <meta name="twitter:title" content={props.title}/>
    <meta name="twitter:description" content={props.description}/>
    {props.image ?
      <meta name="twitter:image" content={props.image}/> : null}
    <meta name="twitter:card" content="summary_large_image"/>
  </MetaTags>
)
