type AppConfig = {
    fakeApiUrl: string;
    loginKey:string
};

export const config: AppConfig = {
  fakeApiUrl: process.env.REACT_APP_FAKE_API_URL as string,
  loginKey: process.env.REACT_APP_GOOGLE_AUTH as string,
};