import React from 'react';
import awsConfig from '../../aws-exports';
import { Amplify } from 'aws-amplify';
const AmplifyProvider = ({ children }) => {
    Amplify.configure({ ...awsConfig, ssr: true });

    return <>{children}</>;
};

export default AmplifyProvider;
