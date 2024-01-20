type AppConfig = {
    fakeApiUrl: sring;
};

export const config: AppConfig = {
    fakeApiUrl: process.env.REACT_APP_FAKE_API_URL  as sring;
}