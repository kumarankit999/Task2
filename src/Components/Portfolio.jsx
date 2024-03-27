/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Photo3.jpg";

const imageAltText = "A car in the middle of a forest with a beautiful view of the mountains in the background.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Blogs of life",
    description:
      "This is my blog website about life",
    url: "https://kumarankit1.hashnode.dev/unleash-the-power-of-your-kubernetes-clusters",
  },
  {
    title: "K8sGPT",
    description:
      "In the ever-evolving landscape of the digital world, a lightning-fast online presence can make all the difference. Enter AWS CloudFront – the game-changing solution.",
    url: "https://kumarankit1.hashnode.dev/the-great-aws-cloudfront",
  },
  {
    title: "Untold Secrets of AWS Lambda",
    description:
      "Ultimate Guide to Mastering Serverless Wizardry!",
    url: "https://kumarankit1.hashnode.dev/untold-secrets-of-aws-lambda",
  },
  {
    title: "AWS Elastic Load Balancer",
    description:
      "Balancing Act in the Cloud: Demystifying AWS Load Balancers for Optimal Performance.",
    url: "https://kumarankit1.hashnode.dev/aws-elastic-load-balancer",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
