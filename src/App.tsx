import GlobalStyles, { FrameLayout } from './styles/global';
import RegisterForm from './components/CreateInspectionForm';
import InspectionHistory from './components/InspectionHistory';

function App() {
  return (
    <FrameLayout>
      <GlobalStyles />
      <RegisterForm />
      <InspectionHistory />
    </FrameLayout>
  );
}

export default App;
