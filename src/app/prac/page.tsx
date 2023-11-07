'use client'
// login.tsx
import React, { useState } from 'react';
import {CognitoIdentityProviderClient,InitiateAuthCommand,RespondToAuthChallengeCommand,} from '@aws-sdk/client-cognito-identity-provider';

const clientId = '1727702mdj4021tmc218s3efab'; // Replace with your App Client ID
const cognitoClient = new CognitoIdentityProviderClient({ region: 'us-east-1' }); // Replace with your AWS region

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [session, setSession] = useState('');
  const [challengeName, setChallengeName] = useState<string | null>(null);
  const [challengeParams, setChallengeParams] = useState<any>({});
  const [message, setMessage] = useState('');
  

  const handleSignIn = async () => {
    try {
      const authCommand = new InitiateAuthCommand({
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: clientId,
        AuthParameters: {
          USERNAME: username,
          PASSWORD: password,
        },
      });

      const authResponse :any = await cognitoClient.send(authCommand);

      if (authResponse.ChallengeName) {
        setChallengeName(authResponse.ChallengeName);
        setChallengeParams(authResponse.ChallengeParameters);
        setSession(authResponse.Session)
      } else {
        // setSession(authResponse.Session);
        setMessage('Login successful.');
        
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  const handleChallengeResponse = async () => {
    try {
      const respondToChallengeCommand = new RespondToAuthChallengeCommand({
        ChallengeName: 'NEW_PASSWORD_REQUIRED',
        ClientId: clientId,
        Session : session,
        ChallengeResponses: {
          NEW_PASSWORD: newPassword,
          USERNAME: username,
        
        },
      });

      const challengeResponse = await cognitoClient.send(respondToChallengeCommand);

      if (challengeResponse.AuthenticationResult) {
        setMessage('Password changed successfully.');
      } else {
        setMessage('Challenge response failed.');
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };
  return (
    <div>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>

      {message}

      {challengeName === 'NEW_PASSWORD_REQUIRED' && (
        <div>
          <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <button onClick={handleChallengeResponse}>Change Password</button>
        </div>
      )}
    </div>
  );
};

export default Login;
