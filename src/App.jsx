import '@/styles/App.css';
import { ConfigProvider } from 'antd';
import MyRoutes from './routes/routes';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFA73A',
          fontFamily: 'jf-openhuninn',
        },
      }}
    >
      <MyRoutes />
    </ConfigProvider>
  );
}

export default App;
