import { Outlet } from "react-router";
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>Hi, I am Shreya, I am creating a Food Ordering App.</p>
      <Outlet />
    </div>
  );
};

export default About;
