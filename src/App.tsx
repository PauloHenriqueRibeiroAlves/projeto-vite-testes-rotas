import { RoutList } from "./RoutList";

const App = () => {
  return (
    <div className="p-4">
      <header>
        <h1>Titulo da pagina</h1>
      </header>
      <hr/>
      <div className="py-4">
        <RoutList/>
      </div>
      <hr/>
      <footer>
        toddos os direitos reservados...
      </footer>
    </div>
  );
}
//npm run dev
export default App;
