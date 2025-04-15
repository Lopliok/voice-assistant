import ExampleComponent from './components/Sample';

function App() {
  return (
    <div className="bg-pastelPurple px-6">
      <div className="h-screen flex items-center justify-center bg-pastelPurple">
        <h1 className="text-3xl font-bold text-black">Test barvy 🎨</h1>
      </div>
      <ExampleComponent />
    </div>
  );
}

export default App;
