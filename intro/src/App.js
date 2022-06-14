import useJsonFetch from './useJsonFetch';
import DataFetch from './dataFetch';
import LoadingFetch from './loadingFetch';
import ErrorFetch from './errorFetch';
import './App.css';

function App() {
  return (
    <>
    <DataFetch/>
    <LoadingFetch/>
    <ErrorFetch/>
    </>
  );
}

export default App;
