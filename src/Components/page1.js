import React, { useState } from "react";
import { useContext } from "react";
import movieContext from "../context/movieContext";
const Page1 = () => {
    let setmovies=useContext(movieContext);
    let[userinput,setuserinput]=useState("");
  return (
    <div>
      <h1>Page1</h1>
      <h3>add movies here</h3>
      <input type="text" value={userinput} placeholder="put input here" onChange={(e)=>{
   setuserinput(e.target.value);
      }}></input>
      <button onClick={()=>{
        setmovies.setmovies(userinput);
      }}>Add</button>
      <p>
        Welcome to [Your Company Name] - Where [briefly describe what your
        company offers or specializes in]. Explore Our Innovative Solutions -
        Discover how we [briefly describe your main products or services]. Our
        Commitment to Excellence - We strive to [briefly describe your company's
        core values or commitment to quality/service]. Join Our Community -
        Connect with [your target audience] and [briefly describe the benefits
        of being part of your community]. Stay Updated - Keep informed about
        [briefly mention updates, news, or events relevant to your audience].
        Featured Products/Services - Check out our top picks for
        [products/services] that are [briefly describe their key benefits].
        Customer Testimonials - See what our customers are saying about us! Get
        in Touch - Have questions? Reach out to our friendly team today! Learn
        More About Us - Explore our story, mission, and why we're passionate
        about [your industry/niche]. Join Us on Social Media - Stay connected
        and follow us on [list your social media platforms]. Feel free to expand
        on each point and tailor the content to match your specific brand voice
        and offerings.
      </p>
    </div>
  );
};


export default Page1;
