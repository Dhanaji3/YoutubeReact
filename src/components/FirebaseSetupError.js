import React from 'react';

const FirebaseSetupError = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🔥</div>
          <h1 className="text-3xl font-bold text-red-600 mb-2">
            Firebase Not Configured
          </h1>
          <p className="text-gray-600 text-lg">
            Please complete the Firebase setup to continue
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
          <h2 className="font-bold text-red-800 mb-2">
            ❌ Missing Firebase Credentials
          </h2>
          <p className="text-red-700">
            Your `.env` file is missing Firebase configuration. This is required
            for authentication to work.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="font-bold text-gray-800 mb-3 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                1
              </span>
              Create Firebase Project
            </h3>
            <ol className="ml-11 space-y-2 text-gray-700">
              <li>
                • Go to{' '}
                <a
                  href="https://console.firebase.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Firebase Console
                </a>
              </li>
              <li>• Click "Add project"</li>
              <li>• Enter project name and create</li>
            </ol>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-3 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                2
              </span>
              Enable Authentication
            </h3>
            <ol className="ml-11 space-y-2 text-gray-700">
              <li>• Go to Build → Authentication</li>
              <li>• Click "Get started"</li>
              <li>• Enable Email/Password provider</li>
            </ol>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-3 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                3
              </span>
              Copy Your Credentials
            </h3>
            <ol className="ml-11 space-y-2 text-gray-700">
              <li>• Go to Settings → Project Settings</li>
              <li>• Find "Your apps" section</li>
              <li>• Copy the Firebase config code</li>
            </ol>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-3 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                4
              </span>
              Update .env File
            </h3>
            <div className="ml-11 bg-gray-100 p-4 rounded font-mono text-sm">
              <pre className="text-gray-800 overflow-x-auto">
                {`REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id`}
              </pre>
            </div>
            <p className="ml-11 text-gray-600 text-sm mt-2">
              Then restart the dev server:{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">npm start</code>
            </p>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6">
          <h3 className="font-bold text-green-800 mb-2">📖 Need Help?</h3>
          <p className="text-green-700">
            Check{' '}
            <code className="bg-white px-2 py-1 rounded border">
              FIREBASE_SETUP.md
            </code>{' '}
            in your project root for detailed instructions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirebaseSetupError;
