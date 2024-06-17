import React from "react";
import { Link  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = () => {
    let Navigate=useNavigate();
  return (
    <div>
        <button onClick={()=>{
            Navigate(-1);
        }}>next</button>
        <Link to="/">Home</Link>
        <Link to ="Page1">page1</Link>
    <Link to="movie">Movie</Link>
      <h1>HOME</h1>
      <p>
        ChatGPT Certainly! Here's a draft for a homepage: Welcome to Our Website
        Discover a world of possibilities with [Your Company Name]. Whether
        you're looking to explore innovative solutions, find inspiration for
        your next project, or connect with like-minded individuals, you've come
        to the right place. At [Your Company Name], we pride ourselves on
        [briefly describe your core mission or what sets you apart]. Our
        commitment to [key value proposition] ensures that [briefly describe the
        benefit or value customers receive]. Explore our diverse range of
        [products/services/solutions] designed to [solve specific problems,
        enhance experiences, etc.]. Join a community of [your target audience]
        who trust us for [your unique selling point or advantage]. [Optional:
        Highlight any current promotions, new releases, or upcoming events.]
        Ready to embark on your journey with us? Dive in and discover why [Your
        Company Name] is your partner of choice in [your industry or niche].
      </p>
    </div>
  );
};

export default Home;