import React from "react";
import { Provider } from "./AppContext";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Categories from "./Components/Categories/Categories";
import Header from "./Components/Header/Header";
import ImaginaryArchitecturesPrompt from "./Components/ImaginaryArchitectures/Prompt";
import ImaginaryArchitecturesAction from "./Components/ImaginaryArchitectures/Action";
import IAgreePrompt from "./Components/IAgree/Prompt";
import IAgreeAction from "./Components/IAgree/Action";
import UmbertoEcoPrompt from "./Components/UmbertoEco/Prompt";
import UmbertoEcoAction from "./Components/UmbertoEco/Action";
import PatentDependingPrompt from "./Components/PatentDepending/Prompt";
import PatentDependingAction from "./Components/PatentDepending/Action";
import CultureClashPrompt from "./Components/CultureClash/Prompt";
import CultureClashAction from "./Components/CultureClash/Action";
import SlowTechnologyPrompt from "./Components/SlowTechnology/Prompt";
import SlowTechnologyAction from "./Components/SlowTechnology/Action";
import SmellOfControlPrompt from "./Components/SmellOfControl/Prompt";
import SmellOfControlAction from "./Components/SmellOfControl/Action";
import UnitedMicroKingdomsPrompt from "./Components/UnitedMicroKingdoms/Prompt";
import UnitedMicroKingdomsAction from "./Components/UnitedMicroKingdoms/Action";
import AuralArchitecturesPrompt from "./Components/AuralArchitectures/Prompt";
import AuralArchitecturesAction from "./Components/AuralArchitectures/Action";
import ArchitecturalPhotographyPrompt from "./Components/ArchitecturalPhotography/Prompt";
import ArchitecturalPhotographyAction from "./Components/ArchitecturalPhotography/Action";
import GeneralModal from "./Components/Modal/GeneralModal";
import IAModal from "./Components/Modal/IAModal";
import AAModal from "./Components/Modal/AAModal";
import APModal from "./Components/Modal/APModal";
import CCModal from "./Components/Modal/CCModal";
import IGModal from "./Components/Modal/IGModal";
import PDModal from "./Components/Modal/PDModal";
import SCModal from "./Components/Modal/SCModal";
import STModal from "./Components/Modal/STModal";
import UEModal from "./Components/Modal/UEModal";
import UMKModal from "./Components/Modal/UMKModal";

function App() {
  return (
    <Provider>
      <Header />
      <Row>
        <Col sm={3} >
            <Categories />
        </Col>
        <Col>
          <div class="main-content">
            <ImaginaryArchitecturesPrompt />
            <ImaginaryArchitecturesAction />
            <IAgreePrompt />
            <IAgreeAction />
            <UmbertoEcoPrompt />
            <UmbertoEcoAction />
            <PatentDependingPrompt />
            <PatentDependingAction />
            <CultureClashPrompt />
            <CultureClashAction />
            <SlowTechnologyPrompt />
            <SlowTechnologyAction />
            <SmellOfControlPrompt />
            <SmellOfControlAction />
            <UnitedMicroKingdomsPrompt />
            <UnitedMicroKingdomsAction />
            <AuralArchitecturesPrompt />
            <AuralArchitecturesAction />
            <ArchitecturalPhotographyPrompt />
            <ArchitecturalPhotographyAction />
          </div>
        </Col>
      </Row>
      <GeneralModal />
      <IAModal />
      <AAModal />
      <APModal />
      <CCModal />
      <IGModal />
      <PDModal />
      <SCModal />
      <STModal />
      <UEModal />
      <UMKModal />
    </Provider>
  );
}

export default App;
