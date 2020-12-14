import React from "react"
import Title from "./Title"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query);
  // console.log(data)
  // Lets start destructuring
  const {
    allStrapiJobs: {
      nodes: jobs},
    } = data
    // console.log(jobs);

    const [value, setValue] = React.useState(0)
    // By setting useState to 0 --> useState(0) I will get
    // the first item on the list
    // That item on the list will be equal to "value"
    // and I will pass in that value
    // Once I click on a button I use the setValue
    // in order to change "value" in .... = jobs[value];


    const { company, position, date, desc } = jobs[value];
    // const { company, position, date, desc } = jobs[1]; <-- this way is hardcoded
    console.log(company, position, date, desc);

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="job-center">
        {/* btn container where we show all the buttons */}
        <div className="btn-container">
          {jobs.map( (job, index) => {
            // Remember job represent each and every parameter in our array
            return (
              <button 
                key={job.strapiId} 
                // only once I click than I run my set index
                // Also another reason for the arrow function () =>
                // is because I dont want to run the setValue right away
                // because we are passing the index : () => setValue(index).
                // Because we are passing the index I cannot just reference the function
                // but I need to invoke it so only once I click than I run my set index
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >{job.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        {/* <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {
            desc.map(itemInDescription => {
              return (
                <div key={itemInDescription.id} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{itemInDescription.name}</p>
                </div>
              )
            })
          }
        </article> */}
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
