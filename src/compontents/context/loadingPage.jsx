import Loader from 'react-loader-spinner';
import {Container, LinearProgress} from "@material-ui/core";
import {TSLogo} from "../../styles/svgs";

export const LoadingPage = () => (
  <Container
    maxWidth={'xl'}
    disableGutters={true}
    style={{backgroundColor: '#252531', height: '100vh'}}
  >
    <div style={{position: 'absolute', top: '40%', width: '100%'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Loader style={{margin: 'auto'}} type={'Watch'} color="white" height={100} width={100}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <TSLogo/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <div style={{width: '100%'}}>
          <LinearProgress classes={{root: 'loadingbar'}} />
          <LinearProgress color="secondary"/>
        </div>
      </div>
    </div>
  </Container>
)
