import Masthead from "./components/Masthead";
import FeatureArticle from "./components/FeatureArticle";
import RoomsSpread from "./components/RoomsSpread";
import VisitNotes from "./components/VisitNotes";
import ServiceMenu from "./components/ServiceMenu";
import Subscribe from "./components/Subscribe";
import Almanac from "./components/Almanac";
import Colophon from "./components/Colophon";

export default function App() {
  return (
    <div className="min-h-screen paper-grain text-ink">
      <Masthead />
      <main>
        <FeatureArticle />
        <RoomsSpread />
        <ServiceMenu />
        <VisitNotes />
        <Almanac />
        <Subscribe />
      </main>
      <Colophon />
    </div>
  );
}
