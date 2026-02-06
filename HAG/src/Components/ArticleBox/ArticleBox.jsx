import "./ArticleBox.css"

export default function ArticleBox({ name, description, Symptons, Treatments, Link ,ID}) {

    return (
        <>

        {/* This is the framework for the article box */}
            <div className="HealthAdviceBox" id={ID}>
                <h2 className="HealthAdviceBoxTitle"> {name} </h2>
                <h3> What Is it?</h3>
                <p> {description}</p>
                <h3> What are symptons? </h3>
                {/* Map is used so that a list of any length can be apssed through and displayed with no issues. */}
                {Symptons.map((sympton, item) => (
                    <ul key={item}> <li> {sympton} </li></ul>
                ))}
                <h3> What are The treatments</h3>
                {Treatments.map((treatment, item) => (
                    <ul key={item}> <li> {treatment} </li></ul>
                ))}
                <a href={Link}> Read more </a>
            </div>

        </>
    )
}