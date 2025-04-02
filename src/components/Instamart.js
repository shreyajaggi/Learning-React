import { useState } from "react";

const Section = ({ heading, description, isVisible, setIsVisible }) => {
  return (
    <div className="border-2 p-2 m-2">
      <h1 className="font-bold">{heading}</h1>
      {isVisible && <p>{description}</p>}
      {isVisible ? (
        <button
          className="border-2 bg-amber-200"
          onClick={() => {
            setIsVisible("hideClicked");
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="border-2 bg-amber-200"
          onClick={() => {
            setIsVisible("showClicked");
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <>
      <Section
        heading={"ABOUT"}
        description={
          "Exercitation veniam ad nulla qui nostrud tempor labore amet do quis minim aliquip pariatur. Ea nulla dolore deserunt ullamco. Aliquip do ea ullamco anim laboris aliqua anim cillum est pariatur voluptate nisi cupidatat qui. Reprehenderit commodo excepteur aliqua commodo excepteur eu ad cillum nisi eiusmod nulla fugiat nulla pariatur. Tempor culpa aute dolore elit. Duis ex anim exercitation voluptate tempor in nostrud. Aliquip quis qui sint adipisicing Lorem labore proident sint."
        }
        setIsVisible={(str) => {
          str === "showClicked" && setVisibleSection("about");
          str === "hideClicked" && setVisibleSection("");
        }}
        isVisible={visibleSection === "about"}
      />
      <Section
        heading={"TEAM"}
        description={
          "Culpa nostrud id irure nisi commodo nulla mollit culpa velit nulla velit. Dolore deserunt dolor pariatur culpa consectetur elit non do. Magna excepteur cupidatat quis fugiat voluptate exercitation consequat ad amet et veniam Lorem exercitation. "
        }
        setIsVisible={(str) => {
          str === "showClicked" && setVisibleSection("team");
          str === "hideClicked" && setVisibleSection("");
        }}
        isVisible={visibleSection === "team"}
      />
      <Section
        heading={"CAREERS"}
        description={
          "Sunt anim laborum amet ipsum ea non voluptate proident sunt officia adipisicing consequat amet. Ad in cillum ipsum dolor anim voluptate non voluptate. Ullamco mollit enim mollit ea sint excepteur culpa est exercitation ullamco cupidatat excepteur irure. Dolor commodo ea occaecat ex consectetur sint non pariatur officia adipisicing veniam."
        }
        setIsVisible={(str) => {
          str === "showClicked" && setVisibleSection("careers");
          str === "hideClicked" && setVisibleSection("");
        }}
        isVisible={visibleSection === "careers"}
      />
    </>
  );
};
export default Instamart;
